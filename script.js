// script.js - Mejorado y completo

document.addEventListener('DOMContentLoaded', function () {
    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const welcomeScreen = document.getElementById('welcomeScreen');
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.querySelector('.contact-section form');
    const gameDetailsOverlay = document.getElementById('gameModal');
    const closeDetailsBtn = document.querySelector('#gameModal .close-btn');
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
    const viewToggleBtn = document.getElementById('viewToggle');
    const themeToggleBtn = document.getElementById('themeToggle');
    const backToTopBtn = document.getElementById('backToTop');
    const mainHeader = document.getElementById('mainHeader');
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');

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
    let currentView = 'grid'; // 'grid' o 'list'
    let currentTheme = 'dark'; // 'dark', 'light', 'neon'
    let lastScrollTop = 0;

    // --- FUNCIONES DE UTILIDAD ---
    function formatNumber(num) {
        return num.toLocaleString();
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function getTrailerId(gameName) {
        // Mapa de nombres de juegos a IDs de YouTube
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

    // --- FUNCIONES DE FILTRO Y BÚSQUEDA ---
    function applyFiltersAndSearch() {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value.toLowerCase() : '';
        const sort = sortBy ? sortBy.value : 'nombre';

        let filteredGames = recursos.filter(game => {
            if (game.tipo !== 'juego') return false;

            const matchesSearch = game.nombre.toLowerCase().includes(term) ||
                                  game.descripcion.toLowerCase().includes(term);

            let matchesCategory = true;
            if (category) {
                const lowerName = game.nombre.toLowerCase();
                const lowerDesc = game.descripcion.toLowerCase();
                if (category === 'accion') {
                    matchesCategory = lowerName.includes('cod') || lowerName.includes('call of duty') || lowerName.includes('battlefield') || lowerDesc.includes('acción') || lowerDesc.includes('action');
                } else if (category === 'aventura') {
                    matchesCategory = lowerName.includes('assassins') || lowerName.includes('ac') || lowerName.includes('god of war') || lowerDesc.includes('aventura') || lowerDesc.includes('adventure');
                } else if (category === 'terror') {
                    matchesCategory = lowerName.includes('resident evil') || lowerName.includes('dead island') || lowerName.includes('bendy') || lowerDesc.includes('terror') || lowerDesc.includes('horror');
                }
            }

            return matchesSearch && matchesCategory;
        });

        // Ordenar juegos
        filteredGames.sort((a, b) => {
            if (sort === 'downloads') return b.downloads - a.downloads;
            if (sort === 'rating') {
                const ratingA = (a.rating.match(/⭐/g) || []).length;
                const ratingB = (b.rating.match(/⭐/g) || []).length;
                return ratingB - ratingA;
            }
            return a.nombre.localeCompare(b.nombre);
        });

        // Paginación
        const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const paginatedGames = filteredGames.slice(startIndex, endIndex);

        displayGames(paginatedGames);

        // Actualizar información de paginación
        if (pageInfo) pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;

        // Actualizar botones de paginación
        if (prevPageBtn) prevPageBtn.disabled = currentPage === 1;
        if (nextPageBtn) nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    // --- FUNCIONES PARA PAGINACIÓN ---
    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            applyFiltersAndSearch();
            scrollToTop();
        }
    }

    function goToNextPage() {
        const totalPages = Math.ceil(recursos.filter(g => g.tipo === 'juego').length / gamesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            applyFiltersAndSearch();
            scrollToTop();
        }
    }

    // --- FUNCIONES PARA VISTA ---
    function toggleView() {
        currentView = currentView === 'grid' ? 'list' : 'grid';
        if (viewToggleBtn) {
            viewToggleBtn.innerHTML = currentView === 'grid' ? 
                '<i class="fas fa-th-large"></i>' : 
                '<i class="fas fa-list"></i>';
        }
        applyFiltersAndSearch();
    }

    // --- FUNCIONES PARA TEMA ---
    function toggleTheme() {
        const themes = ['dark', 'light', 'neon'];
        const currentIndex = themes.indexOf(currentTheme);
        currentTheme = themes[(currentIndex + 1) % themes.length];
        
        if (themeToggleBtn) {
            const icons = {
                'dark': '<i class="fas fa-moon"></i>',
                'light': '<i class="fas fa-sun"></i>',
                'neon': '<i class="fas fa-lightbulb"></i>'
            };
            themeToggleBtn.innerHTML = icons[currentTheme];
        }
        
        document.body.setAttribute('data-theme', currentTheme);
        localStorage.setItem('selectedTheme', currentTheme);
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme && ['dark', 'light', 'neon'].includes(savedTheme)) {
            currentTheme = savedTheme;
            document.body.setAttribute('data-theme', savedTheme);
            if (themeToggleBtn) {
                const icons = {
                    'dark': '<i class="fas fa-moon"></i>',
                    'light': '<i class="fas fa-sun"></i>',
                    'neon': '<i class="fas fa-lightbulb"></i>'
                };
                themeToggleBtn.innerHTML = icons[savedTheme];
            }
        }
    }

    // --- FUNCIONES PARA SCROLL ---
    function handleScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            // downscroll code
            if (mainHeader) mainHeader.classList.add('hidden');
        } else {
           // upscroll code
           if (mainHeader) mainHeader.classList.remove('hidden');
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

        // Mostrar/ocultar botón "Volver arriba"
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }

    // --- FUNCIONES PARA NAVEGACIÓN ---
    function switchSection(targetSectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(`${targetSectionId}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        scrollToTop();
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
        searchInput.addEventListener('input', () => {
            currentPage = 1;
            applyFiltersAndSearch();
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            currentPage = 1;
            applyFiltersAndSearch();
        });
    }

    if (sortBy) {
        sortBy.addEventListener('change', () => {
            currentPage = 1;
            applyFiltersAndSearch();
        });
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', goToPrevPage);
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToNextPage);
    }

    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', toggleView);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    window.addEventListener('scroll', handleScroll);

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            switchSection(targetSection);
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // --- INICIALIZACIÓN FINAL ---
    loadSavedTheme();
    currentPage = 1;
    applyFiltersAndSearch();

    // Ocultar pantalla de bienvenida después de 3 segundos
    if (welcomeScreen) {
        setTimeout(() => {
            welcomeScreen.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
            }, 500);
        }, 3000);
    }
});

// --- ANIMACIONES CSS (Añadidas dinámicamente) ---
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; visibility: visible; }
        to { opacity: 0; visibility: hidden; }
    }
`;
document.head.appendChild(style);
