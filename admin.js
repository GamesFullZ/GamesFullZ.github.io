document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const adminPanel = document.getElementById('admin-panel');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');

    const gameListContainer = document.getElementById('game-list');
    const addGameBtn = document.getElementById('add-game-btn');
    const editFormContainer = document.getElementById('edit-form-container');
    const editForm = document.getElementById('edit-form');
    const cancelEditBtn = document.getElementById('cancel-edit');
    const saveChangesBtn = document.getElementById('save-changes');

    let games = [...recursos]; // Use a copy of the original data

    // Simple password protection
    loginBtn.addEventListener('click', () => {
        if (passwordInput.value === 'admin123') { // Replace with a more secure password
            loginSection.style.display = 'none';
            adminPanel.style.display = 'block';
            renderGameList();
        } else {
            alert('Incorrect password');
        }
    });

    function renderGameList() {
        gameListContainer.innerHTML = '';
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.innerHTML = `
                <span>${game.nombre}</span>
                <div class="game-actions">
                    <button onclick="editGame(${game.id})">Edit</button>
                    <button onclick="deleteGame(${game.id})">Delete</button>
                </div>
            `;
            gameListContainer.appendChild(gameItem);
        });
    }

    window.editGame = (id) => {
        const game = games.find(g => g.id === id);
        if (game) {
            document.getElementById('game-id').value = game.id;
            document.getElementById('game-nombre').value = game.nombre;
            document.getElementById('game-descripcion').value = game.descripcion;
            document.getElementById('game-requisitos').value = game.requisitos;
            document.getElementById('game-imagen').value = game.imagen;
            document.getElementById('game-link-direct').value = game.links.direct;
            document.getElementById('game-link-mediafire').value = game.links.mediafire;
            editFormContainer.style.display = 'block';
        }
    };

    window.deleteGame = (id) => {
        if (confirm('Are you sure you want to delete this game?')) {
            games = games.filter(g => g.id !== id);
            renderGameList();
        }
    };

    addGameBtn.addEventListener('click', () => {
        editForm.reset();
        document.getElementById('game-id').value = '';
        editFormContainer.style.display = 'block';
    });

    cancelEditBtn.addEventListener('click', () => {
        editFormContainer.style.display = 'none';
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('game-id').value;
        const updatedGame = {
            id: id ? parseInt(id) : Date.now(), // Create a new ID if it's a new game
            nombre: document.getElementById('game-nombre').value,
            descripcion: document.getElementById('game-descripcion').value,
            requisitos: document.getElementById('game-requisitos').value,
            imagen: document.getElementById('game-imagen').value,
            links: {
                direct: document.getElementById('game-link-direct').value,
                mediafire: document.getElementById('game-link-mediafire').value,
            },
            // Default values for new games
            tipo: 'juego',
            downloads: 0,
            rating: '⭐⭐⭐⭐⭐',
            comments: [],
            password: '123'
        };

        if (id) {
            // Update existing game
            const index = games.findIndex(g => g.id === parseInt(id));
            games[index] = { ...games[index], ...updatedGame };
        } else {
            // Add new game
            games.push(updatedGame);
        }

        renderGameList();
        editFormContainer.style.display = 'none';
    });

    saveChangesBtn.addEventListener('click', () => {
        const dataFileContent = `const recursos = ${JSON.stringify(games, null, 4)};`;
        const blob = new Blob([dataFileContent], { type: 'text/javascript' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'data.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        alert('data.js has been generated. Please replace the old file on your server with this new one.');
    });
});