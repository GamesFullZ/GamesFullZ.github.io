// script.js

document.addEventListener('DOMContentLoaded', function () {
    // --- REFERENCIAS A ELEMENTOS DEL DOM ---
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const contactForm = document.querySelector('.contact-section form');
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
    const randomGameBtn = document.getElementById('randomGameBtn');
    const categoryFilter = document.getElementById('categoryFilter');
    const minRamFilter = document.getElementById('minRamFilter');
    const processorFilter = document.getElementById('processorFilter');
    const graphicsFilter = document.getElementById('graphicsFilter');
    const navButtons = document.querySelectorAll('.nav-button');
    const sections = document.querySelectorAll('.content-section');
    const voteBtn = document.getElementById('voteBtn');
    const pollOptionsContainer = document.getElementById('pollOptions');
    const pollResultsContainer = document.getElementById('pollResults');
    const totalVotesSpan = document.getElementById('totalVotes');

    // --- VARIABLES DE ESTADO ---
    let pollData = {
        assassins: 45,
        resident: 30,
        call: 15,
        god: 10
    };
    let totalVotes = 100;
    const VOTE_KEY = 'gamesfullz_poll_vote';

    // --- VERIFICACIÓN DE DATOS ---
    if (typeof recursos === 'undefined' || !Array.isArray(recursos)) {
        console.error('❌ Error: No se encontraron los datos de juegos (recursos) o no es un array. Asegúrate de incluir data.js correctamente antes de este script.');
        if (gallery) gallery.innerHTML = '<p style="color:red; text-align:center; grid-column: 1 / -1;">Error crítico: Datos de juegos no disponibles.</p>';
        return;
    }

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
            "Resident Evil 7: Biohazard": "Nwl3RkEHK4c",
            "Dead Island": "qBmHIX5Xrk4",
            "Postal 2": "u8D5rkcX78M",
            "Left 4 Dead 2": "ZR3OX5uJN8",
            "Call of Duty: Black Ops 1": "IRgJgpLwT4w",
            "Assassins Creed 2": "XQxXyq56m9Y",
            "Red Dead Redemption 1": "EjKiSr6v2R8",
            "Payday 2": "x9dhme",
            "Battlefield 2": "DDlRTY",
            "God of War (2018)": "K0OO5w8Q0MI",
            "God of War: Ragnarök": "2btlPD2N2IU",
            "Deltarune": "dQw4w9WgXcQ",
            "Sons of the Forest": "c2B4Cd",
            "The Quarry": "bYr0O4",
            "Bendy and the Ink Machine": "avMKZl",
            "Bendy and the Dark Revivalo": "Qax9uu",
            "Call of Juarez: Gunslinger": "DDlRTY",
            "Far Cry 3": "2uRoh0",
            "Call of Duty: Modern Warfare 3": "ioxs8mh1bgafbxl",
            "Lego Batman 2 DC": "n1juuplitqdaj57",
            "Jurassic World Evolution 2": "d8q331qkl5527mn",
            "Far Cry 5": "lg6fpmp3f2uhuho",
            "Fnaf Collection": "sbws8mnvrtkjno0",
            "Peak": "2uRoh0",
            "LEGO Marvel Super Heroes": "bzh8jle3p3i7eil",
            "Call of Duty: Black Ops 2": "cwdumqbqjz3j3nb",
            // ... añade más mappings ...
        };
        return trailerMap[gameName] || "dQw4w9WgXcQ"; // Fallback
    }

    function extractRam(requisitosText) {
        const ramMatch = requisitosText.match(/(\d+)\s*GB/i) || requisitosText.match(/(\d+(?:\.\d+)?)\s*GB/i);
        return ramMatch ? parseInt(ramMatch[1], 10) : 0;
    }

    function extractProcessor(requisitosText) {
        if (requisitosText.toLowerCase().includes('intel')) return 'intel';
        if (requisitosText.toLowerCase().includes('amd')) return 'amd';
        return '';
    }

    function extractGraphics(requisitosText) {
        if (requisitosText.toLowerCase().includes('nvidia') || requisitosText.toLowerCase().includes('geforce')) return 'nvidia';
        if (requisitosText.toLowerCase().includes('amd') || requisitosText.toLowerCase().includes('radeon')) return 'amd';
        if (requisitosText.toLowerCase().includes('intel')) return 'intel';
        return '';
    }

    // --- FUNCIONES PARA MOSTRAR DATOS ---
    function displayGames(gamesToShow) {
        if (!gallery) return;

        gallery.innerHTML = '';
        if (gamesToShow.length === 0) {
            gallery.innerHTML = '<p style="text-align:center; grid-column: 1 / -1; color: #aaa;">No se encontraron juegos que coincidan con los filtros.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        gamesToShow.forEach(game => {
            if (game.tipo === 'juego') {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card';
                gameCard.innerHTML = `
                    <img src="${game.imagen}" alt="${game.nombre}" class="game-image" loading="lazy">
                    <div class="game-info">
                        <h3 class="game-title">${game.nombre}</h3>
                        <p class="game-description">${game.descripcion.substring(0, 100)}...</p>
                        <div class="game-meta">
                            <span class="rating">${game.rating}</span>
                            <span class="downloads">${formatNumber(game.downloads)} descargas</span>
                        </div>
                    </div>
                `;
                // Añadir evento de clic a la tarjeta
                gameCard.addEventListener('click', () => showGameDetails(game));
                
                // Añadir manejador de error de imagen DESPUÉS de insertar en el DOM
                const imgElement = gameCard.querySelector('.game-image');
                if (imgElement) {
                    imgElement.addEventListener('error', function() {
                        // Evita ejecutar el manejador de error de nuevo si ya se ejecutó
                        if (this.dataset.errorHandled) return;
                        this.dataset.errorHandled = 'true';

                        // Crea el contenido de fallback
                        const fallbackHTML = `
                            <div class="game-image image-error">
                                <i class="fas fa-image" style="font-size: 2rem; margin-bottom: 10px;"></i>
                                <span>Imagen no disponible</span>
                            </div>
                            <div class="game-info">
                                <h3 class="game-title">${game.nombre}</h3>
                                <p class="game-description">${game.descripcion.substring(0, 100)}...</p>
                                <div class="game-meta">
                                    <span class="rating">${game.rating}</span>
                                    <span class="downloads">${formatNumber(game.downloads)} descargas</span>
                                </div>
                            </div>
                        `;
                        // Reemplaza el contenido de la tarjeta
                        this.closest('.game-card').innerHTML = fallbackHTML;
                    });
                }

                fragment.appendChild(gameCard);
            }
        });
        gallery.appendChild(fragment);
    }

    function showGameDetails(game) {
        if (!gameDetailsOverlay) return;

        // Llenar datos del juego
        if (detailsImage) detailsImage.src = game.imagen;
        if (detailsImage) detailsImage.alt = game.nombre;
        if (detailsTitle) detailsTitle.textContent = game.nombre;
        if (detailsRating) detailsRating.textContent = game.rating;
        if (detailsDownloads) detailsDownloads.textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;
        if (detailsDescription) detailsDescription.textContent = game.descripcion;

        // Formatear y mostrar requisitos
        if (detailsRequirements) {
            detailsRequirements.innerHTML = game.requisitos || 'Información no disponible.';
        }

        // Configurar trailer (CORREGIDO: Eliminado espacio extra)
        if (trailerFrame) {
            const trailerId = getTrailerId(game.nombre);
            trailerFrame.src = `https://www.youtube.com/embed/${trailerId}`; 
        }

        // Configurar enlaces de descarga
        if (linkGofile) linkGofile.href = (game.links.direct || "#").trim();
        if (linkMediafire) linkMediafire.href = (game.links.mediafire || "#").trim();

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
        scrollToTop();
    }

    function closeGameDetails() {
        if (gameDetailsOverlay) {
            gameDetailsOverlay.style.display = 'none';
        }
        // Pausar el vídeo del trailer al cerrar
        if (trailerFrame) {
            trailerFrame.src = '';
        }
    }

    // --- FUNCIONES DE FILTRO Y BÚSQUEDA ---
    function applyFiltersAndSearch() {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categoryFilter ? categoryFilter.value.toLowerCase() : '';
        const minRam = minRamFilter ? minRamFilter.value : '';
        const processor = processorFilter ? processorFilter.value.toLowerCase() : '';
        const graphics = graphicsFilter ? graphicsFilter.value.toLowerCase() : '';

        const filteredGames = recursos.filter(game => {
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
                } else if (category === 'estrategia') {
                    matchesCategory = lowerDesc.includes('estrategia') || lowerDesc.includes('strategy');
                } else if (category === 'rpg') {
                    matchesCategory = lowerName.includes('elderscrolls') || lowerName.includes('skyrim') || lowerName.includes('witcher') || lowerDesc.includes('rpg') || lowerDesc.includes('role-playing');
                }
            }

            let matchesRam = true;
            if (minRam) {
                const gameRam = extractRam(game.requisitos);
                matchesRam = gameRam >= parseInt(minRam);
            }

            let matchesProcessor = true;
            if (processor) {
                const gameProc = extractProcessor(game.requisitos);
                matchesProcessor = gameProc.includes(processor);
            }

            let matchesGraphics = true;
            if (graphics) {
                const gameGraph = extractGraphics(game.requisitos);
                matchesGraphics = gameGraph.includes(graphics);
            }

            return matchesSearch && matchesCategory && matchesRam && matchesProcessor && matchesGraphics;
        });

        displayGames(filteredGames);
    }

    // --- FUNCIONES PARA ENCUESTAS ---
    function updatePollResults() {
        for (const [key, value] of Object.entries(pollData)) {
            const percent = Math.round((value / totalVotes) * 100);
            const percentSpan = document.getElementById(`${key}Percent`);
            const barFill = document.getElementById(`${key}Bar`);
            if (percentSpan) percentSpan.textContent = `${percent}%`;
            if (barFill) barFill.style.width = `${percent}%`;
        }
        if (totalVotesSpan) totalVotesSpan.textContent = totalVotes;
    }

    function handleVote() {
        const selectedOption = document.querySelector('input[name="poll"]:checked');
        if (!selectedOption) {
            alert("❌ Por favor, selecciona una opción.");
            return;
        }
        const voteValue = selectedOption.value;

        pollData[voteValue]++;
        totalVotes++;

        localStorage.setItem(VOTE_KEY, voteValue);

        if (pollOptionsContainer) pollOptionsContainer.style.display = 'none';
        if (voteBtn) voteBtn.style.display = 'none';
        if (pollResultsContainer) pollResultsContainer.style.display = 'block';

        updatePollResults();
        alert("✅ ¡Gracias por tu voto!");
    }

    function loadPollState() {
        const savedVote = localStorage.getItem(VOTE_KEY);
        if (savedVote) {
            const radioToCheck = document.querySelector(`input[name="poll"][value="${savedVote}"]`);
            if (radioToCheck) radioToCheck.checked = true;
            if (pollOptionsContainer) pollOptionsContainer.style.display = 'none';
            if (voteBtn) voteBtn.style.display = 'none';
            if (pollResultsContainer) pollResultsContainer.style.display = 'block';
            updatePollResults();
        }
    }

    // --- NAVEGACIÓN ENTRE SECCIONES ---
    function switchSection(targetSectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(targetSectionId);
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
        searchInput.addEventListener('input', applyFiltersAndSearch);
    }

    const filterElements = [categoryFilter, minRamFilter, processorFilter, graphicsFilter];
    filterElements.forEach(filter => {
        if (filter) {
            filter.addEventListener('change', applyFiltersAndSearch);
        }
    });

    if (randomGameBtn) {
        randomGameBtn.addEventListener('click', function() {
            const juegos = recursos.filter(g => g.tipo === 'juego');
            if (juegos.length === 0) {
                alert("❌ No hay juegos disponibles.");
                return;
            }
            const randomGame = juegos[Math.floor(Math.random() * juegos.length)];
            showGameDetails(randomGame);
            // alert(`🎲 Juego aleatorio: ${randomGame.nombre}`); // Opcional
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            switchSection(`${targetSection}-section`);
        });
    });

    if (voteBtn) {
        voteBtn.addEventListener('click', handleVote);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // --- INICIALIZACIÓN FINAL ---
    loadPollState();
    displayGames(recursos.filter(g => g.tipo === 'juego')); // Mostrar juegos iniciales

    // Manejo del cambio de tema (si se usa)
    window.changeTheme = function() {
        const themeSelector = document.getElementById("theme-selector");
        if (themeSelector) {
            const theme = themeSelector.value;
            document.body.setAttribute("data-theme", theme);
            localStorage.setItem("selectedTheme", theme);
        }
    };

    (function loadSavedTheme() {
        const savedTheme = localStorage.getItem("selectedTheme");
        const themeSelector = document.getElementById("theme-selector");
        if (savedTheme !== null && themeSelector) {
            themeSelector.value = savedTheme;
            document.body.setAttribute("data-theme", savedTheme);
        }
    })();

});
