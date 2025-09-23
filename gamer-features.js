// ===== GAMER FEATURES JAVASCRIPT =====

class GamerFeatures {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.currentCategory = 'all';
        this.searchTerm = '';
        this.init();
    }

    init() {
        this.setupThemeToggle();
        this.setupNotificationBanner();
        this.setupCategoryFilters();
        this.setupSearchFunctionality();
        this.setupLinkVerification();
        this.setupSmoothAnimations();
        this.setupMobileOptimizations();
    }

    // Sistema de cambio de tema
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const html = document.documentElement;

        if (themeToggle && themeIcon) {
            this.updateThemeIcon(this.currentTheme);
            
            themeToggle.addEventListener('click', () => {
                this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
                html.setAttribute('data-theme', this.currentTheme);
                localStorage.setItem('theme', this.currentTheme);
                this.updateThemeIcon(this.currentTheme);
                this.animateThemeChange();
            });
        }
    }

    updateThemeIcon(theme) {
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    animateThemeChange() {
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }

    // Sistema de notificaciones
    setupNotificationBanner() {
        const banner = document.getElementById('newGameBanner');
        const closeBanner = document.getElementById('closeBanner');

        if (banner && closeBanner) {
            // Mostrar banner después de 2 segundos
            setTimeout(() => {
                banner.classList.add('show');
                this.trackBannerView();
            }, 2000);

            closeBanner.addEventListener('click', () => {
                banner.classList.remove('show');
                this.trackBannerClose();
            });

            // Auto-ocultar después de 10 segundos
            setTimeout(() => {
                if (banner.classList.contains('show')) {
                    banner.classList.remove('show');
                }
            }, 10000);
        }
    }

    trackBannerView() {
        // Aquí podrías enviar analytics
        console.log('Banner viewed');
    }

    trackBannerClose() {
        // Aquí podrías enviar analytics
        console.log('Banner closed');
    }

    // Sistema de categorías
    setupCategoryFilters() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const gallery = document.getElementById('gallery');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover clase active de todos los botones
                categoryBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });

                // Activar botón clickeado
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');

                // Filtrar juegos por categoría
                this.currentCategory = btn.getAttribute('data-category');
                this.filterGamesByCategory(this.currentCategory);
                this.animateCategoryChange();
            });
        });
    }

    filterGamesByCategory(category) {
        const gameCards = document.querySelectorAll('.game-card');
        let visibleCount = 0;

        gameCards.forEach(card => {
            const gameCategory = card.getAttribute('data-category');
            const shouldShow = category === 'all' || gameCategory === category;
            
            if (shouldShow) {
                card.style.display = 'block';
                card.setAttribute('aria-hidden', 'false');
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.setAttribute('aria-hidden', 'true');
            }
        });

        // Actualizar contador de juegos visibles
        this.updateGameCount(visibleCount);
    }

    animateCategoryChange() {
        const gallery = document.getElementById('gallery');
        if (gallery) {
            gallery.style.opacity = '0.5';
            setTimeout(() => {
                gallery.style.opacity = '1';
            }, 300);
        }
    }

    updateGameCount(count) {
        const pageInfo = document.getElementById('pageInfo');
        if (pageInfo) {
            const categoryText = this.currentCategory === 'all' ? 'todos los juegos' : this.currentCategory;
            pageInfo.textContent = `${count} juegos en ${categoryText}`;
        }
    }

    // Sistema de búsqueda mejorado
    setupSearchFunctionality() {
        const searchInput = document.getElementById('searchInput');
        const clearSearchBtn = document.getElementById('clearSearch');

        if (searchInput && clearSearchBtn) {
            let searchTimeout;

            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                this.searchTerm = e.target.value.toLowerCase();

                if (this.searchTerm.length > 0) {
                    clearSearchBtn.style.display = 'block';
                    searchTimeout = setTimeout(() => {
                        this.filterGamesBySearch(this.searchTerm);
                    }, 300); // Debounce
                } else {
                    clearSearchBtn.style.display = 'none';
                    this.filterGamesByCategory(this.currentCategory);
                }
            });

            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                searchInput.focus();
                clearSearchBtn.style.display = 'none';
                this.searchTerm = '';
                this.filterGamesByCategory(this.currentCategory);
            });

            // Búsqueda con Enter
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(this.searchTerm);
                }
            });
        }
    }

    filterGamesBySearch(searchTerm) {
        const gameCards = document.querySelectorAll('.game-card');
        let visibleCount = 0;

        gameCards.forEach(card => {
            const title = card.querySelector('.game-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.game-description')?.textContent.toLowerCase() || '';
            const category = card.getAttribute('data-category') || '';
            
            const matchesSearch = title.includes(searchTerm) || 
                                description.includes(searchTerm) || 
                                category.includes(searchTerm);
            
            const matchesCategory = this.currentCategory === 'all' || 
                                  card.getAttribute('data-category') === this.currentCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
                card.setAttribute('aria-hidden', 'false');
                visibleCount++;
                this.highlightSearchTerm(card, searchTerm);
            } else {
                card.style.display = 'none';
                card.setAttribute('aria-hidden', 'true');
            }
        });

        this.updateGameCount(visibleCount);
    }

    highlightSearchTerm(card, term) {
        if (!term) return;

        const title = card.querySelector('.game-title');
        const description = card.querySelector('.game-description');

        [title, description].forEach(element => {
            if (element) {
                const text = element.textContent;
                const highlightedText = text.replace(
                    new RegExp(term, 'gi'),
                    `<mark style="background: var(--primary-neon); color: var(--bg-darker); padding: 2px 4px; border-radius: 3px;">$&</mark>`
                );
                element.innerHTML = highlightedText;
            }
        });
    }

    performSearch(term) {
        console.log('Searching for:', term);
        // Aquí podrías implementar búsqueda avanzada o analytics
    }

    // Verificación de enlaces
    setupLinkVerification() {
        const gameModal = document.getElementById('gameModal');
        
        if (gameModal) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && 
                        mutation.attributeName === 'aria-hidden' && 
                        gameModal.getAttribute('aria-hidden') === 'false') {
                        this.verifyModalLinks();
                    }
                });
            });

            observer.observe(gameModal, { attributes: true });
        }
    }

    async verifyModalLinks() {
        const gofileLink = document.getElementById('linkGofile');
        const mediafireLink = document.getElementById('linkMediafire');
        const gofileStatus = document.getElementById('gofile-status');
        const mediafireStatus = document.getElementById('mediafire-status');

        if (gofileLink && gofileStatus) {
            await this.verifyLink(gofileLink.href, gofileStatus);
        }
        if (mediafireLink && mediafireStatus) {
            await this.verifyLink(mediafireLink.href, mediafireStatus);
        }
    }

    async verifyLink(url, statusElement) {
        if (!url || url === '#') {
            this.updateLinkStatus(statusElement, false);
            return;
        }

        try {
            // Simular verificación (en producción usarías un proxy o API)
            const response = await fetch(url, { 
                method: 'HEAD', 
                mode: 'no-cors',
                cache: 'no-cache'
            });
            this.updateLinkStatus(statusElement, true);
        } catch (error) {
            this.updateLinkStatus(statusElement, false);
        }
    }

    updateLinkStatus(statusElement, isWorking) {
        if (isWorking) {
            statusElement.innerHTML = '✅';
            statusElement.className = 'link-status verified';
            statusElement.setAttribute('aria-label', 'Enlace funcionando');
        } else {
            statusElement.innerHTML = '❌';
            statusElement.className = 'link-status broken';
            statusElement.setAttribute('aria-label', 'Enlace no disponible');
        }
    }

    // Animaciones suaves
    setupSmoothAnimations() {
        // Intersection Observer para animaciones de entrada
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observar elementos que se animan
        document.querySelectorAll('.game-card, .guide-step, .security-feature').forEach(el => {
            observer.observe(el);
        });
    }

    // Optimizaciones móviles
    setupMobileOptimizations() {
        // Detectar si es móvil
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            this.optimizeForMobile();
        }

        // Re-optimizar en resize
        window.addEventListener('resize', () => {
            const nowMobile = window.innerWidth <= 768;
            if (nowMobile !== isMobile) {
                this.optimizeForMobile();
            }
        });
    }

    optimizeForMobile() {
        // Reducir animaciones en móvil para mejor rendimiento
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                * {
                    animation-duration: 0.3s !important;
                }
                .neon-text {
                    animation: none;
                }
            }
        `;
        document.head.appendChild(style);

        // Optimizar imágenes para móvil
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.loading !== 'lazy') {
                img.loading = 'lazy';
            }
        });
    }

    // Utilidades
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Método para actualizar juegos nuevos
    updateNewGameBanner(gameName) {
        const banner = document.getElementById('newGameBanner');
        const gameNameElement = document.getElementById('newGameName');
        
        if (banner && gameNameElement) {
            gameNameElement.textContent = gameName;
            banner.classList.add('show');
        }
    }

    // Método para agregar juego con categoría
    addGameToGallery(gameData) {
        const gallery = document.getElementById('gallery');
        if (!gallery) return;

        const gameCard = this.createGameCard(gameData);
        gallery.appendChild(gameCard);
        
        // Animar entrada
        gameCard.style.opacity = '0';
        gameCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            gameCard.style.transition = 'all 0.6s ease';
            gameCard.style.opacity = '1';
            gameCard.style.transform = 'translateY(0)';
        }, 100);
    }

    createGameCard(gameData) {
        const card = document.createElement('div');
        card.className = 'game-card interactive';
        card.setAttribute('data-category', gameData.category || 'all');
        card.setAttribute('role', 'gridcell');
        
        card.innerHTML = `
            <div class="game-image">
                <img src="${gameData.image || 'placeholder.jpg'}" 
                     alt="${gameData.title}" 
                     loading="lazy"
                     style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
            </div>
            <h3 class="game-title">${gameData.title}</h3>
            <p class="game-description">${gameData.description || 'Descripción no disponible'}</p>
            <div class="game-meta">
                <span class="game-category">${gameData.category || 'Sin categoría'}</span>
                <span class="game-rating">${gameData.rating || '⭐⭐⭐⭐☆'}</span>
            </div>
        `;

        return card;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.gamerFeatures = new GamerFeatures();
});

// Exportar para uso global
window.GamerFeatures = GamerFeatures;