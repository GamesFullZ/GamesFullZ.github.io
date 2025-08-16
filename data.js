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
        direct: "https://www.mediafire.com/file/ovozn6o9d8tyw7y/Bendy-and-the-Ink-M-SteamRIP.com.rar.torrent/file",
        mediafire: "https://www.mediafire.com/file/ovozn6o9d8tyw7y/Bendy-and-the-Ink-M-SteamRIP.com.rar.torrent/file"
    },
    imagen: "Images/7288998-bendy-and-the-ink-machine-playstation-4-front-cover.png",
    password: "123"
    },
    {
    id: 18,
    nombre: "Bendy and the Dark Revivalo",
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
        direct: "https://www.mediafire.com/file/ovozn6o9d8tyw7y/Bendy-and-the-Ink-M-SteamRIP.com.rar.torrent/file",
        mediafire: "https://www.mediafire.com/file/ovozn6o9d8tyw7y/Bendy-and-the-Ink-M-SteamRIP.com.rar.torrent/file"
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
];
