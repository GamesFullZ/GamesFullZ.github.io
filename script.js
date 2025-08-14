// script.js - Corregido y mejorado

document.addEventListener('DOMContentLoaded', function () {
    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.querySelector('.contact-section form');
    const gameDetailsOverlay = document.getElementById('gameDetailsOverlay');
    const closeDetailsBtn = document.querySelector('#gameDetailsOverlay .close');
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
    const randomGameBtn = document.getElementById('randomGameBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // --- VERIFICACIÓN DE DATOS ---
    if (typeof recursos === 'undefined' || !Array.isArray(recursos)) {
        console.error('❌ Error: No se encontraron los datos de juegos (recursos) o no es un array.');
        if (gallery) gallery.innerHTML = '<p style="color:red; text-align:center; grid-column: 1 / -1;">Error crítico: Datos de juegos no disponibles.</p>';
        return;
    }

    // --- VARIABLES DE ESTADO ---
    let displayedGames = 0;
    const gamesPerLoad = 6;

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
        return trailerMap[gameName] || "dQw4w9WgXcQ"; // Fallback a un video por defecto
    }

    // --- FUNCIONES PARA MOSTRAR DATOS ---
    function displayGames(gamesToShow) {
        if (!gallery) return;

        gallery.innerHTML = '';
        const fragment = document.createDocumentFragment();

        gamesToShow.forEach(game => {
            if (game.tipo === 'juego') {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                gameCard.dataset.gameId = game.id;
                
                // Crear imagen con fallback mejorado
                const img = document.createElement('img');
                img.src = game.imagen;
                img.alt = game.nombre;
                img.className = 'game-image';
                img.loading = 'lazy';
                
                // Añadir event listener para manejar errores de imagen
                img.addEventListener('error', function() {
                    // Evita ejecutar el manejador de error de nuevo si ya se ejecutó
                    if (this.dataset.errorHandled) return;
                    this.dataset.errorHandled = 'true';
                    
                    // Crea el contenido de fallback
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'game-image image-error';
                    fallbackDiv.innerHTML = `
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:10px; text-align:center;">
                            <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px; color:var(--color-accent-purple);"></i>
                            <span style="font-size:0.8rem;">Imagen no disponible</span>
                            <span style="font-size:0.7rem; margin-top:5px;">${game.nombre}</span>
                        </div>
                    `;
                    // Reemplaza la imagen por el div de fallback
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
            // Asumimos que game.requisitos es un string HTML
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
        const filteredGames = recursos.filter(game => {
            if (game.tipo !== 'juego') return false;
            return game.nombre.toLowerCase().includes(term) ||
                   game.descripcion.toLowerCase().includes(term);
        });
        displayGames(filteredGames);
    }

    // --- FUNCIONES PARA CARGAR MÁS JUEGOS ---
    function loadMoreGames() {
        const nextGames = recursos.slice(displayedGames, displayedGames + gamesPerLoad);
        if (nextGames.length === 0) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
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

                // Añadir event listener para manejar errores de imagen
                img.addEventListener('error', function() {
                    // Evita ejecutar el manejador de error de nuevo si ya se ejecutó
                    if (this.dataset.errorHandled) return;
                    this.dataset.errorHandled = 'true';
                    
                    // Crea el contenido de fallback
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'game-image image-error';
                    fallbackDiv.innerHTML = `
                        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:10px; text-align:center;">
                            <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px; color:var(--color-accent-purple);"></i>
                            <span style="font-size:0.8rem;">Imagen no disponible</span>
                            <span style="font-size:0.7rem; margin-top:5px;">${game.nombre}</span>
                        </div>
                    `;
                    // Reemplaza la imagen por el div de fallback
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

        if (gallery) gallery.appendChild(fragment);
        displayedGames += nextGames.length;

        if (displayedGames >= recursos.filter(g => g.tipo === 'juego').length) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
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

    if (searchInput) {
        searchInput.addEventListener('input', applyFiltersAndSearch);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreGames);
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
    displayGames(recursos.filter(g => g.tipo === 'juego').slice(0, gamesPerLoad));
    displayedGames = gamesPerLoad;

    if (displayedGames >= recursos.filter(g => g.tipo === 'juego').length) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    }
});
