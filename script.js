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
    // Esta función se necesita para showGameRecommendations
    function recommendGames(gameTitle) {
        const game = recursos.find(g => g.nombre === gameTitle);
        if (!game || !game.tipo) return [];

        // Buscar juegos del mismo tipo, excluyendo el actual
        const similar = recursos.filter(g =>
            g.id != game.id && // Excluir el juego actual por ID
            g.tipo === game.tipo
        ).slice(0, 3); // Limitar a 3 recomendaciones

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

    // === MODO BAJO RECURSOS (Corregido) ===
    function enableLowResourceMode() {
        const isLowMode = confirm("¿Activar modo bajo recursos? Esto desactivará imágenes (excepto las de juegos) y animaciones.");
        if (!isLowMode) return;

        // Desactivar imágenes, pero NO las de los juegos en la galería principal
        // Seleccionamos todas las imágenes que NO están dentro de .gallery__container
        document.querySelectorAll("img:not(.gallery__container img)").forEach(img => {
            img.style.display = "none";
        });

        // Desactivar animaciones
        // Verificar si ya se ha agregado el estilo para evitar duplicados
        if (!document.getElementById('low-resource-style')) {
            const style = document.createElement('style');
            style.id = 'low-resource-style'; // Damos un ID para identificarlo
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
        }

        // Desactivar scripts pesados (simulado)
        console.log("Modo bajo recursos activado");
        showNotification("📱 Modo bajo recursos activado. Imágenes (excepto juegos) y animaciones desactivadas.");
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

    // === FUNCIONES PARA TEMAS ===
    function changeTheme() {
        const theme = document.getElementById("theme-selector").value;
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("selectedTheme", theme);
        // Opcional: Notificación al cambiar tema
        // showNotification(`🎨 Tema cambiado a ${theme || 'Oscuro'}`);
    }

    // Cargar tema guardado al inicio
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme !== null) { // Comprobar si existe (incluso si es "")
            document.getElementById("theme-selector").value = savedTheme;
            document.body.setAttribute("data-theme", savedTheme);
        }
    }

    // === INICIALIZACIÓN DE FUNCIONES ===
    // Inicializar notificaciones
    initNotifications();
    
    // Cargar tema guardado
    loadSavedTheme();

    // Exponer funciones globales que se usan desde el HTML inline
    window.randomGame = randomGame;
    window.enableLowResourceMode = enableLowResourceMode;
    window.changeTheme = changeTheme; // Exponer changeTheme
});
