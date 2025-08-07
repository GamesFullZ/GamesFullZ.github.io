document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('gameModal');
    const contactForm = document.getElementById('contactForm');

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
});