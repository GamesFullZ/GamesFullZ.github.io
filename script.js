document.addEventListener('DOMContentLoaded', function () {
    // Corregir referencias a elementos
    const gallery = document.querySelector('.gallery__container'); // Usar querySelector para clase
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn'); // Este ID es correcto
    const contactForm = document.querySelector('form');

    let displayedGames = 12; // Iniciar con 12 juegos mostrados
    const gamesPerLoad = 12;

    // Formatear números
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Función para generar un slug URL-friendly
    function generateSlug(text) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')           // Reemplazar espacios con -
            .replace(/[^\w\-]+/g, '')       // Eliminar caracteres no válidos
            .replace(/\-\-+/g, '-')         // Reemplazar múltiples - con uno solo
            .replace(/^-+/, '')             // Eliminar - del inicio
            .replace(/-+$/, '');            // Eliminar - del final
    }

    // Función para obtener el slug correcto del juego
    function getGameSlug(game) {
        // Para Resident Evil 7 específicamente
        if (game.nombre === "Resident Evil 7: Biohazard" || 
            game.nombre === "Resident Evil 7") {
            return "resident-evil-7-biohazard";
        }
        
        // Para otros juegos, usar la función normal
        return generateSlug(game.nombre);
    }

    // Cargar juegos iniciales
    function loadInitialGames() {
        // Solo cargar juegos si estamos en la sección de juegos
        const gamesSection = document.getElementById('games-section');
        if (!gamesSection || !gamesSection.classList.contains('active')) {
            return;
        }
        
        // Limpiar galería
        if (gallery) {
            gallery.innerHTML = '';
        }
        
        const fragment = document.createDocumentFragment();
        const toLoad = recursos.slice(0, 12); // Siempre cargar los primeros 12

        toLoad.forEach(game => {
            if (game.tipo === 'juego') {
                createGameCard(game, fragment);
            }
        });

        if (gallery) {
            gallery.appendChild(fragment);
        }
        displayedGames = 12; // Resetear contador a 12

        // Mostrar botón "Ver más" si hay más juegos
        if (loadMoreBtn) {
            if (recursos.filter(g => g.tipo === 'juego').length > 12) {
                loadMoreBtn.style.display = 'block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Crear tarjeta de juego (función optimizada)
    function createGameCard(game, container = null) {
        // Obtener el slug correcto
        const gameSlug = getGameSlug(game);
        
        // Crear un enlace que abre en nueva pestaña
        const gameLink = document.createElement('a');
        gameLink.href = `Juegos/${gameSlug}.html`;
        gameLink.target = '_blank';
        gameLink.className = 'game-link'; // Clase CSS definida en style.css
        
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.imagen}" alt="${game.nombre}" class="game-image">
            <div class="game-info">
                <h3 class="game-title">${game.nombre}</h3>
                <p class="game-description">${game.descripcion.substring(0, 100)}...</p>
                <div class="game-meta">
                    <span class="rating">${game.rating}</span>
                    <span class="downloads">${game.downloads} descargas</span>
                </div>
            </div>
        `;
        
        gameLink.appendChild(gameCard);
        
        if (container) {
            container.appendChild(gameLink);
        } else if (gallery) {
            gallery.appendChild(gameLink);
        }
    }

    // Cargar más juegos (corregido)
    function loadMoreGames() {
        const fragment = document.createDocumentFragment();
        const toLoad = recursos.slice(displayedGames, displayedGames + gamesPerLoad);

        toLoad.forEach(game => {
            if (game.tipo === 'juego') {
                createGameCard(game, fragment);
            }
        });

        if (gallery) {
            gallery.appendChild(fragment);
        }
        displayedGames += toLoad.length;

        // Ocultar botón si no hay más juegos
        if (loadMoreBtn) {
            if (displayedGames >= recursos.filter(g => g.tipo === 'juego').length) {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Buscador
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.toLowerCase();
            const filteredGames = recursos.filter(game => 
                game.tipo === 'juego' && 
                game.nombre.toLowerCase().includes(term)
            );
            
            // Limpiar galería
            if (gallery) {
                gallery.innerHTML = '';
            }
            
            // Mostrar juegos filtrados
            const fragment = document.createDocumentFragment();
            filteredGames.forEach(game => {
                createGameCard(game, fragment);
            });
            
            if (gallery) {
                gallery.appendChild(fragment);
            }
            
            // Ocultar botón "Ver más" si hay resultados filtrados
            if (loadMoreBtn) {
                loadMoreBtn.style.display = filteredGames.length > 0 ? 'none' : 'block';
            }
        });
    }

    // Botón "Ver más"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreGames);
    }

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
        const juegos = recursos.filter(g => g.tipo === 'juego');
        if (juegos.length === 0) {
            showNotification("❌ No hay juegos disponibles.");
            return;
        }
        const random = juegos[Math.floor(Math.random() * juegos.length)];
        const gameSlug = getGameSlug(random);
        // En lugar de abrir modal, abrir en nueva pestaña
        window.open(`Juegos/${gameSlug}.html`, '_blank');
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
                    if (targetSection === 'games') {
                        // Solo cargar si la galería está vacía
                        if (gallery && gallery.children.length === 0) {
                            loadInitialGames();
                        }
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
        if (container) {
            container.innerHTML = '';
        }
        
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
                    iconHTML = `<i class="${sistema.icono || 'fas fa-desktop'} system-icon"></i>`;
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
                if (container) {
                    container.appendChild(card);
                }
            });
        } else if (container) {
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
        loadInitialGames();
    }
});
