// data.js
const recursos = [
    {
        id: 1,
        nombre: "Residaent Evil 4",
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
    id: 16,
    nombre: "The Quarry",
    tipo: "juego",
    descripcion: "Aventura interactiva de terror donde nueve adolescentes deben sobrevivir una noche en un campamento lleno de misterios y criaturas letales.",
    requisitos: "SO: Windows 10 64-bit<br>Procesador: Intel Core i5-3570 / AMD FX-8350<br>RAM: 8 GB<br>Gráficos: NVIDIA GTX 780 / AMD Radeon RX 470<br>Almacenamiento: 50 GB",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Juego muy bueno",
        "Se traba un poco"
    ],
    links: {
        direct: "https://www.mediafire.com/file/84w2ozjtilvi6s6/The-Quarry-SteamRIP.com.torrent/file",
        mediafire: "https://www.mediafire.com/file/84w2ozjtilvi6s6/The-Quarry-SteamRIP.com.torrent/file"
    },
    imagen: "Images/The_Quarry_cover_art.png",
    password: "123"
  },
  {
    id: 17,
    nombre: "Bendy and the Ink Machine",
    tipo: "juego",
    descripcion: " Aventura de terror y puzles en primera persona donde exploras un viejo estudio de animación abandonado lleno de criaturas de tinta.",
    requisitos: "SO: Windows 7<br>Procesador: Intel Core 2 Duo E5200<br>RAM: 4 GB<br>Gráficos: GeForce 9800 GTX / AMD Radeon HD 5670<br>Almacenamiento: 2 GB",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Juego muy bueno",
        "Se traba un poco pero es mi pc xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file_premium/yfjx3eegg1d32xe/BendyandInkMaCH.torrent/file",
        mediafire: "https://www.mediafire.com/file_premium/yfjx3eegg1d32xe/BendyandInkMaCH.torrent/file"
    },
    imagen: "Images/7288998-bendy-and-the-ink-machine-playstation-4-front-cover.png",
    password: "123"
    },
    {
    id: 18,
    nombre: "Bendy and the Dark Revival",
    tipo: "juego",
    descripcion: "Secuela de terror en primera persona donde Audrey explora un retorcido estudio de animación plagado de criaturas de tinta, resolviendo puzles y luchando por escapar.",
    requisitos: "SO: Windows 10 64-bit<br>RAM: 8 GB<br>Gráficos: GeForce GTX 1030 / AMD RX 550 (2 GB VRAM)<br>DirectX: 11<br>Almacenamiento: 15 GB",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "no esta tan buena",
        "xd casi no da miedo"
    ],
    links: {
        direct: "https://www.mediafire.com/file/k8khnbn9zq3tnhx/togiiF42NnnFHAO.torrent/file",
        mediafire: "https://www.mediafire.com/file/k8khnbn9zq3tnhx/togiiF42NnnFHAO.torrent/file"
    },
    imagen: "Images/618lYWO7raL._UF894,1000_QL80_.jpg",
    password: "123"
    },
    {
    id: 19,
    nombre: "Call of Juarez: Gunslinger",
    tipo: "juego",
    descripcion: "Shooter en primera persona ambientado en el Salvaje Oeste, donde un cazarrecompensas narra sus hazañas mientras enfrentas duelos y tiroteos intensos.",
    requisitos: "SO: Windows XP/Vista/7<br>Procesador: Intel Core 2 Duo 2.0 GHz / AMD Athlon 64 X2 2.0 GHz<br>RAM: 2 GB<br>Gráficos: 256 MB DirectX 9.0c compatible (GeForce 8800 GT / Radeon HD 3870)<br>Almacenamiento: 4 GB",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Juego chido",
        "un clasico"
    ],
    links: {
        direct: "https://www.mediafire.com/file/jy6gzcnydlolmpa/Call-of-Juarez-Gunslinger-SteamRIP.com.rar.torrent/file",
        mediafire: "https://www.mediafire.com/file/jy6gzcnydlolmpa/Call-of-Juarez-Gunslinger-SteamRIP.com.rar.torrent/file"
    },
    imagen: "Images/call_of_juarez_gunslinger-2242897.jpg",
    password: "123"
   },
    {
    id: 20,
    nombre: "Far Cry 3",
    tipo: "juego",
    descripcion: "mundo abierto donde un turista debe sobrevivir en una isla tropical llena de piratas y peligros",
    requisitos: "<br>SO: Windows Vista SP2 / 7 / 8<br>Procesador: Intel Core 2 Duo E6700 2.6 GHz / AMD Phenom X3 8750 2.4 GHz<br>RAM: 4 GB<br>Gráficos: NVIDIA GeForce 8800 GT / ATI Radeon HD 3850<br>Almacenamiento: 15 GB",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Uno de los mejores far cry",
        "gracias"
    ],
    links: {
        direct: "https://www.mediafire.com/file/k2o4z2jheijin5q/Far+Cry+3+Optimized.torrent/file",
        mediafire: "https://www.mediafire.com/file/k2o4z2jheijin5q/Far+Cry+3+Optimized.torrent/file"
    },
    imagen: "Images/13147.jpg"
   },
    {
    id: 21,
    nombre: "Call of Duty: Modern Warfare 3",
    tipo: "juego",
    descripcion: "Shooter en primera persona con campañas intensas y multijugador competitivo.",
    requisitos: "SO Windows XP/Vista/7, Intel Core 2 Duo 2.66 GHz, 2 GB RAM, GeForce 8800 GT, 16 GB almacenamiento.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "juegenlo esta chido",
        "juegazo"
    ],
    links: {
        direct: "https://www.mediafire.com/file/ioxs8mh1bgafbxl/Call+OF+Duty+2+Modern+Warfare+Opti.torrent/file",
        mediafire: "https://www.mediafire.com/file/ioxs8mh1bgafbxl/Call+OF+Duty+2+Modern+Warfare+Opti.torrent/file"
    },
    imagen: "Images/Call_of_Duty_Modern_Warfare_2_(2009)_cover.png"
   },
    {
    id: 22,
    nombre: "Lego Batman 2 DC",
    tipo: "juego",
    descripcion: "Aventura con más personajes y mundo abierto donde Batman y Superman unen fuerzas contra villanos de DC",
    requisitos: "Windows XP/Vista/7, Intel Pentium 4 3.0 GHz, 1 GB RAM, GeForce 6600, 2 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "juegenlo Gente,goty",
        "juegazo de batman"
    ],
    links: {
        direct: "https://www.mediafire.com/file/n1juuplitqdaj57/LEGO-Batman-2-DC-SH-SteamRIP.com.torrent/file",
        mediafire: "https://www.mediafire.com/file/n1juuplitqdaj57/LEGO-Batman-2-DC-SH-SteamRIP.com.torrent/file"
    },
    imagen: "Images/batman_1200x1600-d388972fd0a20881901f3946cb1c97f9.png"
   },
    {
    id: 23,
    nombre: "Assassins Creed 2 ",
    tipo: "juego",
    descripcion: "Aventura y sigilo en el Renacimiento italiano siguiendo a Ezio Auditore en su búsqueda de venganza.",
    requisitos: "Windows XP/Vista, Intel Core 2 Duo 1.8 GHz, 1.5 GB RAM, GeForce 7900 GS, 8 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "el mejor de la saga",
        "siganme en tiktok xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/gt7cklm07ifvkfz/Assassins+Creed+Il+Deluxe+Edition.torrent/file",
        mediafire: "https://www.mediafire.com/file/gt7cklm07ifvkfz/Assassins+Creed+Il+Deluxe+Edition.torrent/file"
    },
    imagen: "Images/AC2_GameName_Store_Portrait_1200x1600_1200x1600-2c5e000213988c5dde375bb2602e9986.jpg"
   },
    {
    id: 24,
    nombre: "Jurassic World Evolution 2",
    tipo: "juego",
    descripcion: "Simulación y gestión de parques de dinosaurios con nuevas especies, mapas y comportamientos realistas.",
    requisitos: "Windows 10 64-bit, Intel i5-4590 / AMD FX-8370, 8 GB RAM, GeForce GTX 960 / Radeon R9 270X, 14 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "ta bueno",
        "siganme en tiktok xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/d8q331qkl5527mn/Jurassic+World+Evolution+2+v1.3.1.36069.torrent/file",
        mediafire: "https://www.mediafire.com/file/d8q331qkl5527mn/Jurassic+World+Evolution+2+v1.3.1.36069.torrent/file"
    },
    imagen: "Images/Jurassic_World_Evolution_box_art.jpg"
   },
    {
    id: 25,
    nombre: "Far Cry 5",
    tipo: "juego",
    descripcion: "Shooter en mundo abierto donde enfrentas a una secta fanática en el condado ficticio de Hope, Montana",
    requisitos: "Windows 7 SP1/8.1/10 64-bit, Intel Core i5-2400 / AMD FX-6300, 8 GB RAM, GeForce GTX 670 / Radeon R9 270, 40 GB espacio",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "pesa un huevo",
        "no me corre xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/lg6fpmp3f2uhuho/Far_Cry_5.torrent/file",
        mediafire: "https://www.mediafire.com/file/lg6fpmp3f2uhuho/Far_Cry_5.torrent/file"
    },
    imagen: "Images/FCZ_StorePortrait_1200x1600_1200x1600-a254f505d277fe3dc17beb12416bf11a.jpg"
    },
    {
    id: 26,
    nombre: "Fnaf Collection",
    tipo: "juego",
    descripcion: "todos los clásicos de terror de Scott Cawthon en un solo pack, desde el primer susto en la pizzería hasta el cierre de la saga clásica",
    requisitos: "Windows XP/Vista/7/8/10, Procesador 2 GHz Dual-Core, 2 GB RAM, Gráficos con 1 GB VRAM compatibles con DirectX 9.0, 2 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "joya del terror xd",
        "joyisima"
    ],
    links: {
        direct: "https://www.mediafire.com/file/sbws8mnvrtkjno0/Todos+Los+Fnaf+del+1+al+4.torrent/file",
        mediafire: "https://www.mediafire.com/file/sbws8mnvrtkjno0/Todos+Los+Fnaf+del+1+al+4.torrent/file"
    },
    imagen: "Images/fnaf 1 al 4.jpg"
    },
    {
    id: 27,
    nombre: "Resident Evil 7: Biohazard",
    tipo: "juego",
    descripcion: "Survival horror en primera persona donde Ethan Winters busca a su esposa en una terrorífica mansión en Luisiana.<br>",
    requisitos: "Windows 7/8/8.1/10 64-bit, Intel Core i5-4460 / AMD FX-6300, 8 GB RAM, GeForce GTX 760 / Radeon R7 260x, 24 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "joya del terror xd",
        "re pesado para mi compu"
    ],
    links: {
        direct: "https://www.mediafire.com/file/uqduzvrhkb01kth/Resident.Evil.7.Biohazard.v20220613-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/uqduzvrhkb01kth/Resident.Evil.7.Biohazard.v20220613-Repack.torrent/file"
    },
    imagen: "Images/Resident_Evil_7_cover_art.jpg"
   },
    {
    id: 28,
    nombre: "Far Cry Primal",
    tipo: "juego",
    descripcion: "Shooter y aventura en mundo abierto ambientado en la Edad de Piedra, donde cazas, sobrevives y domas bestias salvajes.",
    requisitos: "Windows 7/8.1/10 64-bit, Intel Core i3-550 / AMD Phenom II X4 955, 4 GB RAM, GeForce GTX 460 / Radeon HD 5770, 20 GB espacio.",
    downloads: 0,  // Número de descargas
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "se ve chido",
        "hola"
    ],
    links: {
        direct: "https://www.mediafire.com/file/2croqvw1tozk6oo/Far+Cry+Primal.torrent/file",
        mediafire: "https://www.mediafire.com/file/2croqvw1tozk6oo/Far+Cry+Primal.torrent/file"
    },
    imagen: "Images/FCP_UCS17665_Store_Portrait_1200x1600-1200x1600-1069539bdf73f4ca48f7f64027a6e921.jpg"
   },
    {
    id: 29,
    nombre: "Call of Duty 4 Modern Warfare",
    tipo: "juego",
    descripcion: "Shooter en primera persona que revolucionó el género con una intensa campaña moderna y multijugador competitivo.",
    requisitos: " Windows XP/Vista, Intel Pentium 4 2.4 GHz / AMD Athlon 64 2800+, 512 MB RAM (XP) o 768 MB (Vista), GeForce 6600 / Radeon 9800Pro, 8 GB espacio.",
    downloads: 0,  // Número de descargas
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "uno de los mejores modern warfare",
        "sigueme en tiktok ´porfa"
    ],
    links: {
        direct: "https://www.mediafire.com/file/frjg3dfom6flrfs/Call+of+Duty+4+Modern+Warfare.torrent/file",
        mediafire: "https://www.mediafire.com/file/frjg3dfom6flrfs/Call+of+Duty+4+Modern+Warfare.torrent/file"
    },
    imagen: "Images/CoD4_MWR_cover.jpg"
   },
    {
    id: 30,
    nombre: "Blur",
    tipo: "juego",
    descripcion: "Juego de carreras arcade con autos reales y power-ups que permiten atacar y defenderse durante las competencias",
    requisitos: "Windows XP/Vista/7, Intel Pentium 4 3.0 GHz / AMD Athlon 64 3000+, 1 GB RAM, GeForce 6600 / Radeon X1300, 8 GB espacio.",
    downloads: 0,  // Número de descargas
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "uno de los mejores juegos de caros",
        "gracias bro"
    ],
    links: {
        direct: "https://www.mediafire.com/file/1rp9829y6k2lngo/Blur+Game.torrent/file",
        mediafire: "https://www.mediafire.com/file/1rp9829y6k2lngo/Blur+Game.torrent/file"
    },
    imagen: "Images/Blur_(video_game).jpg"
   },
    {
    id: 31,
    nombre: "Forza Horizon 2",
    tipo: "juego",
    descripcion: "Juego de carreras en mundo abierto con autos reales y eventos dinámicos en paisajes de Europa",
    requisitos: "Windows 7/8/8.1/10 64-bit, Intel Core i3-2100 / AMD Phenom II X4 805, 4 GB RAM, GeForce GTX 650 / Radeon HD 7770, 20 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "uno de los mejores juegos de carros con el blur",
        "gracias bro"
    ],
    links: {
        direct: "https://www.mediafire.com/file/ta4afcsy66ux52t/Forza-Horizon-2.torrent/file",
        mediafire: "https://www.mediafire.com/file/ta4afcsy66ux52t/Forza-Horizon-2.torrent/file"
    },
    imagen: "Images/98ff6a8b9dbccb4c3067048eca92d6a3.jpg",
    advertencia: "Este juego es un port/repack del juego de Xbox 360. Puedes experimentar problemas o lags."
  },
  {
    id: 32,
    nombre: "Grand Theft Auto V",
    tipo: "juego",
    descripcion: "Mundo abierto de acción y crimen en Los Santos con historia, misiones, online y total libertad de exploración.",
    requisitos: "Windows 7/8/8.1/10 64-bit, Intel Core 2 Quad Q6600 2.4 GHz / AMD Phenom 9850, 4 GB RAM, GeForce 9800 GT / Radeon HD 4870, 72 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "uno de los mejores juegos de los gta",
        "buenisimo"
    ],
    links: {
        direct: "https://www.mediafire.com/file/muvrhvj9pabwqoz/JETEAV10_Opti_Fix_archive.torrent/file",
        mediafire: "https://www.mediafire.com/file/muvrhvj9pabwqoz/JETEAV10_Opti_Fix_archive.torrent/file"
    },
    imagen: "Images/actual_1364906194.jpg",
   },
    {
    id: 33,
    nombre: "Red Dead Redemption 2",
    tipo: "juego",
    descripcion: "Aventura de acción en mundo abierto ambientada en el Viejo Oeste, siguiendo a Arthur Morgan y la banda de Van der Linde.<br>",
    requisitos: "Windows 7/8/10 64-bit, Intel Core i5-2500K / AMD FX-6300, 8 GB RAM, GeForce GTX 770 / Radeon R9 280, 150 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "uno de los mejores juegos de la historia",
        "goddd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/xcppakw3qkgjse4/Red.Dead.Redemption.2.Ultimate.Edition.v1491.50-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/xcppakw3qkgjse4/Red.Dead.Redemption.2.Ultimate.Edition.v1491.50-Repack.torrent/file"
    },
    imagen: "Images/Red-Dead-Redemption-2-pc-free-download.png",
   },
    {
    id: 34,
    nombre: "Marvel’s Spider-Man 2",
    tipo: "juego",
    descripcion: "Action y aventuras del simbionte con Peter y Miles enfrentando a Venom y Kraven en un Nueva York alucinante.",
    requisitos: "Windows 10/11 (v1909+), Intel Core i3-8100 / Ryzen 3 3100, 16 GB RAM, GeForce GTX 1650 o Radeon RX 5500 XT, SSD 140 GB.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "god god",
        "buena bro gracias"
    ],
    links: {
        direct: "https://www.mediafire.com/file/tjr5ls0mfi5rdz8/Marvels.Spider-Man.2.Digital.Deluxe.Edition.v1.526.0.0-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/tjr5ls0mfi5rdz8/Marvels.Spider-Man.2.Digital.Deluxe.Edition.v1.526.0.0-Repack.torrent/file"
    },
    imagen: "Images/11459908.jpg",
   },
    {
    id: 35,
    nombre: "Cyberpunk 2077",
    tipo: "juego",
    descripcion: "RPG de mundo abierto ambientado en Night City, donde tomas el rol de V, un mercenario en busca de la inmortalidad",
    requisitos: "Windows 10 64-bit, Intel Core i7-6700 / AMD Ryzen 5 1600, 12 GB RAM, GeForce GTX 1060 6GB / Radeon RX 580 8GB, SSD 70 GB.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "god gracias",
        "buena bro"
    ],
    links: {
        direct: "https://www.mediafire.com/file/w1g6k6bvr0nkfww/Cyberpunk.2077.Ultimate.Edition.v.2.3-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/w1g6k6bvr0nkfww/Cyberpunk.2077.Ultimate.Edition.v.2.3-Repack.torrent/file"
    },
    imagen: "Images/Cyberpunk_2077_box_art.jpg",
  },
    {
    id: 36,
    nombre: "Naruto Shippuden: Ultimate Ninja Storm 4 – Road to Boruto",
    tipo: "juego",
    descripcion: "Juego de lucha que cierra la saga de Naruto con combates espectaculares, modo historia completo y la expansión con Boruto y la nueva generación.",
    requisitos: "Windows 7/8/10 64-bit, Intel Core i3-530 / AMD Phenom II X4 940, 4 GB RAM, GeForce GTX 460 / Radeon HD 6870, 40 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "buenisimo el naruto",
        "GRACIASSS"
    ],
    links: {
        direct: "https://www.mediafire.com/file/e435hrkl43l80px/NARUTO.SHIPPUDEN.Ultimate.Ninja.STORM.4.Road.to.Boruto.Next.Generations-CODEX.torrent/file",
        mediafire: "https://www.mediafire.com/file/e435hrkl43l80px/NARUTO.SHIPPUDEN.Ultimate.Ninja.STORM.4.Road.to.Boruto.Next.Generations-CODEX.torrent/file"
    },
    imagen: "Images/NUNS4RTB_Square_Temple.jpg",
},
{
    id: 37,
    nombre: "The Last of Us Part I",
    tipo: "juego",
    descripcion: "Aventura de acción y supervivencia donde Joel y Ellie luchan por sobrevivir en un mundo postapocalíptico devastado por un hongo letal.",
    requisitos: " Windows 10/11 64-bit, Intel Core i7-4770K / AMD Ryzen 5 1500X, 16 GB RAM, GeForce GTX 970 / Radeon RX 470, SSD 100 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "historia profunda",
        "yo tenia el de randrogames xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/gf7fsc71w3bn43b/The+Last+of+Us+-+Part+I.torrent/file",
        mediafire: "https://www.mediafire.com/file/gf7fsc71w3bn43b/The+Last+of+Us+-+Part+I.torrent/file"
    },
    imagen: "Images/The_Last_of_Us_Part_I_cover.jpg",
},
{
    id: 38,
    nombre: "The Last of Us Part II",
    tipo: "juego",
    descripcion: "Aventura de acción y supervivencia que sigue la historia de Ellie en un viaje brutal de venganza y redención en un mundo devastado por la infección.",
    requisitos: " Windows 10/11 64-bit, Intel Core i7-8700 / AMD Ryzen 7 3700X, 16 GB RAM, GeForce GTX 1070 / Radeon RX 5600 XT, SSD 100 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "no me corre",
        "no cierres la pagina porfa"
    ],
    links: {
        direct: "https://www.mediafire.com/file/txogd0dixohdphf/The_Last_of_Us_-_Part_II_Remastered.torrent/file",
        mediafire: "https://www.mediafire.com/file/txogd0dixohdphf/The_Last_of_Us_-_Part_II_Remastered.torrent/file"
    },
    imagen: "Images/images3.jpg",
},
{
    id: 39,
    nombre: "Forza Horizon 3",
    tipo: "juego",
    descripcion: "Juego de carreras en mundo abierto ambientado en Australia, con autos reales, eventos dinámicos y exploración libre de paisajes impresionantes",
    requisitos: "Windows 10 64-bit, Intel i3-4170 3.7 GHz / AMD FX-6300, 8 GB RAM, GeForce GTX 650 Ti / Radeon R7 250X, 30 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias",
        "no cierres la pagina porfa"
    ],
    links: {
        direct: "https://www.mediafire.com/file/4ykqujbbzhyosjx/Forza.Horizon3.torrent/file",
        mediafire: "https://www.mediafire.com/file/4ykqujbbzhyosjx/Forza.Horizon3.torrent/file"
    },
    imagen: "Images/Forza_horizon_3_cover_art.jpg",
},
    {
    id: 40,
    nombre: "Mafia: Definitive Edition",
    tipo: "juego",
    descripcion: "Remake del clásico de 2002 con gráficos modernos, narrativa cinematográfica y la historia de Tommy Angelo ascendiendo en la familia criminal de Lost Heaven.",
    requisitos: "Windows 10 64-bit, Intel Core-i5 2550K / AMD FX-8120, 6 GB RAM, GeForce GTX 660 / Radeon HD 7870, 50 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god",
        "no cierres la pagina porfa"
    ],
    links: {
        direct: "https://www.mediafire.com/file/9vdnt3wkqoc2q3l/Mafia+-+Definitive+Edition.torrent/file",
        mediafire: "https://www.mediafire.com/file/9vdnt3wkqoc2q3l/Mafia+-+Definitive+Edition.torrent/file"
    },
    imagen: "Images/AgWIv9NHpkWc1vXdNYuSGI8p.jpg",
},

