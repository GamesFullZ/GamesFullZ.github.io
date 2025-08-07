document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('gameModal');
    const contactForm = document.querySelector('form'); // Corregido el selector

    let displayedGames = 0;
    const gamesPerLoad = 2;

    // Formatear números
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Cargar juegos
    function loadGames() {
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

        // 🔁 Corregido: ID es linkGofile, no linkDirect
        const linkGofile = document.getElementById('linkGofile');
        if (linkGofile) {
            linkGofile.href = game.links.direct || "#";
        }

        // Comentarios
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = '';

        // Comentarios originales
        game.comments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

        // Comentarios del usuario (localStorage)
        const userComments = loadComments(game.id);
        userComments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

        // Guardar ID del juego en el modal
        modal.dataset.gameId = game.id;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Mostrar recomendaciones
        showGameRecommendations(game.nombre);
    }

    // Cerrar modal
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

    // Funciones de comentarios
    function saveComments(gameId, comments) {
        localStorage.setItem(`comments_${gameId}`, JSON.stringify(comments));
    }

    function loadComments(gameId) {
        const saved = localStorage.getItem(`comments_${gameId}`);
        return saved ? JSON.parse(saved) : [];
    }

    // Añadir comentario
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

    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✉️ Mensaje enviado. Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // Cargar primeros juegos
    loadGames();

    // ================================================
    // NUEVAS FUNCIONES AGREGADAS
    // ================================================

    // === CHAT EN TIEMPO REAL ===
    function toggleChat() {
        const chatBox = document.getElementById("chat-box");
        chatBox.classList.toggle("hidden");
    }

    function sendMessage() {
        const input = document.getElementById("chat-input");
        const message = input.value.trim();
        if (!message) return;

        const messagesDiv = document.getElementById("chat-messages");
        const msgElement = document.createElement("div");
        msgElement.textContent = `Tú: ${message}`;
        msgElement.style.marginBottom = "5px";
        msgElement.style.padding = "5px";
        msgElement.style.backgroundColor = "rgba(255,255,255,0.1)";
        msgElement.style.borderRadius = "3px";
        messagesDiv.appendChild(msgElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        input.value = "";
        
        // Guardar en localStorage
        const chatHistory = JSON.parse(localStorage.getItem("chatHistory") || "[]");
        chatHistory.push({ user: "Tú", text: message, timestamp: new Date().toLocaleTimeString() });
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    }

    // === ESTADÍSTICAS PÚBLICAS ===
    function loadPublicStats() {
        // Juegos más descargados
        const downloads = {};
        const views = {};

        recursos.forEach(game => {
            downloads[game.nombre] = game.downloads || 0;
            // Simular visitas si no existen
            views[game.nombre] = game.views || Math.floor(Math.random() * 10000);
        });

        // Mostrar top juegos
        const sortedDownloads = Object.entries(downloads).sort((a,b) => b[1] - a[1]);
        const sortedViews = Object.entries(views).sort((a,b) => b[1] - a[1]);

        const topDownloadsElement = document.getElementById("top-downloads-public");
        const topViewsElement = document.getElementById("top-views-public");
        
        if (topDownloadsElement) {
            topDownloadsElement.innerHTML = sortedDownloads.slice(0,5).map(([k,v]) => `<li style="margin: 5px 0;">🏆 ${k}: ${formatNumber(v)} descargas</li>`).join("");
        }
        
        if (topViewsElement) {
            topViewsElement.innerHTML = sortedViews.slice(0,5).map(([k,v]) => `<li style="margin: 5px 0;">👁️ ${k}: ${formatNumber(v)} visitas</li>`).join("");
        }

        // Sistemas operativos simulados
        const osStats = { Windows: 70, macOS: 15, Linux: 10, Android: 5 };
        const osStatsElement = document.getElementById("os-stats-public");
        if (osStatsElement) {
            osStatsElement.innerHTML = Object.entries(osStats).map(([k,v]) => `<li style="margin: 5px 0;">💻 ${k}: ${v}%</li>`).join("");
        }
    }

    // === NOTIFICACIONES INTELIGENTES ===
    function showNotification(text) {
        const notif = document.createElement("div");
        notif.className = "notification";
        notif.textContent = text;
        notif.style.position = "fixed";
        notif.style.top = "20px";
        notif.style.right = "20px";
        notif.style.background = "#4CAF50";
        notif.style.color = "white";
        notif.style.padding = "15px";
        notif.style.borderRadius = "5px";
        notif.style.zIndex = "9999";
        notif.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
        notif.style.animation = "fadeInOut 4s forwards";
        
        // Agregar animación CSS
        if (!document.querySelector('#notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateX(100px); }
                    10% { opacity: 1; transform: translateX(0); }
                    90% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(100px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 4000);
    }

    // Función para mostrar notificaciones automáticas
    function initNotifications() {
        // Notificación de bienvenida
        setTimeout(() => {
            showNotification("¡Bienvenido a GamesFullZ! 🎮");
        }, 2000);
        
        // Notificación de nuevo juego (simulada)
        setTimeout(() => {
            showNotification("🎮 ¡Nuevo juego disponible!");
        }, 10000);
    }

    // === IA RECOMENDADORA DE JUEGOS ===
    function recommendGames(gameTitle) {
        const game = recursos.find(g => g.nombre === gameTitle);
        if (!game || !game.tipo) return [];

        const similar = recursos.filter(g =>
            g !== game &&
            g.tipo === game.tipo
        ).slice(0, 3);

        return similar;
    }

    // Mostrar recomendaciones cuando se ve un juego
    function showGameRecommendations(gameTitle) {
        const recommendations = recommendGames(gameTitle);
        if (recommendations.length > 0) {
            const recText = recommendations.map(g => g.nombre).join(", ");
            showNotification(`Si te gustó ${gameTitle}, prueba: ${recText}`);
        }
    }

    // === MODO BAJO RECURSOS ===
    function enableLowResourceMode() {
        const isLowMode = confirm("¿Activar modo bajo recursos? Esto desactivará imágenes y animaciones.");
        if (!isLowMode) return;

        // Desactivar imágenes
        document.querySelectorAll("img").forEach(img => {
            img.style.display = "none";
        });
        
        // Desactivar animaciones
        const style = document.createElement('style');
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
        
        // Desactivar scripts pesados (simulado)
        console.log("Modo bajo recursos activado");
        showNotification("📱 Modo bajo recursos activado");
    }

    // === ASISTENTE PARA BUSCAR JUEGOS ===
    function handleSearchAssistant() {
        const input = document.getElementById("search-input").value.toLowerCase();
        const resultsDiv = document.getElementById("assistant-results");
        const games = recursos || [];

        if (!input) {
            resultsDiv.innerHTML = "";
            return;
        }

        const matches = games.filter(g => 
            g.nombre.toLowerCase().includes(input) ||
            (g.tipo && g.tipo.toLowerCase().includes(input)) ||
            (g.descripcion && g.descripcion.toLowerCase().includes(input))
        );

        resultsDiv.innerHTML = matches.slice(0,5).map(g => 
            `<div onclick="openGameFromAssistant('${g.id}')" 
                  style="padding: 8px; margin: 2px; background: #444; cursor: pointer; border-radius: 3px;">
               🎮 ${g.nombre}
             </div>`
        ).join("");
    }

    // Función para abrir juego desde el asistente
    function openGameFromAssistant(gameId) {
        const game = recursos.find(g => g.id == gameId);
        if (game) {
            openModal(game);
            document.getElementById("search-input").value = "";
        }
    }

    // === MÚSICA DE FONDO ===
    function toggleMusic() {
        const toggle = document.getElementById("music-toggle");
        const selector = document.getElementById("music-selector");
        const audio = document.getElementById("background-music");

        if (toggle.checked) {
            selector.disabled = false;
            const track = selector.value || "track1.mp3";
            audio.src = `assets/music/${track}`;
            audio.play().catch(e => console.log("Autoplay bloqueado:", e));
        } else {
            selector.disabled = true;
            audio.pause();
        }
    }

    function changeTrack() {
        const track = document.getElementById("music-selector").value;
        const audio = document.getElementById("background-music");
        audio.src = `assets/music/${track}`;
        audio.play().catch(e => console.log("Error al cambiar pista:", e));
    }

    // === CAMBIAR TEMA VISUAL ===
    function changeTheme() {
        const theme = document.getElementById("theme-selector").value;
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("selectedTheme", theme);
    }

    // === JUEGO ALEATORIO ===
    function randomGame() {
        if (recursos.length === 0) {
            showNotification("❌ No hay juegos disponibles.");
            return;
        }
        const random = recursos[Math.floor(Math.random() * recursos.length)];
        openModal(random);
        showNotification(`🎲 Juego aleatorio: ${random.nombre}`);
    }

    // === INICIALIZACIÓN DE FUNCIONES ===
    // Cargar tema guardado
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.getElementById("theme-selector").value = savedTheme;
        document.body.setAttribute("data-theme", savedTheme);
    }

    // Cargar historial de chat
    function loadChatHistory() {
        const chatHistory = JSON.parse(localStorage.getItem("chatHistory") || "[]");
        const messagesDiv = document.getElementById("chat-messages");
        chatHistory.forEach(msg => {
            const el = document.createElement("div");
            el.textContent = `${msg.user}: ${msg.text}`;
            el.style.marginBottom = "5px";
            el.style.padding = "5px";
            el.style.backgroundColor = "rgba(255,255,255,0.1)";
            el.style.borderRadius = "3px";
            messagesDiv.appendChild(el);
        });
    }

    // Inicializar notificaciones
    initNotifications();

    // Cargar chat al inicio
    loadChatHistory();

    // Cargar estadísticas públicas
    loadPublicStats();

    // Exponer funciones globales
    window.toggleChat = toggleChat;
    window.sendMessage = sendMessage;
    window.changeTheme = changeTheme;
    window.toggleMusic = toggleMusic;
    window.changeTrack = changeTrack;
    window.randomGame = randomGame;
    window.handleSearchAssistant = handleSearchAssistant;
    window.openGameFromAssistant = openGameFromAssistant;
    window.enableLowResourceMode = enableLowResourceMode;
});
