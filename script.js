document.addEventListener('DOMContentLoaded', function () {
    // --- CORREGIR REFERENCIAS A ELEMENTOS ---
    // Usar el ID correcto del contenedor de la galería
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const contactForm = document.querySelector('form');
    // Referencias al overlay de detalles
    const gameDetailsOverlay = document.getElementById('gameDetailsOverlay');
    const closeDetailsBtn = document.getElementById('closeDetails');
    const detailsImage = document.getElementById('detailsImage');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsRating = document.getElementById('detailsRating');
    const detailsDownloads = document.getElementById('detailsDownloads');
    const detailsDescription = document.getElementById('detailsDescription');
    const detailsRequirements = document.getElementById('detailsRequirements');
    const trailerFrame = document.getElementById('trailerFrame');
    const linkGofile = document.getElementById('linkGofile');
    const linkMediafire = document.getElementById('linkMediafire');
    const detailsComments = document.getElementById('detailsComments');
    const commentInput = document.getElementById('commentInput');
    const addCommentBtn = document.getElementById('addCommentBtn');

    let displayedGames = 12; // Iniciar con 12 juegos mostrados
    const gamesPerLoad = 12;

    // Verificar que los datos estén disponibles
    if (typeof recursos === 'undefined') {
        console.error('No se encontraron los datos de juegos. Asegúrate de incluir data.js');
        return;
    }

    // --- FUNCIONES DE UTILIDAD ---

    // Formatear números
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Función para generar un slug URL-friendly (por si acaso se usan en el futuro)
    function generateSlug(text) {
        return text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    }

    // Función para obtener el slug correcto del juego (por si acaso)
    function getGameSlug(game) {
        if (game.nombre === "Resident Evil 7: Biohazard" ||
            game.nombre === "Resident Evil 7") {
            return "resident-evil-7-biohazard";
        }
        return generateSlug(game.nombre);
    }

    // Función para obtener un ID de YouTube plausible para el trailer
    function getTrailerId(gameName) {
        // Mapa básico de nombres de juegos a IDs de YouTube.
        const trailerMap = {
            "Resident Evil 7: Biohazard": "Nwl3RkEHK4c",
            "Dead Island": "qBmHIX5Xrk4",
            "Postal 2": "u8D5rkcX78M",
            "Left 4 Dead 2": "ZR3OX5uJN8",
            "Call of Duty: Black Ops 1": "IRgJgpLwT4w",
            "Assassins Creed 2": "XQxXyq56m9Y",
            "Payday 2": "x9dhme", // Ejemplo, reemplaza con ID real si tienes uno mejor
            "Red Dead Redemption 1": "EjKiSr6v2R8",
            "God of War (2018)": "K0OO5w8Q0MI", // Ejemplo real
            "God of War: Ragnarök": "2btlPD2N2IU", // Ejemplo real
            "Deltarune": "dQw4w9WgXcQ", // Rickroll como fallback, reemplaza si tienes uno mejor
            "Sons of the Forest": "c2B4Cd", // Ejemplo
            "The Quarry": "bYr0O4", // Ejemplo
            "Bendy and the Ink Machine": "avMKZl", // Ejemplo
            "Bendy and the Dark Revivalo": "Qax9uu", // Ejemplo
            "Call of Juarez: Gunslinger": "DDlRTY", // Ejemplo
            "Far Cry 3": "2uRoh0", // Ejemplo
            "Call of Duty: Modern Warfare 3": "ioxs8mh1bgafbxl", // Ejemplo
            "Lego Batman 2 DC": "n1juuplitqdaj57", // Ejemplo
            "Jurassic World Evolution 2": "d8q331qkl5527mn", // Ejemplo
            "Far Cry 5": "lg6fpmp3f2uhuho", // Ejemplo
            "Fnaf Collection": "sbws8mnvrtkjno0", // Ejemplo
            "Peak": "2uRoh0", // Ejemplo
            "LEGO Marvel Super Heroes": "bzh8jle3p3i7eil", // Ejemplo
            "Call of Duty: Black Ops 2": "cwdumqbqjz3j3nb", // Ejemplo

            // Puedes añadir más mappings aquí
        };
        // Devuelve el ID específico o un ID de fallback (puedes usar un ID de "coming soon" o similar)
        return trailerMap[gameName] || "dQw4w9WgXcQ"; // Rickroll como último recurso
    }


    // --- FUNCIONES PARA MOSTRAR DATOS ---

    // Mostrar juegos iniciales
    function loadInitialGames() {
        const gamesSection = document.getElementById('games-section');
        if (!gamesSection || !gamesSection.classList.contains('active')) {
            return;
        }

        if (gallery) {
            gallery.innerHTML = '';
        }

        const fragment = document.createDocumentFragment();
        // Cargar todos los juegos desde el principio
        const initialGames = recursos.filter(g => g.tipo === 'juego');

        initialGames.forEach(game => {
            createGameCard(game, fragment);
        });

        if (gallery) {
            gallery.appendChild(fragment);
        }
        displayedGames = initialGames.length;

        // Ocultar botón "Ver más" porque se cargan todos
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Crear tarjeta de juego
    function createGameCard(game, container = null) {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        // Corrección: Simplificamos el onerror para solo añadir una clase
gameCard.innerHTML = `
    <img src="${game.imagen}" alt="${game.nombre}" class="game-image" onerror="this.classList.add('image-error');">
    <div class="game-info">
        <h3 class="game-title">${game.nombre}</h3>
        <p class="game-description">${game.descripcion.substring(0, 100)}...</p>
        <div class="game-meta">
            <span class="rating">${game.rating}</span>
            <span class="downloads">${game.downloads} descargas</span>
        </div>
    </div>
`;
        // Añadir evento de clic para mostrar detalles en el overlay
        gameCard.addEventListener('click', () => showGameDetails(game));

        if (container) {
            container.appendChild(gameCard);
        } else if (gallery) {
            gallery.appendChild(gameCard);
        }
    }

    // Mostrar detalles del juego en el overlay
    function showGameDetails(game) {
        if (!gameDetailsOverlay) return; // Seguridad

        // Llenar datos del juego
        if (detailsImage) detailsImage.src = game.imagen;
        if (detailsImage) detailsImage.alt = game.nombre;
        if (detailsTitle) detailsTitle.textContent = game.nombre;
        if (detailsRating) detailsRating.textContent = game.rating;
        if (detailsDownloads) detailsDownloads.textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;
        if (detailsDescription) detailsDescription.textContent = game.descripcion;

        // Formatear y mostrar requisitos
        if (detailsRequirements) {
            // Si `game.requisitos` es un string HTML, usar innerHTML. Si es texto plano, usar textContent.
            // Asumiremos que viene formateado como string HTML desde data.js
            detailsRequirements.innerHTML = game.requisitos || 'Información no disponible.';
        }

        // Configurar trailer
        if (trailerFrame) {
            const trailerId = getTrailerId(game.nombre);
            // Corrección: Eliminamos el espacio extra en la URL
            trailerFrame.src = `https://www.youtube.com/embed/${trailerId}`;
        }

        // Configurar enlaces de descarga
        if (linkGofile) linkGofile.href = game.links.direct.trim();
        if (linkMediafire) linkMediafire.href = game.links.mediafire.trim();

        // Mostrar comentarios
        if (detailsComments) {
            detailsComments.innerHTML = '';
            if (game.comments && game.comments.length > 0) {
                game.comments.forEach(comment => {
                    const commentElement = document.createElement('div');
                    commentElement.className = 'comment';
                    commentElement.innerHTML = `
                        <div class="comment-author">Usuario Anónimo</div>
                        <div class="comment-text">${comment}</div>
                    `;
                    detailsComments.appendChild(commentElement);
                });
            } else {
                detailsComments.innerHTML = '<p>No hay comentarios aún. ¡Sé el primero en comentar!</p>';
            }
        }

        // Mostrar overlay
        gameDetailsOverlay.style.display = 'block';

        // Scroll suave hacia arriba para ver el overlay
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Cerrar detalles del juego
    function closeGameDetails() {
        if (gameDetailsOverlay) {
            gameDetailsOverlay.style.display = 'none';
        }
        // Pausar el vídeo del trailer al cerrar
        if (trailerFrame) {
            trailerFrame.src = '';
        }
    }

    // --- EVENT LISTENERS PARA EL OVERLAY ---
    if (closeDetailsBtn) {
        closeDetailsBtn.addEventListener('click', closeGameDetails);
    }

    if (gameDetailsOverlay) {
        gameDetailsOverlay.addEventListener('click', function(event) {
            // Si se hace clic directamente en el fondo oscuro (no en el contenido)
            if (event.target === gameDetailsOverlay) {
                closeGameDetails();
            }
        });
    }

    if (addCommentBtn) {
        addCommentBtn.addEventListener('click', function () {
            if (commentInput && commentInput.value.trim() && detailsComments) {
                const commentText = commentInput.value.trim();

                const div = document.createElement('div');
                div.className = 'comment';
                div.innerHTML = `
                    <div class="comment-author">Tú</div>
                    <div class="comment-text">${commentText}</div>
                `;

                // Si solo hay el mensaje de "no hay comentarios", reemplazarlo
                if (detailsComments.children.length === 1 &&
                    detailsComments.children[0].tagName === 'P') {
                    detailsComments.innerHTML = '';
                }

                detailsComments.appendChild(div);
                commentInput.value = '';
            }
        });
    }


    // --- FUNCIONES DE BÚSQUEDA Y FILTRO (Simplificadas) ---

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.toLowerCase();
            // Filtrar juegos
            const filteredGames = recursos.filter(game =>
                game.tipo === 'juego' &&
                (game.nombre.toLowerCase().includes(term) ||
                game.descripcion.toLowerCase().includes(term))
            );

            // Limpiar y mostrar resultados
            if (gallery) {
                gallery.innerHTML = '';
                const fragment = document.createDocumentFragment();
                filteredGames.forEach(game => {
                    createGameCard(game, fragment);
                });
                gallery.appendChild(fragment);
            }

            // Ocultar botón "Ver más" al filtrar
            if (loadMoreBtn) {
                loadMoreBtn.style.display = filteredGames.length > 0 ? 'none' : 'block';
            }
        });
    }


    // --- FUNCIONES PARA SISTEMAS (si se usa) ---
    function cargarSistemas() {
        const container = document.getElementById('systemsContainer');
        if (!container) return;

        container.innerHTML = '';
        if (typeof sistemas !== 'undefined' && Array.isArray(sistemas) && sistemas.length > 0) {
            sistemas.forEach(sistema => {
                const card = document.createElement('div');
                card.className = 'system-card';

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
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p style="color:#aaa; grid-column: 1 / -1; text-align: center; padding: 20px;">No se encontraron sistemas operativos.</p>';
        }
    }


    // --- FUNCIONES GLOBALES EXPUESTAS ---

    window.randomGame = function() {
        const juegos = recursos.filter(g => g.tipo === 'juego');
        if (juegos.length === 0) {
            alert("❌ No hay juegos disponibles.");
            return;
        }
        const random = juegos[Math.floor(Math.random() * juegos.length)];
        // Mostrar detalles en el overlay en lugar de abrir una nueva página
        showGameDetails(random);
        alert(`🎲 Juego aleatorio: ${random.nombre}`);
    };

    window.changeTheme = function() {
        const theme = document.getElementById("theme-selector").value;
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("selectedTheme", theme);
    };

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme !== null) {
            document.getElementById("theme-selector").value = savedTheme;
            document.body.setAttribute("data-theme", savedTheme);
        }
    }

    // --- NAVEGACIÓN ENTRE SECCIONES ---
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.dataset.section;

            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            const sectionToShow = document.getElementById(`${targetSection}-section`);
            if (sectionToShow) {
                sectionToShow.classList.add('active');
            }

            // Cargar juegos si es la sección de juegos
            if (targetSection === 'games' && gallery && gallery.children.length === 0) {
                loadInitialGames();
            }

            // Cargar sistemas si es la sección de sistemas
            if (targetSection === 'systems') {
                cargarSistemas();
            }
        });
    });


    // --- INICIALIZACIÓN FINAL ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    loadSavedTheme();
    loadInitialGames(); // Cargar todos los juegos al inicio

});

