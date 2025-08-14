// script.js - Corregido y simplificado

document.addEventListener('DOMContentLoaded', function () {
    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.querySelector('.contact-section form');
    const gameDetailsOverlay = document.getElementById('gameModal');
    const closeDetailsBtn = document.querySelector('#gameModal .close-btn');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
    const modalDownloads = document.getElementById('modalDownloads');
    const modalInfo = document.getElementById('modalInfo');
    const modalRequirements = document.getElementById('modalRequirements');
    const linkGofile = document.getElementById('linkGofile');
    const linkMediafire = document.getElementById('linkMediafire');
    const commentsContainer = document.getElementById('commentsContainer');
    const commentInput = document.getElementById('commentInput');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const backToTopBtn = document.getElementById('backToTop');
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

    // --- FUNCIONES DE UTILIDAD ---
    function formatNumber(num) {
        return num.toLocaleString();
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- FUNCIONES PARA MOSTRAR DATOS ---
    function displayGames(gamesToShow) {
        if (!gallery) return;

        gallery.innerHTML = '';
        const fragment = document.createDocumentFragment();

        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const paginatedGames = gamesToShow.slice(startIndex, endIndex);

        paginatedGames.forEach(game => {
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
                fragment.appendChild(gameCard);
            }
        });

        gallery.appendChild(fragment);
        updatePagination(gamesToShow.length);
    }

    function showGameDetails(game) {
        if (!gameDetailsOverlay) return;

        if (modalImage) modalImage.src = game.imagen;
        if (modalImage) modalImage.alt = game.nombre;
        if (modalTitle) modalTitle.textContent = game.nombre;
        if (modalRating) modalRating.textContent = game.rating;
        if (modalDownloads) modalDownloads.textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;
        if (modalInfo) modalInfo.textContent = game.descripcion;

        if (modalRequirements) {
            modalRequirements.innerHTML = game.requisitos || 'Información no disponible.';
        }

        if (linkGofile) linkGofile.href = (game.links.direct || "#").trim();
        if (linkMediafire) linkMediafire.href = (game.links.mediafire || "#").trim();

        if (commentsContainer) {
            commentsContainer.innerHTML = '';
            if (game.comments && game.comments.length > 0) {
                game.comments.forEach(text => {
                    const commentElement = document.createElement('div');
                    commentElement.className = 'comment';
                    commentElement.innerHTML = `
                        <div class="comment-author">Usuario Anónimo</div>
                        <div class="comment-text">${text}</div>
                    `;
                    commentsContainer.appendChild(commentElement);
                });
            } else {
                commentsContainer.innerHTML = '<p>No hay comentarios aún. ¡Sé el primero en comentar!</p>';
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
    }

    function updatePagination(totalGames) {
        const totalPages = Math.ceil(totalGames / gamesPerPage);
        if (pageInfo) pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
        
        if (prevPageBtn) prevPageBtn.disabled = currentPage === 1;
        if (nextPageBtn) nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            applyFiltersAndSearch();
            scrollToTop();
        }
    }

    function goToNextPage() {
        const totalGames = recursos.filter(g => g.tipo === 'juego').length;
        const totalPages = Math.ceil(totalGames / gamesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            applyFiltersAndSearch();
            scrollToTop();
        }
    }

    // --- FUNCIONES DE FILTRO Y BÚSQUEDA ---
    function applyFiltersAndSearch() {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        const filteredGames = recursos.filter(game => {
            if (game.tipo !== 'juego') return false;
            return game.nombre.toLowerCase().includes(term) ||
                   game.descripcion.toLowerCase().includes(term);
        });
        displayGames(filteredGames);
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
            if (commentInput && commentInput.value.trim() && commentsContainer) {
                const commentText = commentInput.value.trim();

                const div = document.createElement('div');
                div.className = 'comment';
                div.innerHTML = `
                    <div class="comment-author">Tú</div>
                    <div class="comment-text">${commentText}</div>
                `;

                if (commentsContainer.children.length === 1 &&
                    commentsContainer.children[0].tagName === 'P') {
                    commentsContainer.innerHTML = '';
                }

                commentsContainer.appendChild(div);
                commentInput.value = '';
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFiltersAndSearch);
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', goToPrevPage);
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', goToNextPage);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // Botón volver arriba
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- INICIALIZACIÓN FINAL ---
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme !== null) {
            document.getElementById("theme-selector").value = savedTheme;
            document.body.setAttribute("data-theme", savedTheme);
        }
    }

    window.changeTheme = function() {
        const themeSelector = document.getElementById("theme-selector");
        if (themeSelector) {
            const theme = themeSelector.value;
            document.body.setAttribute("data-theme", theme);
            localStorage.setItem("selectedTheme", theme);
        }
    };

    loadSavedTheme();
    applyFiltersAndSearch(); // Cargar todos los juegos al inicio
});
