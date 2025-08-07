<?php
// api_proxy.php

// 1. Solo aceptar solicitudes POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Método no permitido
    echo json_encode(['error' => 'Método no permitido']);
    exit();
}

// 2. Obtener el cuerpo de la solicitud
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// 3. Validar que se haya enviado una pregunta
if (!isset($data['question']) || empty(trim($data['question']))) {
    http_response_code(400); // Solicitud incorrecta
    echo json_encode(['error' => 'Falta la pregunta.']);
    exit();
}

$question = trim($data['question']);

// 4. =======> TU CLAVE API DE OPENAI <=======
// ==========================================
// ===== ¡¡¡COLOCA TU NUEVA CLAVE AQUÍ !!! ====
// ==========================================
$OPENAI_API_KEY = 'sk-tu_nueva_clave_api_aqui'; // <--- ¡¡¡TU NUEVA CLAVE API!!!

// 5. Preparar el mensaje para ChatGPT
// Puedes personalizar este "contexto" para que la IA sepa sobre tu web
$context = "Eres un asistente amigable para una página web de descarga de juegos gratis para PC llamada GamesFullZ. ";
$context .= "Responde de forma clara, concisa y útil. Si no sabes algo, sugiere que el usuario use el formulario de contacto. ";
$context .= "La página tiene: buscador, sección de contacto, tutorial para novatos, recomendador de hardware y temas.";

$messages = [
    ["role" => "system", "content" => $context],
    ["role" => "user", "content" => $question]
];

// 6. Preparar la solicitud a la API de OpenAI
$url = 'https://api.openai.com/v1/chat/completions';

$postData = json_encode([
    'model' => 'gpt-3.5-turbo', // O 'gpt-4' si tienes acceso y quieres más calidad (y costo)
    'messages' => $messages,
    'max_tokens' => 150, // Limitar la longitud de la respuesta
    'temperature' => 0.7 // Aleatoriedad de la respuesta
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $OPENAI_API_KEY // Aquí usas tu clave de forma segura
]);

// 7. Ejecutar la solicitud
$response = curl_exec($ch);

// 8. Verificar errores de cURL
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
    curl_close($ch);
    http_response_code(500);
    echo json_encode(['error' => 'Error en la solicitud cURL: ' . $error_msg]);
    exit();
}

curl_close($ch);

// 9. Decodificar la respuesta de OpenAI
$responseData = json_decode($response, true);

// 10. Verificar si la respuesta fue exitosa
if (isset($responseData['choices']) && count($responseData['choices']) > 0) {
    $answer = trim($responseData['choices'][0]['message']['content']);
    // 11. Enviar la respuesta de vuelta al frontend
    header('Content-Type: application/json');
    echo json_encode(['answer' => $answer]);
} else {
    // Hubo un error con la API de OpenAI
    http_response_code(500);
    if (isset($responseData['error'])) {
        echo json_encode(['error' => 'Error de OpenAI: ' . $responseData['error']['message']]);
    } else {
        echo json_encode(['error' => 'Error desconocido al obtener respuesta de OpenAI.']);
    }
}
?>