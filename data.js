// data.js
const recursos = [
    {
        id: 1,
        nombre: "Resident Evil 4",
        tipo: "juego",
        descripcion: "Un clásico del survival horror. Leon S. Kennedy debe rescatar a la hija del presidente.",
        requisitos: "SO: Windows XP<br>Procesador: Pentium III 1.4 GHz<br>Memoria: 256 MB RAM<br>Gráficos: GeForce 2 / Radeon 9200 (128 MB VRAM)<br>Almacenamiento: 7 GB",
        downloads: 12,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Excelente Juego!", "Gráficos decentes increíbles", "el mejor resident evil viejo"],
        links: {
            direct: "https://gofile.io/d/x9dhme",
            mediafire: "https://gofile.io/d/x9dhme"
        },
        imagen: "Images/Resi4-gc-cover.jpg",
        password: "123"
    },
    {
        id: 2,
        nombre: "Dead Island",
        tipo: "juego",
        descripcion: "Supervivencia en una isla infestada de zombis. Combate cuerpo a cuerpo brutal.",
        requisitos: "SO: Windows 7 / Vista / XP<br>Procesador: Core2Duo 2.66 GHz<br>Memoria: 1 GB RAM<br>Gráficos: GeForce 8600 GT / Radeon HD 2600XT (256 MB VRAM)<br>Almacenamiento: 7 GB",
        downloads: 8740,
        rating: "⭐⭐⭐☆☆",
        comments: ["Divertido pero bugueado", "Me encanta el combate", "Recomendado para fans de left 4 dead 2"],
        links: {
            direct: "https://gofile.io/d/78ptPe",
            mediafire: "https://gofile.io/d/78ptPe"
        },
        imagen: "Images/Dead_island_PC_packshot.png",
        password: "123"
    },
    {
        id: 3,
        nombre: "Postal 2",
        tipo: "juego",
        descripcion: "Juego de disparos en primera persona satírico y violento con mundo abierto y misiones absurdas.",
        requisitos: "SO: Windows XP / Vista / 7 / 8 / 10<br>Procesador: Pentium III o Athlon a 1.2 GHz<br>Memoria: 384 MB RAM<br>Gráficos: DirectX 8.1 compatible con al menos 64 MB<br>Almacenamiento: 4 GB",
        downloads: 3200,
        rating: "⭐⭐⭐✰☆",
        comments: [
            "Juegazo xdd lo jugaba de niño",
            "Obra maestra xd"
        ],
        links: {
            direct: "https://gofile.io/d/avMKZl",
            mediafire: "https://gofile.io/d/avMKZl"
        },
        imagen: "Images/Postal_2_cover.png",
        password: "123"
    },
    {
        id: 4,
        nombre: "Left 4 Dead 2",
        tipo: "juego",
        descripcion: "Juego cooperativo de disparos en primera persona contra hordas de zombis con acción rápida y teamwork.",
        requisitos: "SO: Windows XP / Vista / 7<br>Procesador: Intel Core 2 Duo 2.4 GHz<br>Memoria: 2 GB RAM<br>Gráficos: NVIDIA GeForce 7600 / ATI Radeon X800<br>Almacenamiento: 13 GB libre",
        downloads: 12500,
        rating: "⭐⭐⭐⭐⭐",
        comments: [
            "Juegazo del ciber",
            "Mejor juego de zombies"
        ],
        links: {
            direct: "https://gofile.io/d/Js6Zsk",
            mediafire: "https://gofile.io/d/Js6Zsk"
        },
        imagen: "Images/Left4Dead2.jpg",
        password: "123"
    },
    {
        id: 5,
        nombre: "Call of Duty: Black Ops 1",
        tipo: "juego",
        descripcion: "Un shooter en primera persona ambientado en la Guerra Fría, lleno de acción, espionaje y misiones secretas.",
        requisitos: "SO: Windows XP/Vista/7<br>Procesador: Intel Core2 Duo E6600 / AMD Phenom X3 8750<br>RAM: 2 GB<br>Gráficos: NVIDIA GeForce 8600GT / ATI Radeon X1950Pro<br>Almacenamiento: 12 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Divertido Pero con mods mas", "Me encanta el combate", "Recomendado para fans de left 4 dead 2"],
        links: {
            direct: "https://gofile.io/d/Qax9uu",
            mediafire: "https://gofile.io/d/Qax9uu"
        },
        imagen: "Images/CoD_Black_Ops_cover.png",
        password: "123"
    },
    {
        id: 6,
        nombre: "Red Dead Redemption 1",
        tipo: "juego",
        descripcion: "Un exforajido obligado por el gobierno a cazar a su antigua banda para recuperar a su familia en el viejo oeste de 1911.",
        requisitos: "SO: Windows 10 64‑bit<br>Procesador: Intel Core i5‑4670 / AMD FX‑9590<br>Memoria: 8 GB RAM<br>Gráficos: NVIDIA GeForce GTX 960 / AMD Radeon R7 360<br>Almacenamiento: 12 GB<br>DirectX: 12<br>SSD recomendado",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Divertido", "Me encanta Los caballos", "Recomendado para fans de vaqueros"],
        links: {
            direct: "https://gofile.io/d/c2B4Cd",
            mediafire: "https://gofile.io/d/c2B4Cd"
        },
        imagen: "Images/Red_Dead_Redemption.jpg",
        password: "123"
    },
    {
        id: 7,
        nombre: "Payday 2",
        tipo: "juego",
        descripcion: "Un grupo de criminales que realiza asaltos, robos y misiones cooperativas en primera persona, donde el sigilo o la acción afectan el resultado.",
        requisitos: "SO: Windows 7<br>Procesador: 2 GHz Dual Core<br>Memoria: 4 GB RAM<br>Gráficos: NVIDIA GeForce 8800 / ATI Radeon HD 2600 (512 MB VRAM)<br>Almacenamiento: 31 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Juegazo", "XD"],
        links: {
            direct: "https://www.mediafire.com/file/y7z5pibt4j1ol9q/PayDay.2.v1.143.246-Repack.iso.torrent/file",
            mediafire: "https://www.mediafire.com/file/y7z5pibt4j1ol9q/PayDay.2.v1.143.246-Repack.iso.torrent/file"
        },
        imagen: "Images/Payday2cover.jpg",
        password: "contraseña123"
    },
    {
        id: 8,
        nombre: "Battlefield 2",
        tipo: "juego",
        descripcion: "Juego de disparos en primera persona con combates a gran escala, vehículos y mapas grandes ambientado en una guerra ficticia moderna.",
        requisitos: "SO: Windows 2000/XP<br>Procesador: 1.5 GHz P4 o equivalente<br>Memoria: 512 MB RAM<br>Gráficos: 100% DirectX 9.0c compatible con 128 MB VRAM (NVIDIA GeForce FX 5700 o ATI Radeon 9500)<br>Almacenamiento: 4.5 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐☆",
        comments: ["Clásico de los shooters", "Épicas batallas con vehículos"],
        links: {
            direct: "https://gofile.io/d/DDlRTY",
            mediafire: "https://gofile.io/d/DDlRTY"
        },
        imagen: "Images/51XE9qx04ML._UF1000,1000_QL80_.jpg",
        password: "123"
    },
    {
        id: 9,
        nombre: "God of War (2018)",
        tipo: "juego",
        descripcion: "Kratos y su hijo Atreus emprenden un viaje en busca de la respuesta de la esposa de Kratos, en una mitología nórdica brutal y emocional.",
        requisitos: "SO: Windows 10 64-bit<br>Procesador: Intel i5-2500K o AMD FX-6300<br>Memoria: 8 GB RAM<br>Gráficos: NVIDIA GTX 960 4GB o AMD R9 290 4GB<br>Almacenamiento: 70 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Obra maestra del storytelling", "Combate brutal y emocional"],
        links: {
            direct: "https://gofile.io/d/bYr0O4",
            mediafire: "https://gofile.io/d/bYr0O4"
        },
        imagen: "Images/God_of_War_4_cover.jpg",
        password: "123"
    },
    {
        id: 10,
        nombre: "God of War: Ragnarök",
        tipo: "juego",
        descripcion: "Kratos y Atreus se aventuran en Niflheim en busca de respuestas mientras se preparan para la profetizada batalla del Ragnarök.",
        requisitos: "SO: Windows 10 64-bit<br>Procesador: Intel i5-6600K o AMD Ryzen 5 2600X<br>Memoria: 16 GB RAM<br>Gráficos: NVIDIA GTX 1060 6GB o AMD RX 570 4GB<br>Almacenamiento: 120 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["La secuela épica", "Gráficos impresionantes"],
        links: {
            direct: "https://gofile.io/d/bYr0O4",
            mediafire: "https://gofile.io/d/bYr0O4"
        },
        imagen: "Images/God_of_War_Ragnarök_cover.jpg",
        password: "123"
    },
    {
        id: 11,
        nombre: "Peak",
        tipo: "juego",
        descripcion: "Un trepador experimentado se encuentra atrapado en una montaña nevada y debe encontrar la forma de sobrevivir y descender.",
        requisitos: "SO: Windows 7 64-bit<br>Procesador: Intel i5-4430 o AMD FX-6300<br>Memoria: 8 GB RAM<br>Gráficos: NVIDIA GTX 660 2GB o AMD Radeon HD 7850 2GB<br>Almacenamiento: 30 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐☆",
        comments: ["Intenso y realista", "Una experiencia de supervivencia única"],
        links: {
            direct: "https://gofile.io/d/2uRoh0",
            mediafire: "https://gofile.io/d/2uRoh0"
        },
        imagen: "Images/images.jpg",
        password: "123"
    },
    {
        id: 12,
        nombre: "Sons of the Forest",
        tipo: "juego",
        descripcion: "Un joven llega a una isla remota en busca de un multimillonario desaparecido, pero descubre que no está solo en esta experiencia de supervivencia aterradora.",
        requisitos: "SO: Windows 10 64-bit<br>Procesador: Intel i5-8400 o AMD Ryzen 5 2600<br>Memoria: 16 GB RAM<br>Gráficos: NVIDIA GTX 1060 6GB o AMD RX 5700<br>Almacenamiento: 30 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐☆",
        comments: ["Terror psicológico y supervivencia", "Muy prometedor"],
        links: {
            direct: "https://www.mediafire.com/file/0vci1qnuuw6ms0q/Sons+Of+The+Forest+Opti.7z.torrent/file",
            mediafire: "https://www.mediafire.com/file/0vci1qnuuw6ms0q/Sons+Of+The+Forest+Opti.7z.torrent/file"
        },
        imagen: "Images/Sons_of_the_Forest.jpg",
        password: "123"
    },

    // ====== NUEVOS JUEGOS AÑADIDOS ======

    {
        id: 13,
        nombre: "Deltarune",
        tipo: "juego",
        descripcion: "Secuela espiritual de Undertale. Un nuevo viaje lleno de personajes memorables, combate por turnos y decisiones morales.",
        requisitos: "SO: Windows 7 o superior<br>Procesador: 1.6 GHz Dual Core<br>Memoria: 2 GB RAM<br>Gráficos: Tarjeta 3D compatible con DirectX 9<br>Almacenamiento: 1 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Hermoso y emotivo", "Perfecto para fans de Undertale"],
        links: {
            direct: "https://www.mediafire.com/file/m54hdi7s9uaoinj/DELTARUNE.zip.torrent/file",
            mediafire: "https://www.mediafire.com/file/m54hdi7s9uaoinj/DELTARUNE.zip.torrent/file"
        },
        imagen: "Images/0x1900-000000-80-0-0.jpg",
        password: "deltarune"
    },
    {
        id: 14,
        nombre: "LEGO Marvel Super Heroes",
        tipo: "juego",
        descripcion: "Aventura de acción y comedia con tus héroes y villanos favoritos del Universo Marvel en versión LEGO.",
        requisitos: "SO: Windows 7 / 8 / 10<br>Procesador: Intel Core 2 Quad Q8400 / AMD Phenom II X4 945<br>Memoria: 4 GB RAM<br>Gráficos: NVIDIA GeForce GT 630 / AMD Radeon HD 6570 (1 GB VRAM)<br>Almacenamiento: 15 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐☆",
        comments: ["Divertido para toda la familia", "Lleno de referencias"],
        links: {
            direct: "https://www.mediafire.com/file/bzh8jle3p3i7eil/LEGO-MARVEL-Super-Heroes-SteamRIP.com.rar.torrent/file",
            mediafire: "https://www.mediafire.com/file/bzh8jle3p3i7eil/LEGO-MARVEL-Super-Heroes-SteamRIP.com.rar.torrent/file"
        },
        imagen: "Images/7YrRqN2wgRzpzX4K5RLUEecDyu53mz8U.jpg",
        password: "123"
    },
    {
        id: 15,
        nombre: "Call of Duty: Black Ops 2",
        tipo: "juego",
        descripcion: "Shooter futurista con campañas ramificadas y multijugador intenso, ambientado entre 1986 y 2025.",
        requisitos: "SO: Windows 7 / 8 / 10 64-bit<br>Procesador: Intel Core i3-530 / AMD Phenom II X4 810<br>Memoria: 6 GB RAM<br>Gráficos: NVIDIA GeForce GTX 470 / AMD Radeon HD 6970 (1 GB VRAM)<br>Almacenamiento: 25 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Uno de los mejores CoD", "Campaña con múltiples finales"],
        links: {
            direct: "https://www.mediafire.com/file/cwdumqbqjz3j3nb/Call+of+Duty+-+Black+Ops+2.rar.torrent/file",
            mediafire: "https://www.mediafire.com/file/cwdumqbqjz3j3nb/Call+of+Duty+-+Black+Ops+2.rar.torrent/file"
        },
        imagen: "Images/BlackOPS2.jpg",
        password: "123"
    },
    {
    id: 16,  // ← Cambia al siguiente número disponible
    nombre: "The Quarry",
    tipo: "juego",
    descripcion: "Aventura interactiva de terror donde nueve adolescentes deben sobrevivir una noche en un campamento lleno de misterios y criaturas letales.",
    requisitos: "SO: Windows 10 64-bit<br>Procesador: Intel Core i5-3570 / AMD FX-8350<br>RAM: 8 GB<br>Gráficos: NVIDIA GTX 780 / AMD Radeon RX 470<br>Almacenamiento: 50 GB",
    downloads: 0,  // Número de descargas (puedes dejarlo en 0)
    rating: "⭐⭐⭐⭐☆",  // De 1 a 5 estrellas (usa ⭐)
    comments: [
        "Juego muy bueno",
        "Se traba un poco"
    ],
    links: {
        direct: "https://www.mediafire.com/file/84w2ozjtilvi6s6/The-Quarry-SteamRIP.com.torrent/file",
        mediafire: "https://www.mediafire.com/file/84w2ozjtilvi6s6/The-Quarry-SteamRIP.com.torrent/file"
    },
    imagen: "The_Quarry_cover_art.png",  // ← Debe estar en la carpeta Images/
    password: "123"  // Contraseña del .zip (si no tiene, pon "123" o "ninguna")
  },
];
