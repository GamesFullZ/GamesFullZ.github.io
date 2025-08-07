document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('gameModal');
    const contactForm = document.querySelector('form'); // Corregido el selector

    let displayedGames = 0;
    const gamesPerLoad = 2;

    // Formatear números
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Cargar juegos
    function loadGames() {
        const fragment = document.createDocumentFragment();
        const toLoad = recursos.slice(displayedGames, displayedGames + gamesPerLoad);

        toLoad.forEach(game => {
            const img = document.createElement('img');
            img.src = game.imagen;
            img.alt = game.nombre;
            img.classList.add('game-item');
            img.dataset.gameId = game.id;
            img.addEventListener('click', () => openModal(game));
            fragment.appendChild(img);
        });

        gallery.appendChild(fragment);
        displayedGames += toLoad.length;

        if (displayedGames >= recursos.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Buscador
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();
        document.querySelectorAll('.game-item').forEach(img => {
            const gameId = img.dataset.gameId;
            const game = recursos.find(g => g.id == gameId);
            if (game) {
                const matches = game.nombre.toLowerCase().includes(term) ||
                    game.tipo.toLowerCase().includes(term);
                img.style.display = matches ? 'block' : 'none';
            }
        });
    });

    // Botón "Ver más"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadGames);
    }

    // Modal
    function openModal(game) {
        document.getElementById('modalImage').src = game.imagen;
        document.getElementById('modalTitle').textContent = game.nombre;
        document.getElementById('modalInfo').textContent = game.descripcion;
        document.getElementById('modalRequirements').innerHTML = game.requisitos;
        document.getElementById('modalRating').textContent = game.rating;
        document.getElementById('modalDownloads').textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;

        // 🔁 Corregido: ID es linkGofile, no linkDirect
        const linkGofile = document.getElementById('linkGofile');
        if (linkGofile) {
            linkGofile.href = game.links.direct || "#";
        }

        // Comentarios
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = '';

        // Comentarios originales
        game.comments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

        // Comentarios del usuario (localStorage)
        const userComments = loadComments(game.id);
        userComments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

        // Guardar ID del juego en el modal
        modal.dataset.gameId = game.id;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Mostrar recomendaciones
        showGameRecommendations(game.nombre);
    }

    // Cerrar modal
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Funciones de comentarios
    function saveComments(gameId, comments) {
        localStorage.setItem(`comments_${gameId}`, JSON.stringify(comments));
    }

    function loadComments(gameId) {
        const saved = localStorage.getItem(`comments_${gameId}`);
        return saved ? JSON.parse(saved) : [];
    }

    // Añadir comentario
    document.getElementById('addCommentBtn').addEventListener('click', function () {
        const input = document.getElementById('commentInput');
        const commentsContainer = document.getElementById('commentsContainer');
        const currentGameId = modal.dataset.gameId;

        if (input && input.value.trim() && currentGameId) {
            const commentText = input.value.trim();

            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = commentText;
            commentsContainer.appendChild(div);

            const savedComments = loadComments(currentGameId);
            savedComments.push(commentText);
            saveComments(currentGameId, savedComments);

            input.value = '';
        }
    });

    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // Cargar primeros juegos
    loadGames();

    // ================================================
    // NUEVAS FUNCIONES AGREGADAS Y SIMPLIFICADAS
    // ================================================

    // === NOTIFICACIONES INTELIGENTES ===
    function showNotification(text) {
        const notif = document.createElement("div");
        notif.className = "notification";
        notif.textContent = text;
        notif.style.position = "fixed";
        notif.style.bottom = "20px"; // Cambiado a abajo
        notif.style.right = "20px";
        notif.style.background = "rgba(50, 50, 50, 0.9)"; // Fondo más sutil
        notif.style.color = "white";
        notif.style.padding = "12px 20px"; // Ajustado padding
        notif.style.borderRadius = "8px";
        notif.style.zIndex = "9999";
        notif.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        notif.style.fontSize = "14px"; // Tamaño de fuente más pequeño
        notif.style.maxWidth = "300px"; // Ancho máximo
        notif.style.animation = "slideIn 0.3s ease"; // Animación más sutil

        // Agregar animación CSS si no existe
        if (!document.querySelector('#notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notif);
        setTimeout(() => {
            if (notif.parentNode) {
                notif.style.animation = "slideIn 0.3s ease reverse";
                setTimeout(() => notif.remove(), 300);
            }
        }, 3000); // Auto-eliminar después de 3 segundos
    }

    // Función para mostrar notificaciones automáticas
    function initNotifications() {
        // Notificación de bienvenida
        setTimeout(() => {
            showNotification("¡Bienvenido a GamesFullZ! 🎮");
        }, 2000);

        // Notificación de nuevo juego (simulada)
        setTimeout(() => {
            showNotification("🎮 ¡Nuevo juego disponible!");
        }, 10000);
    }

    // === IA RECOMENDADORA DE JUEGOS ===
    function recommendGames(gameTitle) {
        const game = recursos.find(g => g.nombre === gameTitle);
        if (!game || !game.tipo) return [];

        const similar = recursos.filter(g =>
            g !== game &&
            g.tipo === game.tipo
        ).slice(0, 3);

        return similar;
    }

    // Mostrar recomendaciones cuando se ve un juego
    function showGameRecommendations(gameTitle) {
        const recommendations = recommendGames(gameTitle);
        if (recommendations.length > 0) {
            const recText = recommendations.map(g => g.nombre).join(", ");
            showNotification(`Si te gustó ${gameTitle}, prueba: ${recText}`);
        }
    }

    // === MODO BAJO RECURSOS ===
    function enableLowResourceMode() {
        const isLowMode = confirm("¿Activar modo bajo recursos? Esto desactivará imágenes y animaciones.");
        if (!isLowMode) return;

        // Desactivar imágenes
        document.querySelectorAll("img").forEach(img => {
            img.style.display = "none";
        });

        // Desactivar animaciones
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation: none !important;
                transition: none !important;
            }
            .no-animation {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        // Desactivar scripts pesados (simulado)
        console.log("Modo bajo recursos activado");
        showNotification("📱 Modo bajo recursos activado");
    }

    // === JUEGO ALEATORIO ===
    function randomGame() {
        if (recursos.length === 0) {
            showNotification("❌ No hay juegos disponibles.");
            return;
        }
        const random = recursos[Math.floor(Math.random() * recursos.length)];
        openModal(random);
        showNotification(`🎲 Juego aleatorio: ${random.nombre}`);
    }

    // === IA ASISTENTE CON CHATGPT (a través de tu backend) ===
    async function askIA() {
        const input = document.getElementById("ia-input");
        const responseDiv = document.getElementById("ia-response");
        const question = input.value.trim();

        if (!question) {
            showNotification("Por favor, escribe una pregunta.");
            return;
        }

        // Mostrar que está "pensando"
        responseDiv.style.display = "block";
        responseDiv.innerHTML = '<div class="loader">Pensando</div>'; // Asegúrate de tener el estilo .loader en tu CSS

        try {
            // =======> ESTA ES LA PARTE IMPORTANTE <=======
            // En lugar de lógica local, llamamos a TU backend
            const response = await fetch('api_proxy.php', { // <--- Cambia 'api_proxy.php' por la ruta a tu archivo backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: question })
            });

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.status}`);
            }

            const data = await response.json();
            
            if (data && data.answer) {
                responseDiv.innerHTML = `<p><strong>IA:</strong> ${data.answer}</p>`;
            } else {
                throw new Error("Respuesta inválida del servidor.");
            }
        } catch (error) {
            console.error("Error al contactar con la IA:", error);
            responseDiv.innerHTML = `<p><strong>Error:</strong> No se pudo obtener una respuesta. (${error.message})</p>`;
            showNotification("Hubo un error al contactar con la IA.");
        }
    }

    // Exponer la función askIA globalmente para que el botón del HTML la pueda llamar
    window.askIA = askIA;

    // === INICIALIZACIÓN DE FUNCIONES ===
    // Inicializar notificaciones
    initNotifications();

    // Exponer funciones globales que se usan desde el HTML inline
    window.randomGame = randomGame;
    window.enableLowResourceMode = enableLowResourceMode;
    // changeTheme se define en el HTML inline y usa localStorage directamente, no necesita exposición aquí.
});

