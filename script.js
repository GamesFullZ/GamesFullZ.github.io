document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const modal = document.getElementById('gameModal');
    const contactForm = document.getElementById('contactForm');

    // Datos de juegos (simulados)
    const games = [
        {
            id: 1,
            title: "Resident Evil 4",
            image: "Images/Resi4-gc-cover.jpg",
            info: "Un clásico del survival horror remasterizado. Leon S. Kennedy debe rescatar a la hija del presidente.",
            requirements: "SO: Windows 10<br>Procesador: Intel Core i5-7500<br>Memoria: 8 GB RAM<br>Gráficos: GTX 1050 Ti<br>Almacenamiento: 50 GB",
            downloads: 5320,
            rating: "⭐⭐⭐⭐⭐",
            comments: ["Excelente remake!", "Gráficos 4K increíbles", "Un poco pesado en mi PC"],
            links: {
                direct: "https://gofile.io/d/abc123",  // ← Usa "direct"
                mediafire: "https://www.mediafire.com/file/xyz"
            }
        },
        {
            id: 2,
            title: "Dead Island",
            image: "Images/Dead_island_PC_packshot.png",
            info: "Supervivencia en una isla infestada de zombis. Combate cuerpo a cuerpo brutal.",
            requirements: "SO: Windows 7 / Vista / XP<br>Procesador: Core2Duo 2.66 GHz<br>Memoria: 1 GB RAM<br>Gráficos: GeForce 8600 GT / Radeon HD 2600XT (256 MB VRAM)<br>Almacenamiento: 7 GB",
            downloads: 8740,
            rating: "⭐⭐⭐⭐☆",
            comments: ["Divertido pero bugueado", "Me encanta el combate", "Recomendado para fans de left 4 dead 2"],
            links: {
                direct: "https://gofile.io/d/def456",
                mediafire: "https://www.mediafire.com/file/uvw"
            }
        },
        {
            id: 3,
            title: "Postal 2",
            image: "Images/Postal_2_cover.png",
            info: "Juego de disparos en primera persona satírico y violento con mundo abierto y misiones absurdas.",
            requirements: "SO: Windows XP / Vista / 7 / 8 / 10<br>Procesador: Pentium III o Athlon a 1.2 GHz<br>Memoria: 384 MB RAM<br>Gráficos: DirectX 8.1 compatible con al menos 64 MB<br>Almacenamiento: 4 GB",
            downloads: 3200,
            rating: "⭐⭐⭐⭐☆",
            comments: [
                "Juegazo xdd lo jugaba de niño",
                "Obra maestra xd"
            ],
            links: {
                direct: "https://gofile.io/d/ghi789",
                mediafire: "https://www.mediafire.com/file/qrs"
            }
        },
        {
            id: 4,
            title: "Left 4 Dead 2",
            image: "Images/Left4Dead2.jpg",
            info: "Juego cooperativo de disparos en primera persona contra hordas de zombis con acción rápida y teamwork.",
            requirements: "SO: Windows XP / Vista / 7<br>Procesador: Intel Core 2 Duo 2.4 GHz<br>Memoria: 2 GB RAM<br>Gráficos: NVIDIA GeForce 7600 / ATI Radeon X800<br>Almacenamiento: 13 GB libre",
            downloads: 12500,
            rating: "⭐⭐⭐⭐⭐",
            comments: [
                "Juegazo del ciber",
                "Mejor juego de zombies"
            ],
            links: {
                direct: "https://gofile.io/d/jkl012",
                mediafire: "https://www.mediafire.com/file/tuv"
            }
        },
        {
            id: 20,
            title: "Tony Hawks Underground 2",
            image: "Images/Tony.png",
            info: "Juego de skate con historia loca y humor absurdo donde viajas por el mundo haciendo trucos extremos.",
            requirements: "SO: Windows 98/ME/2000/XP<br>Procesador: Pentium III 1.0 GHz<br>Memoria: 256 MB RAM<br>Gráficos: 64 MB (GeForce 3 o superior)<br>Almacenamiento: 1.8 GB libres",
            downloads: 0,
            rating: "⭐⭐⭐⭐☆",
            comments: ["Divertido Pero con mods mas", "Me encanta el combate", "Recomendado para fans de left 4 dead 2"],
            links: {
                gofile: "https://gofile.io/d/def456",
                mediafire: "https://www.mediafire.com/file/uvw"
                }
        },
    ];

    let displayedGames = 0;
    const gamesPerLoad = 2;

    // Formatear números (5320 → 5,320)
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Cargar juegos
    function loadGames() {
        const fragment = document.createDocumentFragment();
        const toLoad = games.slice(displayedGames, displayedGames + gamesPerLoad);

        toLoad.forEach(game => {
            const img = document.createElement('img');
            img.src = game.image;
            img.alt = game.title;
            img.classList.add('game-item');
            img.dataset.gameId = game.id;
            img.addEventListener('click', () => openModal(game));
            fragment.appendChild(img);
        });

        gallery.appendChild(fragment);
        displayedGames += toLoad.length;

        if (displayedGames >= games.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Buscador
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();
        document.querySelectorAll('.game-item').forEach(img => {
            const game = games.find(g => g.id == img.dataset.gameId);
            if (game) {
                img.style.display = game.title.toLowerCase().includes(term) ? 'block' : 'none';
            }
        });
    });

    // Botón "Ver más"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadGames);
    }

    // Modal
    function openModal(game) {
        document.getElementById('modalImage').src = game.image;
        document.getElementById('modalTitle').textContent = game.title;
        document.getElementById('modalInfo').textContent = game.info;
        document.getElementById('modalRequirements').innerHTML = game.requirements;
        document.getElementById('modalRating').textContent = game.rating;
        document.getElementById('modalDownloads').textContent = `Descargado por +${formatNumber(game.downloads)} usuarios`;

        // Enlaces de descarga
        const linkDirect = document.getElementById('linkDirect');
        const linkMediaFire = document.getElementById('linkMediaFire');

        if (linkDirect) linkDirect.href = game.links.direct || "#";
        if (linkMediaFire) linkMediaFire.href = game.links.mediafire || "#";

        // Comentarios
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.innerHTML = '';
        game.comments.forEach(text => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.textContent = text;
            commentsContainer.appendChild(div);
        });

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

    // Añadir comentario
    const addCommentBtn = document.getElementById('addCommentBtn');
    if (addCommentBtn) {
        addCommentBtn.addEventListener('click', function () {
            const input = document.getElementById('commentInput');
            const commentsContainer = document.getElementById('commentsContainer');
            if (input && input.value.trim()) {
                const div = document.createElement('div');
                div.className = 'comment';
                div.textContent = input.value.trim();
                commentsContainer.appendChild(div);
                input.value = '';
            }
        });
    }

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