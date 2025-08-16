// script.js - Con paginación automática

document.addEventListener('DOMContentLoaded', function () {
    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.querySelector('.contact-section form');
    const gameDetailsOverlay = document.getElementById('gameModal');
    const closeDetailsBtn = document.getElementById('closeDetails');
    const detailsImage = document.getElementById('modalImage');
    const detailsTitle = document.getElementById('modalTitle');
    const detailsRating = document.getElementById('modalRating');
    const detailsDownloads = document.getElementById('modalDownloads');
    const detailsDescription = document.getElementById('modalInfo');
    const detailsRequirements = document.getElementById('modalRequirements');
    const trailerFrame = document.getElementById('trailerFrame');
    const linkGofile = document.getElementById('linkGofile');
    const linkMediafire = document.getElementById('linkMediafire');
    const detailsComments = document.getElementById('commentsContainer');
    const commentInput = document.getElementById('commentInput');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const randomGameBtn = document.getElementById('randomGameBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const backToTopBtn = document.getElementById('backToTop');
    const viewToggleBtn = document.getElementById('viewToggle');
    const themeSelector = document.getElementById('themeSelector');
    
    // Nuevos elementos
    const previewModal = document.getElementById('previewModal');
    const previewImage = document.getElementById('previewImage');
    const previewTitle = document.getElementById('previewTitle');
    const previewRating = document.getElementById('previewRating');
    const previewDownloads = document.getElementById('previewDownloads');
    const previewDescription = document.getElementById('previewDescription');
    const closePreviewBtn = document.querySelector('.preview-modal .close-btn');
    const navButtons = document.querySelectorAll('.nav-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    const aboutSection = document.getElementById('about');
    const faqSection = document.getElementById('faq');
    const privacySection = document.getElementById('privacy');

    // --- VERIFICACIÓN DE DATOS ---
    if (typeof recursos === 'undefined' || !Array.isArray(recursos)) {
        console.error('❌ Error: No se encontraron los datos de juegos (recursos) o no es un array.');
        if (gallery) gallery.innerHTML = '<p style="color:red; text-align:center; grid-column: 1 / -1;">Error crítico: Datos de juegos no disponibles.</p>';
        return;
    }

    // --- VARIABLES DE ESTADO ---
    let displayedGames = 0;
    const gamesPerLoad = 6;
    let currentPage = 1;
    const gamesPerPage = 6;
    let filteredGames = recursos.filter(g => g.tipo === 'juego');
    let currentView = 'grid'; // 'grid' o 'list'
    let currentTheme = 'dark'; // 'dark', 'light', 'neon'
    let previewTimeout;

    // --- FUNCIONES DE UTILIDAD ---
    function formatNumber(num) {
        return num.toLocaleString();
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function getTrailerId(gameName) {
        const trailerMap = {
            "Resident Evil 4": "RgYqQsbKn6w",
            "Dead Island": "qBmHIX5Xrk4",
            "Postal 2": "u8D5rkcX78M",
            "Left 4 Dead 2": "ZR3OX5uJN8",
            "Call of Duty: Black Ops 1": "IRgJgpLwT4w",
            "Red Dead Redemption 1": "EjKiSr6v2R8",
            "Payday 2": "x9dhme",
            "Battlefield 2": "DDlRTY",
            "God of War (2018)": "K0OO5w8Q0MI",
            "God of War: Ragnarök": "2btlPD2N2IU",
            "Peak": "2uRoh0",
            "Sons of the Forest": "c2B4Cd",
            "Deltarune": "dQw4w9WgXcQ",
            "LEGO Marvel Super Heroes": "bzh8jle3p3i7eil",
            "Call of Duty: Black Ops 2": "cwdumqbqjz3j3nb",
            "The Quarry": "bYr0O4",
            "Bendy and the Ink Machine": "avMKZl",
            "Bendy and the Dark Revivalo": "Qax9uu",
            "Call of Juarez: Gunslinger": "DDlRTY",
            "Far Cry 3": "2uRoh0",
            "Call of Duty: Modern Warfare 3": "ioxs8mh1bgafbxl",
            "Lego Batman 2 DC": "n1juuplitqdaj57",
            "Assassins Creed 2 ": "gt7cklm07ifvkfz",
            "Jurassic World Evolution 2": "d8q331qkl5527mn",
            "Far Cry 5": "lg6fpmp3f2uhuho",
            "Fnaf Collection": "sbws8mnvrtkjno0",
            "Resident Evil 7: Biohazard": "uqduzvrhkb01kth"
            // ... añade más mappings según necesites
        };
        return trailerMap[gameName] || "dQw4w9WgXcQ"; // Fallback
    }

    // --- FUNCIONES PARA MOSTRAR DATOS ---
    function displayGames(gamesToShow) {
        if (!gallery) return;

        gallery.innerHTML = '';
        const fragment = document.createDocumentFragment();

        gamesToShow.forEach(game => {
            if (game.tipo === 'juego') {
                const gameCard = document.createElement('div');
                gameCard.className = `game-card ${currentView}`;
                gameCard.dataset.gameId = game.id;
                
                const img = document.createElement('img');
                img.src = game.imagen;
                img.alt = game.nombre;
                img.className = 'game-image';
                img.loading = 'lazy';
                
                // Manejo de error de imagen con event listener (SIN onerror inline)
                img.addEventListener('error', function() {
                    if (this.dataset.errorHandled) return;
                    this.dataset.errorHandled = 'true';
                    
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'game-image image-error';
                    fallbackDiv.innerHTML = `
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:10px; text-align:center;">
                            <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px; color:var(--color-accent-purple);"></i>
                            <span style="font-size:0.8rem;">Imagen no disponible</span>
                            <span style="font-size:0.7rem; margin-top:5px;">${game.nombre}</span>
                        </div>
                    `;
                    this.parentNode.replaceChild(fallbackDiv, this);
                });

                const gameInfo = document.createElement('div');
                gameInfo.className = 'game-info';
                gameInfo.innerHTML = `
                    <h3 class="game-title">${game.nombre}</h3>
                    <p class="game-description">${game.descripcion.substring(0, 100)}...</p>
                    <div class="game-meta">
                        <span class="rating">${game.rating}</span>
                        <span class="downloads">${formatNumber(game.downloads)} descargas</span>
                    </div>
                `;

                gameCard.appendChild(img);
                gameCard.appendChild(gameInfo);
                gameCard.addEventListener('click', () => showGameDetails(game));
                
                // Eventos para vista previa al pasar el cursor
                gameCard.addEventListener('mouseenter', (e) => showGamePreview(e, game));
                gameCard.addEventListener('mouseleave', hideGamePreview);
                
                fragment.appendChild(gameCard);
            }
        });

        gallery.appendChild(fragment);
    }

    function showGameDetails(game) {
        if (!gameDetailsOverlay) return;

        if (detailsImage) detailsImage.src = game.imagen;
        if (detailsImage) detailsImage.alt = game.nombre;
        if (detailsTitle) detailsTitle.textContent = game.nombre;
        if (detailsRating) detailsRating.textContent = game.rating;
        if (detailsDownloads) detailsDownloads.textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;
        if (detailsDescription) detailsDescription.textContent = game.descripcion;

        if (detailsRequirements) {
            detailsRequirements.innerHTML = game.requisitos || 'Información no disponible.';
        }

        if (trailerFrame) {
            const trailerId = getTrailerId(game.nombre);
            trailerFrame.src = `https://www.youtube.com/embed/${trailerId}`;
        }

        if (linkGofile) linkGofile.href = (game.links.direct || "#").trim();
        if (linkMediafire) linkMediafire.href = (game.links.mediafire || "#").trim();

        if (detailsComments) {
            detailsComments.innerHTML = '';
            if (game.comments && game.comments.length > 0) {
                game.comments.forEach(text => {
                    const commentElement = document.createElement('div');
                    commentElement.className = 'comment';
                    commentElement.innerHTML = `
                        <div class="comment-author">Usuario Anónimo</div>
                        <div class="comment-text">${text}</div>
                    `;
                    detailsComments.appendChild(commentElement);
                });
            } else {
                detailsComments.innerHTML = '<p>No hay comentarios aún. ¡Sé el primero en comentar!</p>';
            }
        }

        // Mostrar advertencia si existe
        const advertenciaContainer = document.querySelector('.modal-info .advertencia-container');
        if (advertenciaContainer) advertenciaContainer.remove(); // Eliminar si ya existe

        if (game.advertencia) {
            const advertenciaDiv = document.createElement('div');
            advertenciaDiv.className = 'advertencia-container';
            advertenciaDiv.innerHTML = `
                <div class="advertencia-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>${game.advertencia}</span>
                </div>
            `;
            // Insertar después de la descripción
            if (detailsDescription) {
                detailsDescription.parentNode.insertBefore(advertenciaDiv, detailsDescription.nextSibling);
            }
        }

        gameDetailsOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        scrollToTop();
    }

    function closeGameDetails() {
        if (gameDetailsOverlay) {
            gameDetailsOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (trailerFrame) {
            trailerFrame.src = ''; // Pausa el video
        }
    }
    
    // Funciones para vista previa al pasar el cursor
    function showGamePreview(event, game) {
        clearTimeout(previewTimeout);
        
        const cardRect = event.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        previewTimeout = setTimeout(() => {
            if (previewImage) previewImage.src = game.imagen;
            if (previewTitle) previewTitle.textContent = game.nombre;
            if (previewRating) previewRating.textContent = game.rating;
            if (previewDownloads) previewDownloads.textContent = `${formatNumber(game.downloads)} descargas`;
            if (previewDescription) previewDescription.textContent = game.descripcion.substring(0, 150) + '...';
            
            if (previewModal) {
                previewModal.style.display = 'block';
                previewModal.style.top = `${cardRect.top + scrollTop - 10}px`;
                previewModal.style.left = `${cardRect.right + 15}px`;
            }
        }, 500); // Mostrar después de 500ms
    }
    
    function hideGamePreview() {
        clearTimeout(previewTimeout);
        if (previewModal) previewModal.style.display = 'none';
    }

    // --- FUNCIONES DE FILTRO Y BÚSQUEDA ---
    function applyFiltersAndSearch() {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        filteredGames = recursos.filter(game => {
            if (game.tipo !== 'juego') return false;
            return game.nombre.toLowerCase().includes(term) ||
                   game.descripcion.toLowerCase().includes(term);
        });
        
        currentPage = 1; // Reiniciar a la primera página al filtrar
        updatePagination();
        displayCurrentPage();
    }

    // --- FUNCIONES DE PAGINACIÓN ---
    function updatePagination() {
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        
        if (pageInfo) {
            pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
        }
        
        if (prevPageBtn) {
            prevPageBtn.disabled = currentPage === 1;
        }
        
        if (nextPageBtn) {
            nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
        }
    }

    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const gamesToShow = filteredGames.slice(startIndex, endIndex);
        displayGames(gamesToShow);
        updatePagination();
        scrollToTop();
    }

    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            displayCurrentPage();
        }
    }

    function goToNextPage() {
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCurrentPage();
        }
    }

    // --- FUNCIONES PARA JUEGO ALEATORIO ---
    function randomGame() {
        const juegos = recursos.filter(g => g.tipo === 'juego');
        if (juegos.length === 0) {
            alert("❌ No hay juegos disponibles.");
            return;
        }
        const randomGame = juegos[Math.floor(Math.random() * juegos.length)];
        showGameDetails(randomGame);
        // alert(`🎲 Juego aleatorio: ${randomGame.nombre}`); // Opcional
    }

    // --- FUNCIONES PARA CAMBIO DE VISTA ---
    function toggleView() {
        currentView = currentView === 'grid' ? 'list' : 'grid';
        if (viewToggleBtn) {
            viewToggleBtn.innerHTML = currentView === 'grid' ? 
                '<i class="fas fa-th-large"></i>' : 
                '<i class="fas fa-list"></i>';
        }
        displayGames(filteredGames.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage));
    }

    // --- FUNCIONES PARA CAMBIO DE TEMA ---
    function changeTheme() {
        const theme = themeSelector ? themeSelector.value : 'dark';
        currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('selectedTheme', theme);
        
        // Cambiar ícono del botón de tema
        if (themeSelector) {
            const icon = themeSelector.options[themeSelector.selectedIndex].getAttribute('data-icon');
            if (icon && themeSelector.previousElementSibling) {
                themeSelector.previousElementSibling.innerHTML = icon;
            }
        }
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme !== null && themeSelector) {
            themeSelector.value = savedTheme;
            document.body.setAttribute('data-theme', savedTheme);
            currentTheme = savedTheme;
        }
    }

    // --- FUNCIONES PARA BOTÓN VOLVER ARRIBA ---
    function toggleBackToTopButton() {
        if (!backToTopBtn) return;
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    function scrollToTopSmooth() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // --- FUNCIONES PARA NAVEGACIÓN ENTRE SECCIONES ---
    function navigateToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Ocultar todas las secciones excepto la seleccionada
            document.querySelectorAll('.content-section').forEach(sec => {
                if (sec.id !== sectionId) {
                    sec.classList.remove('active');
                } else {
                    sec.classList.add('active');
                }
            });
        }
    }

    // --- INICIALIZACIÓN DE EVENTOS ---
    if (closeDetailsBtn) {
        closeDetailsBtn.addEventListener('click', closeGameDetails);
    }

    if (gameDetailsOverlay) {
        gameDetailsOverlay.addEventListener('click', function(event) {
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

                if (detailsComments.children.length === 1 &&
                    detailsComments.children[0].tagName === 'P') {
                    detailsComments.innerHTML = '';
                }

                detailsComments.appendChild(div);
                commentInput.value = '';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFiltersAndSearch);
    }

    // --- EVENTOS DE PAGINACIÓN ---
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', goToPrevPage);
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToNextPage);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const nextGames = recursos.slice(displayedGames, displayedGames + gamesPerLoad);
            if (nextGames.length === 0) {
                loadMoreBtn.style.display = 'none';
                return;
            }

            const fragment = document.createDocumentFragment();
            nextGames.forEach(game => {
                if (game.tipo === 'juego') {
                    const gameCard = document.createElement('div');
                    gameCard.className = 'game-card';
                    gameCard.dataset.gameId = game.id;

                    const img = document.createElement('img');
                    img.src = game.imagen;
                    img.alt = game.nombre;
                    img.className = 'game-image';
                    img.loading = 'lazy';

                    // Manejo de error de imagen con event listener
                    img.addEventListener('error', function() {
                        if (this.dataset.errorHandled) return;
                        this.dataset.errorHandled = 'true';
                        
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'game-image image-error';
                        fallbackDiv.innerHTML = `
                            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:10px; text-align:center;">
                                <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px; color:var(--color-accent-purple);"></i>
                                <span style="font-size:0.8rem;">Imagen no disponible</span>
                                <span style="font-size:0.7rem; margin-top:5px;">${game.nombre}</span>
                            </div>
                        `;
                        this.parentNode.replaceChild(fallbackDiv, this);
                    });

                    const gameInfo = document.createElement('div');
                    gameInfo.className = 'game-info';
                    gameInfo.innerHTML = `
                        <h3 class="game-title">${game.nombre}</h3>
                        <p class="game-description">${game.descripcion.substring(0, 100)}...</p>
                        <div class="game-meta">
                            <span class="rating">${game.rating}</span>
                            <span class="downloads">${formatNumber(game.downloads)} descargas</span>
                        </div>
                    `;

                    gameCard.appendChild(img);
                    gameCard.appendChild(gameInfo);
                    gameCard.addEventListener('click', () => showGameDetails(game));
                    
                    // Eventos para vista previa al pasar el cursor
                    gameCard.addEventListener('mouseenter', (e) => showGamePreview(e, game));
                    gameCard.addEventListener('mouseleave', hideGamePreview);
                    
                    fragment.appendChild(gameCard);
                }
            });

            if (gallery) gallery.appendChild(fragment);
            displayedGames += nextGames.length;

            if (displayedGames >= recursos.filter(g => g.tipo === 'juego').length) {
                if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            }
        });
    }

    if (randomGameBtn) {
        randomGameBtn.addEventListener('click', randomGame);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // --- NUEVOS EVENTOS ---
    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', toggleView);
    }

    if (themeSelector) {
        themeSelector.addEventListener('change', changeTheme);
    }

    if (backToTopBtn) {
        window.addEventListener('scroll', toggleBackToTopButton);
        backToTopBtn.addEventListener('click', scrollToTopSmooth);
    }
    
    // Eventos para vista previa
    if (previewModal) {
        previewModal.addEventListener('click', function(event) {
            if (event.target === previewModal) {
                hideGamePreview();
            }
        });
    }
    
    // Eventos para navegación entre secciones
    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            navigateToSection(targetId);
        });
    });
    
    // Eventos para FAQ
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // Evento para cerrar vista previa con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeGameDetails();
            hideGamePreview();
        }
    });

    // --- INICIALIZACIÓN FINAL ---
    loadSavedTheme();
    
    // Mostrar primeros juegos al cargar
    displayGames(recursos.filter(g => g.tipo === 'juego').slice(0, gamesPerLoad));
    displayedGames = gamesPerLoad;

    if (displayedGames >= recursos.filter(g => g.tipo === 'juego').length) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    }
    
    // Simular carga de fondo animado (en una implementación real, esto sería más complejo)
    console.log("Fondo animado cargado");
});
