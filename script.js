/**
 * ██████╗ ███████╗███████╗██████╗  ██████╗ ███████╗
 * ██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝ ██╔════╝
 * ██████╔╝█████╗  █████╗  ██████╔╝██║  ███╗███████╗
 * ██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗██║   ██║╚════██║
 * ██║  ██║███████╗███████╗██████╔╝╚██████╔╝███████║
 * ╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚══════╝
 * ─────────────────────────────────────────────────
 * GamesFullZ v2.0 - Script Interactivo
 * ─────────────────────────────────────────────────
 */

document.addEventListener('DOMContentLoaded', function () {

    // === Referencias a elementos del DOM ===
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const heroSearch = document.getElementById('heroSearch');
    const resultsCount = document.getElementById('resultsCount');
    const contactForm = document.querySelector('.contact-section form');
    const gameModal = document.getElementById('gameModal');
    const closeDetailsBtn = document.getElementById('closeDetails');
    const detailsImage = document.getElementById('modalImage');
    const detailsTitle = document.getElementById('modalTitle');
    const detailsRating = document.getElementById('modalRating');
    const detailsDownloads = document.getElementById('modalDownloads');
    const detailsDescription = document.getElementById('modalInfo');
    const detailsRequirements = document.getElementById('modalRequirements');
    const trailerFrame = document.getElementById('trailerFrame'); // Asegúrate de tener este iframe en el modal
    const linkGofile = document.getElementById('linkGofile');
    const linkMediafire = document.getElementById('linkMediafire');
    const extraDownloadsContainer = document.getElementById('extraDownloads');
    const gameNoteContainer = document.getElementById('gameNote');
    const gameNoteText = gameNoteContainer ? gameNoteContainer.querySelector('.note-text') : null;
    const detailsComments = document.getElementById('commentsContainer');
    const commentInput = document.getElementById('commentInput');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const pageNumbersContainer = document.getElementById('pageNumbersContainer');
    const backToTopBtn = document.getElementById('backToTop');
    const themeToggleBtn = document.getElementById('themeToggle');
    const menuToggleBtn = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const previewModal = document.getElementById('previewModal');
    const previewImage = document.getElementById('previewImage');
    const previewTitle = document.getElementById('previewTitle');
    const previewRating = document.getElementById('previewRating');
    const previewDownloads = document.getElementById('previewDownloads');
    const previewDescription = document.getElementById('previewDescription');
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselDots = document.getElementById('carouselDots');
    const carouselBtnPrev = document.querySelector('.carousel-btn.prev');
    const carouselBtnNext = document.querySelector('.carousel-btn.next');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const filtersForm = document.querySelector('.filters-form');
    const yearRange = document.getElementById('yearRange');
    const yearValue = document.getElementById('yearValue');
    const categoryCards = document.querySelectorAll('.category-card');
    const toastContainer = document.getElementById('toastContainer');

    // === Variables de estado ===
    let juegos = [];
    let juegosFiltrados = [];
    let juegosDestacados = [];
    let currentPage = 1;
    const gamesPerPage = 12;
    let currentSlide = 0;
    let previewTimeout;
    const skeletonCount = 12; // Número de skeleton loaders a mostrar

    // === Inicialización ===
    function init() {
        if (typeof recursos === 'undefined' || !Array.isArray(recursos)) {
            console.error('❌ Error: No se encontraron los datos de juegos (recursos) o no es un array.');
            showNotification('Error crítico: Datos de juegos no disponibles.', 'error');
            return;
        }
        juegos = recursos.filter(j => j.tipo === 'juego');
        juegosDestacados = juegos.slice(0, 5); // Tomar los primeros 5 como destacados
        juegosFiltrados = [...juegos];
        setupEventListeners();
        loadSavedTheme();
        displayFeaturedGames();
        displayCurrentPage();
        hideWelcomeScreen();
    }

    // === Funciones de utilidad ===
    function formatNumber(num) {
        return num.toLocaleString();
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showNotification(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // === Interacción con datos y filtros ===
    function applyFilters() {
        const searchTerm = (searchInput.value + ' ' + (heroSearch ? heroSearch.value : '')).toLowerCase().trim();
        const selectedCategories = Array.from(document.querySelectorAll('input[name="genre"]:checked')).map(cb => cb.value);
        const sizeFilter = document.querySelector('input[name="size"]:checked');
        const minYear = yearRange.min;
        const maxYear = yearRange.value;

        juegosFiltrados = juegos.filter(juego => {
            const matchesSearch = !searchTerm || juego.nombre.toLowerCase().includes(searchTerm) || juego.descripcion.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(juego.categoria); // Asume que tienes un campo 'categoria' en data.js
            const matchesSize = !sizeFilter || (sizeFilter.value === 'small' && juego.tamano < 5) ||
                                (sizeFilter.value === 'medium' && juego.tamano >= 5 && juego.tamano <= 20) ||
                                (sizeFilter.value === 'large' && juego.tamano > 20); // Asume que tienes un campo 'tamano' en GB
            const matchesYear = juego.anio >= minYear && juego.anio <= maxYear; // Asume que tienes un campo 'anio' en data.js

            return matchesSearch && matchesCategory && matchesSize && matchesYear;
        });

        currentPage = 1;
        updateResultsCount();
        displayCurrentPage();
    }

    function clearFilters() {
        filtersForm.reset();
        yearValue.textContent = yearRange.value;
        searchInput.value = '';
        if (heroSearch) heroSearch.value = '';
        applyFilters();
    }

    function updateResultsCount() {
        if (resultsCount) {
            resultsCount.innerHTML = `Mostrando <strong>${juegosFiltrados.length}</strong> de <strong>${juegos.length}</strong> juegos`;
        }
    }

    // === Paginación ===
    function updatePagination() {
        const totalPages = Math.ceil(juegosFiltrados.length / gamesPerPage);
        if (pageInfo) pageInfo.textContent = `Página ${currentPage} de ${totalPages || 1}`;
        if (prevPageBtn) prevPageBtn.disabled = currentPage === 1;
        if (nextPageBtn) nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
        generatePageNumbers(totalPages);
    }

    function generatePageNumbers(totalPages) {
        if (!pageNumbersContainer) return;
        pageNumbersContainer.innerHTML = '';

        if (totalPages <= 1) return;

        const maxVisiblePages = 5;
        let startPage, endPage;

        if (totalPages <= maxVisiblePages) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
            const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

            if (currentPage <= maxPagesBeforeCurrent) {
                startPage = 1;
                endPage = maxVisiblePages;
            } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
                startPage = totalPages - maxVisiblePages + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrent;
                endPage = currentPage + maxPagesAfterCurrent;
            }
        }

        if (startPage > 1) {
            const firstBtn = createPageButton(1);
            pageNumbersContainer.appendChild(firstBtn);
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'page-ellipsis';
                ellipsis.textContent = '...';
                pageNumbersContainer.appendChild(ellipsis);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            const btn = createPageButton(i);
            if (i === currentPage) btn.classList.add('active');
            pageNumbersContainer.appendChild(btn);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.className = 'page-ellipsis';
                ellipsis.textContent = '...';
                pageNumbersContainer.appendChild(ellipsis);
            }
            const lastBtn = createPageButton(totalPages);
            pageNumbersContainer.appendChild(lastBtn);
        }
    }

    function createPageButton(pageNum) {
        const btn = document.createElement('button');
        btn.className = 'page-number-btn';
        btn.textContent = pageNum;
        btn.addEventListener('click', () => goToPage(pageNum));
        return btn;
    }

    function goToPage(pageNumber) {
        const totalPages = Math.ceil(juegosFiltrados.length / gamesPerPage);
        if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
            currentPage = pageNumber;
            displayCurrentPage();
            scrollToTop();
        }
    }

    function goToPrevPage() {
        if (currentPage > 1) {
            currentPage--;
            displayCurrentPage();
        }
    }

    function goToNextPage() {
        const totalPages = Math.ceil(juegosFiltrados.length / gamesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayCurrentPage();
        }
    }

    // === Renderizado de juegos ===
    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const juegosToShow = juegosFiltrados.slice(startIndex, endIndex);
        displayGames(juegosToShow);
        updatePagination();
    }

    function displayGames(juegosArray) {
        if (!gallery) return;
        gallery.innerHTML = ''; // Limpiar galería

        if (juegosArray.length === 0) {
            gallery.innerHTML = '<p class="no-results">No se encontraron juegos con los filtros aplicados.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        juegosArray.forEach((juego, index) => {
            const gameCard = createGameCard(juego, index);
            fragment.appendChild(gameCard);
        });
        gallery.appendChild(fragment);
    }

    function createGameCard(juego, index) {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.dataset.gameId = juego.id; // Importante para identificar el juego

        // Añadir animación secuencial
        card.style.setProperty('--i', index);

        const badgeHTML = juego.nuevo ? '<span class="badge new">Nuevo</span>' : (juego.popular ? '<span class="badge popular">Popular</span>' : '');

        card.innerHTML = `
            ${badgeHTML}
            <img src="${juego.imagen}" alt="${juego.nombre}" class="game-image" loading="lazy">
            <div class="game-info">
                <h3 class="game-title">${juego.nombre}</h3>
                <div class="game-tags">
                    ${juego.tags ? juego.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                </div>
                <div class="rating">
                    ${juego.rating || '⭐'.repeat(5)}
                </div>
                <div class="game-meta">
                    <span>Tamaño: ${juego.tamano || 'N/A'} GB</span>
                    <span>${formatNumber(juego.downloads)} descargas</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => showGameDetails(juego));
        card.addEventListener('mouseenter', (e) => showGamePreview(e, juego));
        card.addEventListener('mouseleave', hideGamePreview);

        return card;
    }

    // === Renderizado de juegos destacados (carrusel) ===
    function displayFeaturedGames() {
        if (!carouselTrack || !carouselDots) return;
        carouselTrack.innerHTML = '';
        carouselDots.innerHTML = '';

        juegosDestacados.forEach((juego, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            if (index === 0) slide.classList.add('active');
            slide.innerHTML = `
                <img src="${juego.imagen}" alt="${juego.nombre}">
                <div class="slide-info">
                    <h4>${juego.nombre}</h4>
                    <p>${juego.descripcion.substring(0, 100)}...</p>
                </div>
            `;
            slide.addEventListener('click', () => showGameDetails(juego));
            carouselTrack.appendChild(slide);

            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            if (index === 0) dot.classList.add('active');
            dot.dataset.index = index;
            dot.addEventListener('click', () => goToSlide(index));
            carouselDots.appendChild(dot);
        });
    }

    function goToSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.carousel-dot');
        const currentSlideEl = document.querySelector('.carousel-slide.active');
        const currentDot = document.querySelector('.carousel-dot.active');

        if (currentSlideEl) currentSlideEl.classList.remove('active');
        if (currentDot) currentDot.classList.remove('active');

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const newIndex = (currentSlide + 1) % juegosDestacados.length;
        goToSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentSlide - 1 + juegosDestacados.length) % juegosDestacados.length;
        goToSlide(newIndex);
    }

    // === Modal de detalles del juego ===
    function showGameDetails(juego) {
        if (!gameModal) return;

        detailsImage.src = juego.imagen;
        detailsImage.alt = juego.nombre;
        detailsTitle.textContent = juego.nombre;
        detailsRating.textContent = juego.rating || '⭐⭐⭐⭐⭐';
        detailsDownloads.textContent = `Descargado por +${formatNumber(juego.downloads)} usuarios`;
        detailsDescription.textContent = juego.descripcion;
        detailsRequirements.innerHTML = juego.requisitos || '<p>Información no disponible.</p>';

        // Trailer (si tienes un campo en data.js)
        if (trailerFrame) {
            trailerFrame.src = juego.trailer || '';
        }

        // Enlaces de descarga
        if (linkGofile) linkGofile.href = juego.links?.direct || '#';
        if (linkMediafire) linkMediafire.href = juego.links?.mediafire || '#';

        // Extras
        if (extraDownloadsContainer) {
            extraDownloadsContainer.style.display = juego.extra ? 'block' : 'none';
            if (juego.extra) {
                let extraHTML = '';
                if (juego.extra.vocesLatinas) extraHTML += `<a href="${juego.extra.vocesLatinas}" target="_blank" class="download-link">Voces en Español</a>`;
                if (juego.extra.onlineFix) extraHTML += `<a href="${juego.extra.onlineFix}" target="_blank" class="download-link">Online Fix</a>`;
                if (juego.extra.updates) extraHTML += `<a href="${juego.extra.updates}" target="_blank" class="download-link">Actualización</a>`;
                extraDownloadsContainer.querySelector('.links-extra').innerHTML = extraHTML;
            }
        }

        // Nota
        if (gameNoteContainer && gameNoteText) {
            if (juego.note) {
                gameNoteText.textContent = juego.note;
                gameNoteContainer.style.display = 'block';
            } else {
                gameNoteContainer.style.display = 'none';
            }
        }

        // Comentarios
        if (detailsComments) {
            detailsComments.innerHTML = '';
            if (juego.comments && juego.comments.length > 0) {
                juego.comments.forEach(text => {
                    const commentEl = document.createElement('div');
                    commentEl.className = 'comment';
                    commentEl.innerHTML = `<p>${text}</p>`;
                    detailsComments.appendChild(commentEl);
                });
            } else {
                detailsComments.innerHTML = '<p class="no-comments">No hay comentarios aún. ¡Sé el primero en comentar!</p>';
            }
        }

        gameModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evita scroll del fondo
    }

    function closeGameDetails() {
        if (gameModal) {
            gameModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
        if (trailerFrame) trailerFrame.src = ''; // Detener video
    }

    // === Vista previa del juego ===
    function showGamePreview(event, juego) {
        clearTimeout(previewTimeout);
        const cardRect = event.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        previewTimeout = setTimeout(() => {
            if (previewImage) previewImage.src = juego.imagen;
            if (previewTitle) previewTitle.textContent = juego.nombre;
            if (previewRating) previewRating.textContent = juego.rating || '⭐⭐⭐⭐⭐';
            if (previewDownloads) previewDownloads.textContent = `${formatNumber(juego.downloads)} descargas`;
            if (previewDescription) previewDescription.textContent = juego.descripcion.substring(0, 100) + '...';

            if (previewModal) {
                previewModal.style.display = 'block';
                previewModal.style.top = `${cardRect.top + scrollTop - 10}px`;
                previewModal.style.left = `${cardRect.right + 15}px`;
            }
        }, 500); // Retraso para evitar tooltips al pasar rápido
    }

    function hideGamePreview() {
        clearTimeout(previewTimeout);
        if (previewModal) previewModal.style.display = 'none';
    }

    // === Tema (Dark/Light) ===
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.dataset.theme = savedTheme;
    }

    function toggleTheme() {
        const current = document.body.dataset.theme;
        const newTheme = current === 'dark' ? 'light' : 'dark';
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    }

    // === Event Listeners ===
    function setupEventListeners() {
        // Filtros y búsqueda
        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (heroSearch) heroSearch.addEventListener('input', applyFilters);
        if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', applyFilters);
        if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearFilters);
        if (yearRange) yearRange.addEventListener('input', () => {
            if (yearValue) yearValue.textContent = yearRange.value;
        });

        // Categorías
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const category = card.dataset.category;
                // Puedes implementar la lógica para filtrar por categoría aquí
                // Por ahora, solo aplicamos el filtro
                document.querySelectorAll('input[name="genre"]').forEach(cb => {
                    cb.checked = cb.value === category;
                });
                applyFilters();
            });
        });

        // Paginación
        if (prevPageBtn) prevPageBtn.addEventListener('click', goToPrevPage);
        if (nextPageBtn) nextPageBtn.addEventListener('click', goToNextPage);

        // Carrusel
        if (carouselBtnNext) carouselBtnNext.addEventListener('click', nextSlide);
        if (carouselBtnPrev) carouselBtnPrev.addEventListener('click', prevSlide);

        // Modal
        if (closeDetailsBtn) closeDetailsBtn.addEventListener('click', closeGameDetails);
        if (gameModal) {
            gameModal.addEventListener('click', (e) => {
                if (e.target === gameModal) closeGameDetails();
            });
        }

        // Comentarios
        if (addCommentBtn && commentInput && detailsComments) {
            addCommentBtn.addEventListener('click', () => {
                const text = commentInput.value.trim();
                if (text) {
                    const commentEl = document.createElement('div');
                    commentEl.className = 'comment';
                    commentEl.innerHTML = `<p>${text}</p>`;
                    detailsComments.appendChild(commentEl);
                    commentInput.value = '';
                    showNotification('Comentario agregado.', 'success');
                }
            });
        }

        // Formulario de contacto
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showNotification('Mensaje enviado. ¡Gracias por contactarnos!', 'success');
                contactForm.reset();
            });
        }

        // Botón volver arriba
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                backToTopBtn.classList.toggle('show', window.scrollY > 500);
            });
            backToTopBtn.addEventListener('click', scrollToTop);
        }

        // Tema
        if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

        // Menú móvil
        if (menuToggleBtn && mobileNav) {
            menuToggleBtn.addEventListener('click', () => {
                mobileNav.hidden = !mobileNav.hidden;
                menuToggleBtn.setAttribute('aria-expanded', !mobileNav.hidden);
            });
        }

        // Cerrar modales con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeGameDetails();
                hideGamePreview();
                if (!mobileNav.hidden) {
                    mobileNav.hidden = true;
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    function hideWelcomeScreen() {
        if (welcomeScreen) {
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
            }, 3500); // Coincide con la duración de la animación
        }
    }

    // === Iniciar la aplicación ===
    init();
});
