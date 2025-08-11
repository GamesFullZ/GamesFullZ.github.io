document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('gameModal');
    const contactForm = document.querySelector('form');

    let displayedGames = 0;
    const gamesPerLoad = 2;

    // Formatear números
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Cargar juegos
    function loadGames() {
        // Solo cargar juegos si estamos en la sección de juegos
        const gamesSection = document.getElementById('games-section');
        if (!gamesSection || !gamesSection.classList.contains('active')) {
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

        const linkGofile = document.getElementById('linkGofile');
        if (linkGofile) {
            linkGofile.href = game.links.direct || "#";
        }

        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = '';

        game.comments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

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
        showGameRecommendations(game.nombre);
    }

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

    function saveComments(gameId, comments) {
        localStorage.setItem(`comments_${gameId}`, JSON.stringify(comments));
    }

    function loadComments(gameId) {
        const saved = localStorage.getItem(`comments_${gameId}`);
        return saved ? JSON.parse(saved) : [];
    }

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

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // ================================================
    // NUEVAS FUNCIONES AGREGADAS Y SIMPLIFICADAS
    // ================================================

    function showNotification(text) {
        const notif = document.createElement("div");
        notif.className = "notification";
        notif.textContent = text;
        notif.style.position = "fixed";
        notif.style.bottom = "20px";
        notif.style.right = "20px";
        notif.style.background = "rgba(50, 50, 50, 0.9)";
        notif.style.color = "white";
        notif.style.padding = "12px 20px";
        notif.style.borderRadius = "8px";
        notif.style.zIndex = "9999";
        notif.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        notif.style.fontSize = "14px";
        notif.style.maxWidth = "300px";
        notif.style.animation = "slideIn 0.3s ease";

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
        setTimeout(() => {
            showNotification("¡Bienvenido a GamesFullZ! 🎮");
        }, 2000);

        setTimeout(() => {
            showNotification("🎮 ¡Nuevo juego disponible!");
        }, 10000);
    }

    function recommendGames(gameTitle) {
        const game = recursos.find(g => g.nombre === gameTitle);
        if (!game || !game.tipo) return [];

        const similar = recursos.filter(g =>
            g.id != game.id &&
            g.tipo === game.tipo
        ).slice(0, 3);

        return similar;
    }

    function showGameRecommendations(gameTitle) {
        const recommendations = recommendGames(gameTitle);
        if (recommendations.length > 0) {
            const recText = recommendations.map(g => g.nombre).join(", ");
            showNotification(`Si te gustó ${gameTitle}, prueba: ${recText}`);
        }
    }

    function enableLowResourceMode() {
        const isLowMode = confirm("¿Activar modo bajo recursos? Esto desactivará imágenes (excepto las de juegos) y animaciones.");
        if (!isLowMode) return;

        document.querySelectorAll("img:not(.gallery__container img)").forEach(img => {
            img.style.display = "none";
        });

        if (!document.getElementById('low-resource-style')) {
            const style = document.createElement('style');
            style.id = 'low-resource-style';
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

        console.log("Modo bajo recursos activado");
        showNotification("📱 Modo bajo recursos activado. Imágenes (excepto juegos) y animaciones desactivadas.");
    }

    function randomGame() {
        if (recursos.length === 0) {
            showNotification("❌ No hay juegos disponibles.");
            return;
        }
        const random = recursos[Math.floor(Math.random() * recursos.length)];
        openModal(random);
        showNotification(`🎲 Juego aleatorio: ${random.nombre}`);
    }

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

    // Navegación entre secciones
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.dataset.section;
            
            // Actualizar botones activos
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Mostrar sección correspondiente
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${targetSection}-section`) {
                    section.classList.add('active');
                    
                    // Si es la sección de juegos, cargar juegos si es necesario
                    if (targetSection === 'games' && displayedGames === 0) {
                        // Limpiar galería antes de cargar
                        gallery.innerHTML = '';
                        displayedGames = 0;
                        loadGames();
                    }
                    
                    // Si es la sección de sistemas, cargar los sistemas
                    if (targetSection === 'systems') {
                        cargarSistemas();
                    }
                }
            });
        });
    });
    
    // Cargar sistemas operativos
    function cargarSistemas() {
        const container = document.getElementById('systemsContainer');
        
        // Limpiar contenedor
        container.innerHTML = '';
        
        // Verificar si los sistemas están disponibles
        if (typeof sistemas !== 'undefined' && Array.isArray(sistemas) && sistemas.length > 0) {
            sistemas.forEach(sistema => {
                const card = document.createElement('div');
                card.className = 'system-card';
                
                // Verificar si se usa imagen o ícono
                let iconHTML = '';
                if (sistema.imagen) {
                    iconHTML = `<img src="${sistema.imagen}" alt="${sistema.nombre}" class="system-image" onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\\'fas fa-desktop system-icon-fallback\\'></i>'">`;
                } else {
                    iconHTML = `<i class="${sistema.icono || 'fas fa-desktop'}"></i>`;
                }
                
                card.innerHTML = `
                    <div class="system-icon-container">
                        ${iconHTML}
                    </div>
                    <div class="system-name">${sistema.nombre}</div>
                    <div class="system-details">${sistema.descripcion}</div>
                    <a href="${sistema.enlace}" target="_blank" class="system-link">
                        <i class="fas fa-download"></i> Descargar
                    </a>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="color:#aaa; grid-column: 1 / -1; text-align: center; padding: 20px;">No se encontraron sistemas operativos. Verifica el archivo sistemas.js</p>';
        }
    }

    // Inicializar notificaciones y tema
    initNotifications();
    loadSavedTheme();

    // Exponer funciones globales
    window.randomGame = randomGame;
    window.enableLowResourceMode = enableLowResourceMode;
    window.changeTheme = changeTheme;
    
    // Cargar juegos iniciales si estamos en la sección de juegos
    const gamesSection = document.getElementById('games-section');
    if (gamesSection && gamesSection.classList.contains('active')) {
        loadGames();
    }
});
