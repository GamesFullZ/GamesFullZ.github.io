document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('gameModal');
    const contactForm = document.querySelector('form');

    let displayedGames = 0;
    const gamesPerLoad = 2;

    // ================================ 
    // 1. FORMATO DE NÚMEROS
    // ================================
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // ================================ 
    // 2. CARGA DE JUEGOS
    // ================================
    function loadGames() {
        if (!window.recursos || recursos.length === 0) {
            gallery.innerHTML = '<p style="color: #aaa; text-align: center;">No hay juegos disponibles.</p>';
            loadMoreBtn.style.display = 'none';
            return;
        }

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

    // ================================ 
    // 3. BUSCADOR
    // ================================
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase().trim();
        if (!term) {
            document.querySelectorAll('.game-item').forEach(img => img.style.display = 'block');
            return;
        }

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

    // ================================ 
    // 4. BOTÓN "VER MÁS"
    // ================================
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadGames);
    }

    // ================================ 
    // 5. MODAL DE JUEGO
    // ================================
    function openModal(game) {
        document.getElementById('modalImage').src = game.imagen;
        document.getElementById('modalTitle').textContent = game.nombre;
        document.getElementById('modalInfo').textContent = game.descripcion;
        document.getElementById('modalRequirements').textContent = game.requisitos;
        document.getElementById('modalRating').textContent = game.rating;
        document.getElementById('modalDownloads').textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;

        const linkGofile = document.getElementById('linkGofile');
        if (linkGofile && game.links && game.links.direct) {
            linkGofile.href = game.links.direct;
        } else if (linkGofile) {
            linkGofile.href = "#";
            linkGofile.style.opacity = "0.6";
            linkGofile.textContent = "Enlace no disponible";
        }

        // Limpiar y cargar comentarios
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = '';

        // Comentarios predefinidos
        game.comments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

        // Comentarios del usuario
        const userComments = loadComments(game.id);
        userComments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

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

    // ================================ 
    // 6. COMENTARIOS (localStorage)
    // ================================
    function saveComments(gameId, comments) {
        localStorage.setItem(`comments_${gameId}`, JSON.stringify(comments));
    }

    function loadComments(gameId) {
        const saved = localStorage.getItem(`comments_${gameId}`);
        return saved ? JSON.parse(saved) : [];
    }

    document.getElementById('addCommentBtn')?.addEventListener('click', function () {
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

    // ================================ 
    // 7. FORMULARIO DE CONTACTO
    // ================================
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // ================================ 
    // 8. NOTIFICACIONES
    // ================================
    function showNotification(text) {
        const notif = document.createElement("div");
        notif.className = "notification";
        notif.textContent = text;
        notif.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(50, 50, 50, 0.9);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            font-size: 14px;
            max-width: 300px;
            animation: slideIn 0.3s ease;
            pointer-events: auto;
        `;

        // Evitar duplicar estilos
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
        }, 3000);
    }

    function initNotifications() {
        setTimeout(() => showNotification("¡Bienvenido a GamesFullZ! 🎮"), 2000);
        setTimeout(() => showNotification("🎮 ¡Nuevo juego disponible!"), 10000);
    }

    // ================================ 
    // 9. RECOMENDACIONES DE JUEGOS
    // ================================
    function recommendGames(gameTitle) {
        const game = recursos.find(g => g.nombre === gameTitle);
        if (!game || !game.tipo) return [];

        return recursos
            .filter(g => g.id != game.id && g.tipo === game.tipo)
            .slice(0, 3);
    }

    function showGameRecommendations(gameTitle) {
        const recommendations = recommendGames(gameTitle);
        if (recommendations.length > 0) {
            const recText = recommendations.map(g => g.nombre).join(", ");
            showNotification(`Si te gustó ${gameTitle}, prueba: ${recText}`);
        }
    }

    // ================================ 
    // 10. MODO BAJO RECURSOS
    // ================================
    function enableLowResourceMode() {
        const isLowMode = confirm("¿Activar modo bajo recursos? Esto desactivará imágenes (excepto juegos) y animaciones.");
        if (!isLowMode) return;

        document.querySelectorAll("img:not(.gallery__container img)").forEach(img => {
            img.style.display = "none";
        });

        if (!document.getElementById('low-resource-style')) {
            const style = document.createElement('style');
            style.id = 'low-resource-style';
            style.textContent = `
                * { animation: none !important; transition: none !important; }
            `;
            document.head.appendChild(style);
        }

        showNotification("📱 Modo bajo recursos activado.");
    }

    // ================================ 
    // 11. JUEGO ALEATORIO
    // ================================
    function randomGame() {
        if (!window.recursos || recursos.length === 0) {
            showNotification("❌ No hay juegos disponibles.");
            return;
        }
        const random = recursos[Math.floor(Math.random() * recursos.length)];
        openModal(random);
        showNotification(`🎲 Juego aleatorio: ${random.nombre}`);
    }

    // ================================ 
    // 12. GESTIÓN DE TEMAS
    // ================================
    function changeTheme() {
        const theme = document.getElementById("theme-selector").value;
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("selectedTheme", theme);
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme !== null) {
            document.getElementById("theme-selector").value = savedTheme;
            document.body.setAttribute("data-theme", savedTheme);
        }
    }

    // ================================ 
    // 13. INICIALIZACIÓN
    // ================================
    loadGames();
    initNotifications();
    loadSavedTheme();

    // Hacer funciones accesibles globalmente
    window.randomGame = randomGame;
    window.enableLowResourceMode = enableLowResourceMode;
    window.changeTheme = changeTheme;
});