{
    id: 41,
    nombre: "Mafia II: Definitive Edition",
    tipo: "juego",
    descripcion: "Remaster del clásico de 2010 con mejoras gráficas, historia profunda y la vida de Vito Scaletta dentro del crimen organizado en Empire Bay.",
    requisitos: "Windows 10 64-bit, Intel Core i5-2500K / AMD FX-8120, 6 GB RAM, GeForce GTX 660 / Radeon HD 7870, 50 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god",
        "god,siempre nos haces casooo (:"
    ],
    links: {
        direct: "https://www.mediafire.com/file/vcg4j1sixdhg63s/Mafia+II+-+Definitive+Edition.torrent/file",
        mediafire: "https://www.mediafire.com/file/vcg4j1sixdhg63s/Mafia+II+-+Definitive+Edition.torrent/file"
    },
    imagen: "Images/Diesel_productv2_mafia-ii-definitive-edition_home_EGS_MafiaIIDefinitiveEdition_RedKiteGames_S2-1200x1600-4cbc94d86b3b82ef8a532fa96a2f28145dae0713-1200x1600-f2cdf5d42079674921f4a36e0254e088.jpg",
},
{
    id: 42,
    nombre: "Uncharted: Legacy of Thieves Collection",
    tipo: "juego",
    descripcion: "Colección remasterizada que incluye Uncharted 4 y The Lost Legacy con gráficos mejorados, cinemáticas épicas y aventuras de Nathan Drake y Chloe Frazer.",
    requisitos: "Windows 10 64-bit, Intel Core i7-4770 / AMD Ryzen 5 1500X, 16 GB RAM, GeForce GTX 1060 / Radeon RX 580, 150 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god",
        "no cierres la pagina porfa"
    ],
    links: {
        direct: "magnet:?xt=urn:btih:373d33a2a5e45ea5176e80199f31338074e82eda&dn=UNCHARTED_Legacy_of_Thieves_Collection_v1.4.21058-Razor1911&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://movies.zsw.ca:6969/announce&tr=udp://tracker-udp.gbitt.info:80/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=http://tracker.gbitt.info:80/announce&tr=http://tracker.ccp.ovh:6969/announce&tr=https://tracker.gbitt.info:443/announce&tr=udp://tracker.dler.com:6969/announce&tr=udp://tracker.ccp.ovh:6969/announce",
        mediafire: "magnet:?xt=urn:btih:373d33a2a5e45ea5176e80199f31338074e82eda&dn=UNCHARTED_Legacy_of_Thieves_Collection_v1.4.21058-Razor1911&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://movies.zsw.ca:6969/announce&tr=udp://tracker-udp.gbitt.info:80/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=http://tracker.gbitt.info:80/announce&tr=http://tracker.ccp.ovh:6969/announce&tr=https://tracker.gbitt.info:443/announce&tr=udp://tracker.dler.com:6969/announce&tr=udp://tracker.ccp.ovh:6969/announce"
    },
    imagen: "Images/Final+Square.webp",
},
{
    id: 43,
    nombre: "Age of Empires",
    tipo: "juego",
    descripcion: "Remaster del clásico de estrategia en tiempo real, con gráficos en 4K, jugabilidad mejorada y todo el contenido de la expansión Rise of Rome",
    requisitos: "Windows 10 64-bit, Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 2.66 GHz, 4 GB RAM, Intel HD 4000 / GeForce 8800 GT / Radeon HD 2900 XT, 20 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god",
        "no cierres la pagina porfa xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/ojzpi3r5envjxkc/Age+of+Empires+-+Definitive+Edition.torrent/file",
        mediafire: "https://www.mediafire.com/file/ojzpi3r5envjxkc/Age+of+Empires+-+Definitive+Edition.torrent/file"
    },
    imagen: "Images/59b04543a434608db49d93cc9332e45f.jpg",
},
{
    id: 44,
    nombre: " Age of Empires II",
    tipo: "juego",
    descripcion: "Versión remasterizada del clásico de estrategia medieval con gráficos en 4K, nuevas campañas, civilizaciones y mejoras en la jugabilidad online",
    requisitos: "Windows 10 64-bit, Intel Core 2 Duo 2.4 GHz / AMD Athlon X2 2.66 GHz, 4 GB RAM, Intel HD 4000 / GeForce 8800 GT / Radeon HD 2900 XT, 30 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god",
        "no cierres la pagina porfa xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/kx5uaic98i9og04/Age+of+Empires+II+-+Definitive+Edition.torrent/file",
        mediafire: "https://www.mediafire.com/file/kx5uaic98i9og04/Age+of+Empires+II+-+Definitive+Edition.torrent/file"
    },
    imagen: "Images/Age_of_Empires_II_Definitive_Edition_cover_art.jpeg",
},
  {
    id: 45,
    nombre: "Resident evil 3 remake",
    tipo: "juego",
    descripcion: "Remake del clásico survival horror donde Jill Valentine debe escapar de Raccoon City mientras enfrenta al implacable Nemesis, con gráficos modernos y jugabilidad mejorada.",
    requisitos: "Windows 10 64-bit, Intel Core i5-4460 / AMD FX-6300, 8 GB RAM, GeForce GTX 760 / Radeon R7 260X, 25 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god",
        "no cierres la pagina porfa xd"
    ],
    links: {
        direct: "https://www.mediafire.com/file/qtxh1llrqunk4v7/Resident.Evil.3.Build.8856549-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/qtxh1llrqunk4v7/Resident.Evil.3.Build.8856549-Repack.torrent/file"
    },
    imagen: "Images/Resident_Evil_3.jpg",
},
 {
    id: 46,
    nombre: "Mortal Kombat 1",
    tipo: "juego",
    descripcion: " Reboot de la saga de lucha que presenta un universo renovado por el Dios del Fuego, Liu Kang, con un sistema de combate actualizado, nuevos personajes y el regreso de los fatalities más sangrientos",
    requisitos: "Windows 10 64-bit, Intel Core i5-6600 / AMD Ryzen 3 3100 o Ryzen 5 2600, 8 GB RAM, Nvidia GeForce GTX 980 / AMD Radeon RX 470 / Intel Arc A750, DirectX 12, 100 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/6c8ls3uwt0ttop2/Mortal+Kombat+1.torrent/file",
        mediafire: "https://www.mediafire.com/file/6c8ls3uwt0ttop2/Mortal+Kombat+1.torrent/file"
    },
    imagen: "Images/Mortal_Kombat_1_key_art.jpeg",
},
{
    id: 47,
    nombre: "Left 4 Dead",
    tipo: "juego",
    descripcion: "Shooter cooperativo en primera persona donde cuatro sobrevivientes deben luchar contra hordas de zombis a lo largo de distintos escenarios, con énfasis en la cooperación y la estrategia.",
    requisitos: " Windows XP/Vista/7, Intel Pentium 4 3.0 GHz / AMD Athlon 64 3000+, 1 GB RAM, GeForce 6600 / Radeon X1300, 7 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/kinx20eyljwxn0e/Left.4.Dead.v1.0.4.5-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/kinx20eyljwxn0e/Left.4.Dead.v1.0.4.5-Repack.torrent/file"
    },
    imagen: "Images/Left4Dead_Windows_cover.jpg",
},
    {
    id: 48,
    nombre: "Rise of the Tomb Raider",
    tipo: "juego",
    descripcion: "Aventura de acción en tercera persona donde Lara Croft explora tumbas, resuelve puzles y enfrenta enemigos mientras busca el secreto de la inmortalidad.",
    requisitos: " Windows XP/Vista/7, Intel Pentium 4 3.0 GHz / AMD Athlon 64 3000+, 1 GB RAM, GeForce 6600 / Radeon X1300, 7 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/g4xrwmhdjfe2w6j/Rise.of.the.Tomb.Raider.20.Year.Celebration.v.1.0.1027.0-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/g4xrwmhdjfe2w6j/Rise.of.the.Tomb.Raider.20.Year.Celebration.v.1.0.1027.0-Repack.torrent/file"
    },
    imagen: "Images/Rise_of_the_Tomb_Raider.jpg",
},
    {
    id: 49,
    nombre: "FIFA 23",
    tipo: "juego",
    descripcion: "Simulador de fútbol que ofrece partidos realistas, modos de juego variados como Ultimate Team y Carrera, y gráficos mejorados para una experiencia más inmersiva",
    requisitos: "Windows 10 64-bit, Intel Core i3-6100 / AMD Ryzen 3 1200, 8 GB RAM, GeForce GTX 660 / Radeon HD 7850, 50 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "magnet:?xt=urn:btih:9af25aed2bb2d5c073e35fe938810c0b2097239c&dn=FIFA.23.Ultimate.Edition.v1.0.82.43747.zip&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://movies.zsw.ca:6969/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker-udp.gbitt.info:80/announce&tr=http://tracker.gbitt.info:80/announce&tr=https://tracker.gbitt.info:443/announce&tr=http://tracker.ccp.ovh:6969/announce&tr=udp://tracker.ccp.ovh:6969/announce&tr=udp://tracker.dler.com:6969/announce",
        mediafire: "magnet:?xt=urn:btih:9af25aed2bb2d5c073e35fe938810c0b2097239c&dn=FIFA.23.Ultimate.Edition.v1.0.82.43747.zip&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://movies.zsw.ca:6969/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker-udp.gbitt.info:80/announce&tr=http://tracker.gbitt.info:80/announce&tr=https://tracker.gbitt.info:443/announce&tr=http://tracker.ccp.ovh:6969/announce&tr=udp://tracker.ccp.ovh:6969/announce&tr=udp://tracker.dler.com:6969/announce"
    },
    imagen: "Images/fifa23.jpg",
},
    {
    id: 49,
    nombre: "Sleeping Dogs",
    tipo: "juego",
    descripcion: "Juego de acción y mundo abierto ambientado en Hong Kong, donde el jugador controla a Wei Shen, un policía encubierto que debe infiltrarse en el crimen organizado",
    requisitos: "Windows 7/8/10 64-bit, Intel Core 2 Duo E8400 / AMD Phenom II X4 940, 2 GB RAM, GeForce 8800 / Radeon HD 3870, 15 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/jmmapj0k3xql7km/Sleeping.Dogs.Definitive.Edition-GOG.torrent/file",
        mediafire: "https://www.mediafire.com/file/jmmapj0k3xql7km/Sleeping.Dogs.Definitive.Edition-GOG.torrent/file"
    },
    imagen: "Images/2327953-sleeping-dogs-definitive-edition-xbox-one-front-cover.png",
},
    {
    id: 50,
    nombre: "Grand Theft Auto IV",
    tipo: "juego",
    descripcion: "Aventura de mundo abierto en tercera persona donde los jugadores controlan a Niko Bellic, un inmigrante que llega a Liberty City en busca del sueño americano, enfrentándose a mafias, cumpliendo misiones y explorando la ciudad libremente",
    requisitos: "Windows XP/Vista/7, Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 64 2.4 GHz, 1.5 GB RAM, GeForce 7900 / ATI X1900, 16 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/bvdymdwqtlm53bb/Grand.Theft.Auto.IV.The.Complete.Edition.v1.2.0.59.torrent/file",
        mediafire: "https://www.mediafire.com/file/bvdymdwqtlm53bb/Grand.Theft.Auto.IV.The.Complete.Edition.v1.2.0.59.torrent/file"
    },
    imagen: "Images/6530b2b4bf996c001cd7a829.jpg",
},
    {
    id: 51,
    nombre: "Lies of P",
    tipo: "juego",
    descripcion: "Juego de acción tipo soulslike en tercera persona donde los jugadores controlan a P, una marioneta que busca a su creador, Geppetto, en la ciudad de Krat, enfrentándose a enemigos mecánicos y tomando decisiones morales que afectan la narrativa.",
    requisitos: "Windows 10/11 64 bits, AMD Ryzen 3 1200 / Intel Core i3-6300, 8 GB RAM, AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 960 4GB, DirectX 12, 50 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file_premium/686evf5afgw211j/Lies.of.P.Deluxe.Edition.v1.10.0.0-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file_premium/686evf5afgw211j/Lies.of.P.Deluxe.Edition.v1.10.0.0-Repack.torrent/file"
    },
    imagen: "Images/lies_of_p.jpg",
},
    {
    id: 52,
    nombre: "Resident Evil 4 Remake",
    tipo: "juego",
    descripcion: "Juego de acción y survival horror en tercera persona donde los jugadores controlan a Leon S. Kennedy, un agente del gobierno de EE. UU., que debe rescatar a Ashley Graham, la hija del presidente, de un culto misterioso en una aldea rural de España. El juego presenta una historia renovada, gráficos mejorados y mecánicas de juego modernizadas, siguiendo el estilo de los remakes anteriores de la saga..",
    requisitos: "Windows 10 (64 bits), AMD Ryzen 3 1200 / Intel Core i5-7500, 8 GB RAM, AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 1050 Ti 4GB, DirectX 12, 50 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/o74oypjcwdcx1r6/Resident+Evil+4+2023+Remake+Deluxe+Edition+GamesFullZ.torrent/file",
        mediafire: "https://www.mediafire.com/file/o74oypjcwdcx1r6/Resident+Evil+4+2023+Remake+Deluxe+Edition+GamesFullZ.torrent/file"
    },
    imagen: "Images/250px-Resident_Evil_4_remake_cov.jpg",
},
    {
    id: 53,
    nombre: "Marvel's Spider-Man Remastered",
    tipo: "juego",
    descripcion: "Juego de acción y aventura en tercera persona donde los jugadores controlan a Peter Parker, un joven de 23 años que combina su vida como estudiante y fotógrafo con su identidad secreta como Spider-Man, enfrentándose a villanos icónicos y protegiendo Nueva York.",
    requisitos: "(64 bits), Intel Core i3-4160 / AMD Ryzen 3 1300X, 8 GB RAM, NVIDIA GTX 950 / AMD Radeon R9 290X, DirectX 12, 75 GB espacio en disco.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file/jertc0aeb0021tz/Marvel's+Spider-Man+Remastered+GamesFullZ.torrent/file",
        mediafire: "https://www.mediafire.com/file/jertc0aeb0021tz/Marvel's+Spider-Man+Remastered+GamesFullZ.torrent/file"
    },
    imagen: "Images/EGS_MarvelsSpiderManRemastered_I.jpg",
},
    {
    id: 54,
    nombre: "Call of Duty: Modern Warfare II",
    tipo: "juego",
    descripcion: "Shooter en primera persona que continúa la saga con una historia intensa, operaciones tácticas globales y el regreso de la Task Force 141, incluyendo a Ghost, Soap y Price.",
    requisitos: " Windows 10 64-bit, Intel Core i5-3570 / AMD Ryzen 5 1400, 8 GB RAM, GeForce GTX 960 / Radeon RX 470, 125 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/z986psfnet3oql0/Call.of.Duty.Modern.Warfare.II.v.9.7-Repack.torrent/file",
        mediafire: "https://www.mediafire.com/file/z986psfnet3oql0/Call.of.Duty.Modern.Warfare.II.v.9.7-Repack.torrent/file"
    },
    imagen: "Images/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg",
},
    {
    id: 55,
    nombre: "Grounded",
    tipo: "juego",
    descripcion: "Juego de supervivencia y aventura en primera persona donde los jugadores son reducidos al tamaño de una hormiga en el patio trasero, debiendo explorar, construir y sobrevivir luchando contra insectos gigantes y cooperando con hasta otros tres jugadores.",
    requisitos: " Windows 10 64-bit, Intel Core i3-3225, 4 GB RAM, Nvidia GTX 650 Ti, 8 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/szg8dzv9c7drvyp/Grounded+GmaesFullZ.torrent/file",
        mediafire: "https://www.mediafire.com/file/szg8dzv9c7drvyp/Grounded+GmaesFullZ.torrent/file"
    },
    imagen: "Images/grounded.jpg",
},
    {
    id: 56,
    nombre: "Grounded 2",
    tipo: "juego",
    descripcion: "Juego de supervivencia cooperativa en primera o tercera persona donde los jugadores vuelven a reducirse al tamaño de una hormiga en el parque Brookhollow de 1992, con un mundo mucho más grande que el del pequeño jardín del juego original; incluye monturas insectoides (Buggies), nuevas mecánicas de combate como esquivar, herramientas omnifunción (Omni-Tool), biomas diversos, narrativa expandida y desarrollo impulsado por la comunidad en su fase de acceso anticipado.",
    requisitos: "Windows 10/11, Intel i5-8400 / AMD Ryzen 5 2600, 16 GB RAM, GTX 1070 / RX 5700, 40 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/ppc2ojqt22uy8q7/Grounded.2.GmesFullZ.torrent/file",
        mediafire: "https://www.mediafire.com/file/ppc2ojqt22uy8q7/Grounded.2.GmesFullZ.torrent/file"
    },
    imagen: "Images/250px-Grounded_2_cover.jpg",
},
    {
    id: 57,
    nombre: "Black Myth: Wukong",
    tipo: "juego",
    descripcion: "Aventura de acción y rol en tercera persona con elementos soulslike, donde controlas al Destined One (una reencarnación del Rey Mono) inmerso en una épica travesía mitológica basada en Viaje al Oeste, destacando por su combate dinámico con bastón extensible, narración fascinante y escenarios visualmente impresionantes.",
    requisitos: "Windows 10/11 64 bits, Intel Core i5-8400 / AMD Ryzen 5 1600, 16 GB RAM, NVIDIA GeForce GTX 1060 o AMD Radeon RX 580, 130 GB espacio (HDD o SSD",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/wshcc1helcq73yq/Black.Myth.Wukong-FULL.UNLOCKED-GamesFullZ.torrent/file",
        mediafire: "https://www.mediafire.com/file/wshcc1helcq73yq/Black.Myth.Wukong-FULL.UNLOCKED-GamesFullZ.torrent/file"
    },
    imagen: "Images/black-myth-wukong-jjjfw.jpg",
},
    {
    id: 58,
    nombre: "he Walking Dead: Survival Instinct",
    tipo: "juego",
    descripcion: "Shooter en primera persona ambientado en la época inicial del apocalipsis zombi, donde encarnas a Daryl Dixon (con la voz de Norman Reedus) mientras recorres la campiña de Georgia junto a tu hermano Merle, gestionando recursos como combustible, armas y supervivientes en un mundo hostil.",
    requisitos: "Windows XP SP3/Vista/7/8, Intel Core 2 Duo E4400 @ 2.00 GHz / AMD Athlon 64 X2 4000+ @ 2.0 GHz, 2 GB RAM, AMD Radeon HD 4670 512 MB / NVIDIA GeForce 8800 GT 512 MB, DirectX 9.0c, 9 GB espacio libre.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/iq2j6agbwuaetuw/TWD+Survival+Instinct+GamesFullZ.torrent/file",
        mediafire: "https://www.mediafire.com/file/iq2j6agbwuaetuw/TWD+Survival+Instinct+GamesFullZ.torrent/file"
    },
    imagen: "Images/twds.jpg",
},
    {
    id: 59,
    nombre: "BioShock 2",
    tipo: "juego",
    descripcion: "Shooter en primera persona con toques de rol y survival horror donde controlas a un Big Daddy en la ciudad submarina de Rapture, enfrentándote a splicers, usando armas y plásmidos mientras exploras una historia oscura y atmosférica",
    requisitos: "Windows XP/Vista, Intel Pentium 4 2.4 GHz / AMD Athlon 64 2800+, 1 GB RAM (XP) / 2 GB RAM (Vista), NVIDIA GeForce 7600 / ATI Radeon X1950, DirectX 9.0c, 8 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/kyqu7deup8q0lxs/BioShock.2.Complete.iso.torrent/file",
        mediafire: "https://www.mediafire.com/file/kyqu7deup8q0lxs/BioShock.2.Complete.iso.torrent/file"
    },
    imagen: "Images/YWRvdXNKLmpwZw.jpg",
},
        {
    id: 60,
    nombre: "Monster Hunter: World",
    tipo: "juego",
    descripcion: "Videojuego de rol y acción en tercera persona donde los jugadores encarnan a un cazador que debe explorar un vasto mundo abierto repleto de ecosistemas vivos, enfrentarse a monstruos colosales, recolectar recursos y fabricar armas y armaduras. Ofrece modo en solitario y cooperativo en línea hasta 4 jugadores.",
    requisitos: "Windows 7/8/10 64-bit, Intel Core i5-4460 3.2 GHz / AMD FX-6300, 8 GB RAM, NVIDIA GeForce GTX 760 / AMD Radeon R7 260x, DirectX 11, 48 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/gcpcze2qpfw28bf/Monster+Hunter+World.torrent/file",
        mediafire: "https://www.mediafire.com/file/gcpcze2qpfw28bf/Monster+Hunter+World.torrent/file"
    },
    imagen: "Images/Monster_Hunter_World_cover_art.jpg",
},
        {
    id: 61,
    nombre: "Monster Hunter Rise",
    tipo: "juego",
    descripcion: "Videojuego de rol y acción en tercera persona ambientado en la aldea de Kamura, donde los cazadores deben enfrentarse a monstruos gigantes utilizando un variado arsenal de armas, nuevas mecánicas como el cordóptero para movilidad aérea, y la posibilidad de luchar junto a compañeros Canyne y Felyne. Incluye modo individual y cooperativo en línea.",
    requisitos: "Windows 10 64-bit, Intel Core i3-4130 / Core i5-3470 / AMD FX-6100, 8 GB RAM, NVIDIA GeForce GTX 760 / AMD Radeon R7 260x, DirectX 11, 36 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias god xd",
        "heroe de verdad"
    ],
    links: {
        direct: "https://www.mediafire.com/file/1di5u3v6hgm80jo/Monster+Hunter+Rise+.torrent/file",
        mediafire: "https://www.mediafire.com/file/1di5u3v6hgm80jo/Monster+Hunter+Rise+.torrent/file"
    },
    imagen: "Images/ebf72e65c0b8c42b36a01f2ba55ac0a1.jpg",
},
    {
    id: 62,
    nombre: "Sekiro: Shadows Die Twice",
    tipo: "juego",
    descripcion: "Juego de acción y aventura ambientado en un Japón feudal ficticio, donde controlas a un shinobi en busca de venganza contra samuráis, clanes y criaturas sobrenaturales con un sistema de combate exigente y técnico.",
    requisitos: "Windows 7/8/10 64-bit, Intel Core i3-2100 / AMD FX-6300, 4 GB RAM, GeForce GTX 760 / Radeon HD 7950, 25 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "gracias",
        "heroe"
    ],
    links: {
        direct: "https://www.mediafire.com/file_premium/nkkff34ij5kukts/Sekiro.Shadows.Die.Twice.v1.06.torrent/file",
        mediafire: "https://www.mediafire.com/file_premium/nkkff34ij5kukts/Sekiro.Shadows.Die.Twice.v1.06.torrent/file"
    },
    imagen: "Images/Sekiro_art.jpg",
},
    {
    id: 63,
    nombre: "Resident Evil Village",
    tipo: "juego",
    descripcion: "Juego de acción y survival horror en primera persona donde Ethan Winters busca a su hija secuestrada en una misteriosa aldea europea, enfrentándose a criaturas terroríficas y explorando escenarios llenos de tensión y misterio.",
    requisitos: "Windows 10 64-bit, AMD Ryzen 3 1200 / Intel Core i5-7500, 8 GB RAM, AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti, DirectX 12, 50 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Muy buen survival horror",
        "Gracias"
    ],
    links: {
        direct: "https://www.mediafire.com/file/sx2hjr5kyutqxr4/Resident.Evil.Village.torrent/file",
        mediafire: "https://www.mediafire.com/file/sx2hjr5kyutqxr4/Resident.Evil.Village.torrent/file"
    },
    imagen: "Images/FkzwjnJknkrFlozkTdeQBMub.jpg",
},
{
    id: 64,
    nombre: "Forza Horizon 4 Ultimate Edition",
    tipo: "juego",
    descripcion: "Juego de carreras de mundo abierto ambientado en una recreación de Gran Bretaña, donde los jugadores pueden explorar libremente, competir en diversos eventos y coleccionar una gran variedad de autos, con estaciones dinámicas que cambian la jugabilidad.",
    requisitos: "Windows 10 64-bit, Intel i3-4170 @ 3.7 GHz / Intel i5-750 @ 2.67 GHz, 8 GB RAM, NVIDIA GTX 650 Ti / AMD R7 250X, DirectX 12, 80 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Edición Ultimate completa",
        "Gracias por compartir"
    ],
    links: {
        direct: "https://www.mediafire.com/file/fxl96jd1ix4c7j0/Forza.Horizon.4.Ultimate.Edition.torrent/file",
        mediafire: "https://www.mediafire.com/file/fxl96jd1ix4c7j0/Forza.Horizon.4.Ultimate.Edition.torrent/file"
    },
    imagen: "Images/forza-horizon-4-2018102103227_1.jpg",
},
    {
    id: 65,
    nombre: "Devil May Cry 5 Deluxe Edition",
    tipo: "juego",
    descripcion: "Juego de acción y hack and slash de la aclamada saga Devil May Cry. Controla a Nero, Dante y V en intensos combates llenos de estilo contra hordas de demonios, con un sistema de combate dinámico y personalizable. La Deluxe Edition incluye contenido extra exclusivo.",
    requisitos: "Windows 7/8.1/10 64-bit, Intel Core i7-3770 / AMD FX-9590, 8 GB RAM, NVIDIA GTX 960 / AMD R9 280X, DirectX 11, 35 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Grax",
        "Un clásico moderno"
    ],
    links: {
        direct: "https://www.mediafire.com/file/bb0mvmh4lo19wqr/Devil.May.Cry.5.Deluxe.Edition.zip.torrent/file",
        mediafire: "https://www.mediafire.com/file/bb0mvmh4lo19wqr/Devil.May.Cry.5.Deluxe.Edition.zip.torrent/file"
    },
    imagen: "Images/86flTX6TLYP7MABrMUt3An6m.jpg",
},
    {
    id: 66,
    nombre: "Call of Duty: Infinite Warfare",
    tipo: "juego",
    descripcion: "Shooter en primera persona ambientado en el espacio y en un futuro cercano, donde los jugadores combaten en batallas interplanetarias utilizando tecnología avanzada, vehículos espaciales y armas futuristas en una campaña épica y modos multijugador competitivos.",
    requisitos: "Windows 7 64-bit, Intel Core i3-3220 / AMD FX-4350, 8 GB RAM, NVIDIA GTX 660 / AMD Radeon HD 7870, DirectX 11, 70 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Campaña futurista interesante",
        "Divertido"
    ],
    links: {
        direct: "https://www.mediafire.com/file/8n4a07y5vf6bsx1/C0DIWF.torrent/file",
        mediafire: "https://www.mediafire.com/file/8n4a07y5vf6bsx1/C0DIWF.torrent/file"
    },
    imagen: "Images/call-of-duty-infinite-warfare_3c.jpg",
},
    {
    id: 67,
    nombre: "R.B.I. Baseball 20",
    tipo: "juego",
    descripcion: "Videojuego de béisbol en tercera persona donde los jugadores pueden controlar equipos de las ligas mayores, gestionar estrategias de juego y competir en partidos completos con mecánicas realistas de bateo, lanzamiento y defensa.",
    requisitos: "Windows 7/8/10 64-bit, Intel Core i3-2100 / AMD FX-6300, 4 GB RAM, NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 260x, DirectX 11, 10 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Buen simulador de béisbol",
        "Gracias por compartir"
    ],
    links: {
        direct: "https://www.mediafire.com/file/lko1qz61rl75ee2/R.B.I.Baseball.20-CODEX-[rarbg.to].torrent/file",
        mediafire: "https://www.mediafire.com/file/lko1qz61rl75ee2/R.B.I.Baseball.20-CODEX-[rarbg.to].torrent/file"
    },
    imagen: "Images/Baseball20.jpg",
},
    {
    id: 68,
    nombre: "Project Zomboid",
    tipo: "juego",
    descripcion: "Simulador de supervivencia en un apocalipsis zombi con vista isométrica, donde los jugadores deben gestionar su salud, hambre, sueño, heridas y enfermedades mientras exploran, construyen, luchan y sobreviven en un mundo abierto. La Build 42.11.0 introduce mejoras en la jugabilidad, optimización y nuevas mecánicas.",
    requisitos: "Windows 10 64-bit, Intel Core i5-7500 / AMD Ryzen 5 1600, 8 GB RAM, NVIDIA GeForce GTX 960 / AMD Radeon RX 560, DirectX 11, 5 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Heroe",
        "Me encanta"
    ],
    links: {
        direct: "https://www.mediafire.com/file/n4z04qkdp7djya1/Project.Zomboid.v42.11.0.rar/file",
        mediafire: "https://www.mediafire.com/file/n4z04qkdp7djya1/Project.Zomboid.v42.11.0.rar/file"
    },
    imagen: "Images/who-exactly-is-this-in-the-proje.jpg",
},
    {
id: 69,
nombre: "Resident Evil 6",
tipo: "juego",
descripcion: "Juego de acción y survival horror que combina múltiples campañas con personajes icónicos como Leon S. Kennedy, Chris Redfield y Ada Wong, enfrentando amenazas bioterroristas globales.",
requisitos: "Windows 7/8/10 64-bit, Intel Core i5-4460 / AMD FX-6300, 4 GB RAM, GeForce GTX 760 / Radeon R7 260X, 15 GB espacio.",
downloads: 0,
rating: "⭐⭐⭐⭐☆",
comments: [
    "Heroe gracias",
    "uff god"
],
links: {
    direct: "https://www.mediafire.com/file/15wvcou4yo60db8/Resident+EVil+6.torrent/file",
    mediafire: "https://www.mediafire.com/file/15wvcou4yo60db8/Resident+EVil+6.torrent/file"
},
imagen: "Images/Resident_Evil_6_box_artwork.png",
},
    {
    id: 70,
    nombre: "Ghost of Tsushima Director's Cut",
    tipo: "juego",
    descripcion: "Juego de acción y aventura en tercera persona ambientado en el Japón feudal; controlas a Jin Sakai, un samurái que lucha por salvar Tsushima de una invasión mongola. Esta versión incluye la expansión Iki Island, combates refinados y ambiente inmersivo.",
    requisitos: "Windows 10 64-bit, Intel Core i3-7100 / AMD Ryzen 3 1200, 8 GB RAM, NVIDIA GeForce GTX 960 / AMD Radeon RX 5500 XT, DirectX 11, 75 GB espacio (HDD; SSD recomendado).",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Una experiencia samurái increíble en PC",
        "Muy buena optimización para ser port de consola"
    ],
    links: {
        direct: "https://www.mediafire.com/file/9wdmm1iiniiw4ah/Ghost.of.Tsushima.DIRECTORS.CUT.MULTi26-RUNE.torrent/file",
        mediafire: "https://www.mediafire.com/file/9wdmm1iiniiw4ah/Ghost.of.Tsushima.DIRECTORS.CUT.MULTi26-RUNE.torrent/file"
    },
    imagen: "Images/GhostT.jpg",
},
    {
    id: 71,
    nombre: "Diablo III: Eternal Collection (FitGirl Repack)",
    tipo: "juego",
    descripcion: "Juego de rol y acción tipo hack-and-slash en tercera persona con un estilo oscuro y frenético. Incluye contenido base, expansión Reaper of Souls y mejoras gráficas. Esta versión es una reducida “FitGirl Repack” que mantiene calidad sin alterar gameplay.",
    requisitos: "Windows 7/8/10 64-bit, Intel Core 2 Duo 2.4 GHz / AMD Athlon 64 X2 5600+, 4 GB RAM, NVIDIA GeForce 8800 GT o ATI Radeon HD 2900 XT, DirectX 9.0c, 25 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "FitGirl repack mantiene calidad",
        "Gran RPG de acción"
    ],
    links: {
        direct: "https://www.mediafire.com/file/ecgfaq6q2jsysec/Diablo+III+-+Eternal+Collection+[FitGirl+Repack]+INT.torrent/file",
        mediafire: "https://www.mediafire.com/file/ecgfaq6q2jsysec/Diablo+III+-+Eternal+Collection+[FitGirl+Repack]+INT.torrent/file"
    },
    imagen: "Images/Diablo_III_cover.jpg",
},
{
    id: 72,
    nombre: "Resident Evil 5 Gold Edition",
    tipo: "juego",
    descripcion: "Shooter de acción y supervivencia en tercera persona donde controlas a Chris Redfield junto a Sheva Alomar en una misión para detener un brote bioterrorista en África. Combina combate, puzzles y cooperación en una atmósfera intensa.",
    requisitos: "Windows XP/Vista/7, Intel Pentium D / AMD Athlon 64 X2, 512 MB–1 GB RAM, NVIDIA GeForce 6800 series / ATI Radeon HD 2400 Pro (256 MB VRAM), DirectX 9.0c, 8 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Clásico de survival horror",
        "Muy optimizado incluso hoy"
    ],
    links: {
        direct: "https://www.mediafire.com/file/jixs1bmpj8x8p18/Resident.Evil.5.v10.04.2023.zip.torrent/file",
        mediafire: "https://www.mediafire.com/file/jixs1bmpj8x8p18/Resident.Evil.5.v10.04.2023.zip.torrent/file"
    },
    imagen: "Images/aE9HNEdnLmpwZw.jpg",
},
    {
    id: 73,
    nombre: "Metal Gear Rising: Revengeance",
    tipo: "juego",
    descripcion: "Juego de acción y hack and slash donde controlas a Raiden, un cyborg con habilidades sobrehumanas, luchando contra fuerzas privadas y terroristas con un sistema de combate rápido y cortante",
    requisitos: "Windows 7/8/10 64-bit, Intel Core i5-2400 / AMD FX-6100, 4 GB RAM, GeForce GTX 560 Ti / Radeon HD 6870, 25 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Clásico de survival horror",
        "Muy optimizado incluso hoy"
    ],
    links: {
        direct: "https://www.mediafire.com/file_premium/q9yuoamg6hnccy2/METAL.GEAR.RISING.REVENGEANCE.v74575.torrent/file",
        mediafire: "https://www.mediafire.com/file_premium/q9yuoamg6hnccy2/METAL.GEAR.RISING.REVENGEANCE.v74575.torrent/file"
    },
    imagen: "Images/A1FBBIIeFlL._UF894,1000_QL80_.jpg",
},
    {
    id: 74,
    nombre: "eFootball PES 2021",
    tipo: "juego",
    descripcion: "Videojuego de simulación de fútbol, parte de la serie Pro Evolution Soccer. Ofrece ligas oficiales, modos individuales y multijugador, con jugabilidad realista y gran atención táctica.",
    requisitos: "Windows 8.1/10 64-bit, Intel Core i5-3470 / AMD FX-4350, 8 GB RAM, NVIDIA GTX 670 / AMD Radeon HD 7870, 40 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Buen equilibrio entre realismo y rendimiento",
        "Funciona bien en equipos modestos"
    ],
    links: {
        direct: "https://www.mediafire.com/file/kphp5ngcorull8q/E.Football.PES.2021-CPY.torrent/file",
        mediafire: "https://www.mediafire.com/file/kphp5ngcorull8q/E.Football.PES.2021-CPY.torrent/file"
    },
    imagen: "Images/9627994-efootball-pes-2021-seaso.jpg",
},
    {
    id: 75,
    nombre: "Devil May Cry 3: Special Edition",
    tipo: "juego",
    descripcion: "Hack and slash en tercera persona donde controlas a Dante (y en esta edición también a Vergil), con combates frenéticos, modos extra como Turbo, Bloody Palace y Gold Mode.",
    requisitos: "Windows 2000/XP, Intel Pentium III 1.0 GHz o superior, 256 MB RAM, GPU compatible DirectX 9.0c Shader 2.0 (128 MB VRAM), 3.5 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Estilo frenético clásico",
        "Edición especial con contenido extra"
    ],
    links: {
        direct: "https://www.mediafire.com/file/1wkp441nmuo344l/Dev3ilM3ayCr3y3Spe3cialE.torrent/file",
        mediafire: "https://www.mediafire.com/file/1wkp441nmuo344l/Dev3ilM3ayCr3y3Spe3cialE.torrent/file"
    },
    imagen: "Images/MV5BMzlmZTY0NzQtMGJmZC00MjI0LWI3.jpg",
},
    {
    id: 76,
    nombre: "Call of Duty: Black Ops III",
    tipo: "juego",
    descripcion: "Shooter futurista en primera persona con campaña cooperativa, multijugador competitivo y modo Zombies independiente, ambientado en un mundo tecnológico distópico lleno de mejoras cibernéticas.",
    requisitos: "Windows 7/8/8.1 64-bit, Intel Core i3-530 @ 2.93 GHz / AMD Phenom II X4 810 @ 2.60 GHz, 6 GB RAM, NVIDIA GeForce GTX 470 @1 GB / ATI Radeon HD 6970 @1 GB, DirectX 11, 60 GB espacio (algunos sitios indican hasta 100 GB).",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Gran campaña y modo Zombies",
        "Requiere bastante espacio pero vale la pena"
    ],
    links: {
        direct: "https://www.mediafire.com/file/xhrbrf6837z3egj/Call.of.Duty.Black.Ops.3.Zombies.Chronicles.Deluxe.Edition.v100.2.2.0.122.0-Canek77.torrent/file",
        mediafire: "https://www.mediafire.com/file/xhrbrf6837z3egj/Call.of.Duty.Black.Ops.3.Zombies.Chronicles.Deluxe.Edition.v100.2.2.0.122.0-Canek77.torrent/file"
    },
    imagen: "Images/250px-Black_Ops_3.jpg",
},
    {
    id: 77,
    nombre: "ELDEN RING",
    tipo: "juego",
    descripcion: "Juego de rol de acción en mundo abierto con elementos soulsborne, donde explorás las vastas ‘Lands Between’, enfrentando criaturas épicas, recolectando runas y dominando un combate exigente.",
    requisitos: "Windows 10 (64-bit), Intel Core i5-8400 / AMD Ryzen 3 3300X, 12 GB RAM, NVIDIA GeForce GTX 1060 (3 GB) / AMD Radeon RX 580 (4 GB), DirectX 12, 60 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Impresionante mundo abierto",
        "Desafiante y hermoso"
    ],
    links: {
        direct: "https://www.mediafire.com/file/p2ti65khtekjm5j/ELDEN.RING.Shadow.of.the.Erdtree-RUNE.torrent/file",
        mediafire: "https://www.mediafire.com/file/p2ti65khtekjm5j/ELDEN.RING.Shadow.of.the.Erdtree-RUNE.torrent/file"
    },
    imagen: "Images/MV5BZGQxMjYyOTUtNjYyMC00NzdmLWI4.jpg",
},
    {
    id: 78,
    nombre: "Elden Ring: Nightreign",
    tipo: "juego",
    descripcion: "Spin-off roguelike cooperativo de Elden Ring donde encarnas a un Nightfarer que sobrevive tres noches en el mundo procedural de Limveld, luchando contra Nightlords y usando habilidades únicas por clase.",
    requisitos: "Windows 10 (64-bit), Intel Core i5-8400 / AMD Ryzen 3 3300X, 12 GB RAM, NVIDIA GeForce GTX 1060 (3 GB) / AMD Radeon RX 580 (4 GB), DirectX 12, 60 GB espacio (base) – 80 GB con Shadow of the Erdtree.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Experiencia Souls en modo roguelike",
        "Desafiante y rejugable"
    ],
    links: {
        direct: "https://www.mediafire.com/file/1j2o0dzie089jug/ELDEN.RING.NIGHTREIGN.v1.02.0.rar.torrent/file",
        mediafire: "https://www.mediafire.com/file/1j2o0dzie089jug/ELDEN.RING.NIGHTREIGN.v1.02.0.rar.torrent/file"
    },
    imagen: "Images/250px-Elden_Ring_Nightreign_cove.jpg",
},
    {
    id: 79,
    nombre: "Detroit: Become Human",
    tipo: "juego",
    descripcion: "Videojuego narrativo de aventura donde decisiones morales afectan el destino de tres androides (Kara, Connor y Markus) en un futuro cercano; sus elecciones moldean una historia emocional y ramificada.",
    requisitos: "Windows 10 (64 bit), Intel Core i5-2300 @ 2.8 GHz / AMD Ryzen 3 1200 @ 3.1 GHz / AMD FX-8350 @ 4.2 GHz, 8 GB RAM, NVIDIA GeForce GTX 780 (3 GB VRAM) / AMD HD 7950 (3 GB VRAM) con soporte Vulkan 1.1, 55 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Emocionante historia ramificada",
        "Porteo bien logrado a PC"
    ],
    links: {
        direct: "https://www.mediafire.com/file/om3wyofnpea763t/D3TR0IT-B3COM3-HUM4N.torrent/file",
        mediafire: "https://www.mediafire.com/file/om3wyofnpea763t/D3TR0IT-B3COM3-HUM4N.torrent/file"
    },
    imagen: "Images/hola.jpg",
},
    {
    id: 80,
    nombre: "Stray",
    tipo: "juego",
    descripcion: "Stray es un juego de aventura en tercera persona donde controlas a un gato perdido en una ciudad cibernética habitada por robots. Explora, resuelve acertijos y descubre secretos para encontrar el camino de regreso a casa.",
    requisitos: "Windows 10 64-bit, Intel Core i5-2300 / AMD FX-6350, 8 GB RAM, NVIDIA GeForce GTX 650 Ti / AMD Radeon R7 360, 10 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Un gato increíble",
        "Gracias por subirlo"
    ],
    links: {
        direct: "https://www.mediafire.com/file/th8itzebuedh80y/M3U4kDDG3m7oSFp.torrent/file",
        mediafire: "https://www.mediafire.com/file/th8itzebuedh80y/M3U4kDDG3m7oSFp.torrent/file"
    },
    imagen: "Images/is-there-anywhere-i-can-commissi.jpg",
},
    {
    id: 81,
    nombre: "Far Cry 6",
    tipo: "juego",
    descripcion: "Shooter en primera persona ambientado en una isla caribeña bajo una dictadura. El jugador toma el rol de una guerrilla que busca liberar Yara luchando contra soldados, fauna salvaje y utilizando armas improvisadas, en un mundo abierto con componentes RPG.",
    requisitos: "Windows 10 64-bit (20H1 o superior), AMD Ryzen 3 1200 / Intel Core i5-4460, 8 GB RAM, AMD Radeon RX 460 4 GB / NVIDIA GeForce GTX 960 4 GB, DirectX 12, 60 GB espacio (SSD recomendado).",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Muy buen sandbox",
        "aceptable"
    ],
    links: {
        direct: "https://www.mediafire.com/file/njxx5cokbhxz43v/OgNFikJrXM0AsTz.torrent/file",
        mediafire: "https://www.mediafire.com/file/njxx5cokbhxz43v/OgNFikJrXM0AsTz.torrent/file"
    },
    imagen: "Images/250px-Far_cry_6_cover.jpg",
},
    {
    id: 82,
    nombre: "Naruto Shippuden: Ultimate Ninja Storm Revolution",
    tipo: "juego",
    descripcion: "Juego de lucha 3D basado en la saga Naruto donde peleas con más de 100 personajes jugables y ninjas de apoyo, disfrutas de animaciones espectaculares, técnicas mejoradas y modos como Ninja World Tournament y el exclusivo Mecha-Naruto.",
    requisitos: "Windows XP o superior (SP actualizado), Dual-core 2.3 GHz (o equivalente AMD), 1 GB RAM, GPU 512 MB (Pixel Shader 4.0; GeForce 8xxx / ATI HD2xxx), DirectX 9.0c, 8 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "¡Gran experiencia para fans de Naruto!",
        "Requiere muy poco hardware"
    ],
    links: {
        direct: "https://www.mediafire.com/file/sma70pp0e8sqbaa/NSR3V0LUTI0N.torrent/file",
        mediafire: "https://www.mediafire.com/file/sma70pp0e8sqbaa/NSR3V0LUTI0N.torrent/file"
    },
    imagen: "Images/naruto.jpg",
},
    {
    id: 83,
    nombre: "Metal Gear Solid V: The Phantom Pain",
    tipo: "juego",
    descripcion: "Juego de acción y sigilo en mundo abierto que sigue a Big Boss en su búsqueda de venganza tras despertar de un coma de 9 años. Combina narrativa cinematográfica con jugabilidad táctica y exploración libre.",
    requisitos: "SO: Windows 7/8/10 (64 bits), CPU: Intel Core i5-4460 (3.40 GHz) o AMD equivalente, RAM: 4 GB, GPU: NVIDIA GeForce GTX 650 (2 GB) o AMD equivalente, DirectX 11, 28 GB de espacio en disco.",
    downloads: 0,
    rating: "⭐⭐⭐⭐⭐",
    comments: [
        "Una obra maestra de Hideo Kojima",
        "Mundo abierto con gran libertad táctica"
    ],
    links: {
        direct: "https://www.mediafire.com/file/qe4uimjsp2lunug/M3t4lG34rS0l1d.torrent/file",
        mediafire: "https://www.mediafire.com/file/qe4uimjsp2lunug/M3t4lG34rS0l1d.torrent/file"
    },
    imagen: "Images/Metal-Gear-Solid-V-The-Phantom-P.jpg",
},
    {
    id: 84,
    nombre: "FIFA 20 Ultimate Edition (SOLO JUEGO)",
    tipo: "juego",
    descripcion: "FIFA 20 introduce el modo VOLTA Football, que ofrece una experiencia de fútbol callejero auténtica, y una nueva jugabilidad basada en la inteligencia del fútbol. La Ultimate Edition incluye acceso anticipado, packs de FUT y jugadores ICONO como Zidane, Pirlo y Drogba.",
    requisitos: "SO: Windows 7/8.1/10 (64 bits), CPU: Intel Core i3-2100 o AMD Phenom II X4 965, RAM: 8 GB, GPU: NVIDIA GTX 660 o AMD Radeon HD 7850 (2 GB), DirectX 11, 50 GB de espacio disponible.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Excelente jugabilidad y gráficos realistas.",
        "El modo VOLTA es una gran adición para los fans del fútbol callejero."
    ],
    links: {
        direct: "https://www.mediafire.com/file/970s6vizs9pboy9/FIFA.20.Ultimate.Edition.FULL.UNLOCKED.zip.torrent/file",
        mediafire: "https://www.mediafire.com/file/970s6vizs9pboy9/FIFA.20.Ultimate.Edition.FULL.UNLOCKED.zip.torrent/file"
    },
    imagen: "Images/FIFA20.jpg",
},
    {
    id: 85,
    nombre: "Call of Duty: Modern Warfare III",
    tipo: "juego",
    descripcion: "Shooter en primera persona centrado en combates militares modernos, con campaña cinematográfica intensa, multijugador competitivo y cooperativo, armas realistas y gráficos de última generación.",
    requisitos: "Windows 10 64-bit, Intel Core i5-2500K / AMD Ryzen 3 1200, 8 GB RAM, NVIDIA GTX 960 / AMD Radeon RX 470, DirectX 12, 60 GB espacio.",
    downloads: 0,
    rating: "⭐⭐⭐⭐☆",
    comments: [
        "Muy buena campaña y multiplayer",
        "Acción pura"
    ],
    links: {
        direct: "https://www.mediafire.com/file/0ziswhub0iypksn/CoDM23odernWar23fareIII2023.elamigos.torrent/file",
        mediafire: "https://www.mediafire.com/file/0ziswhub0iypksn/CoDM23odernWar23fareIII2023.elamigos.torrent/file",
    },
    extra: {
        vocesLatinas: "https://www.mediafire.com/file_premium/69suagbuy6fbgn3/CDMW3-LnggPck-LTM.rar/file",
    },
    imagen: "Images/warfareIII.jpg",
}
];
