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
            direct: "https://gofile.io/d/x9dhme  ",
            mediafire: "https://gofile.io/d/x9dhme  "
        },
        imagen: "Images/Resi4-gc-cover.jpg",
        password: "123" // <--- Contraseña agregada
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
            direct: "https://gofile.io/d/78ptPe  ",
            mediafire: "https://gofile.io/d/78ptPe  "
        },
        imagen: "Images/Dead_island_PC_packshot.png",
        password: "123" // <--- Contraseña agregada
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
            direct: "https://gofile.io/d/avMKZl  ",
            mediafire: "https://gofile.io/d/avMKZl  "
        },
        imagen: "Images/Postal_2_cover.png",
        password: "123" // <--- Contraseña agregada
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
            direct: "https://gofile.io/d/Js6Zsk  ",
            mediafire: "https://gofile.io/d/Js6Zsk  "
        },
        imagen: "Images/Left4Dead2.jpg",
        password: "123" // <--- Contraseña agregada
    },
    {
        id: 20,
        nombre: "Call of Duty Black ops 1",
        tipo: "juego",
        descripcion: "Un shooter en primera persona ambientado en la Guerra Fría, lleno de acción, espionaje y misiones secretas.",
        requisitos: "So: Windows XP/Vista/7<br>Procesador: Intel Core2 Duo E6600 / AMD Phenom X3 8750<br>RAM: 2 GB<br>Gráficos: NVIDIA GeForce 8600GT / ATI Radeon X1950Pro<br>Almacenamiento: 12 GB",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Divertido Pero con mods mas", "Me encanta el combate", "Recomendado para fans de left 4 dead 2"],
        links: {
            direct: "https://gofile.io/d/Qax9uu",
            mediafire: "https://gofile.io/d/Qax9uu"
        },
        imagen: "Images/CoD_Black_Ops_cover.png",
        password: "123" // <--- Contraseña agregada
    },
       {
        id: 13,
        nombre: "Red Dead Redemption 1",
        tipo: "juego",
        descripcion: "un exforajido obligado por el gobierno a cazar a su antigua banda para recuperar a su familia en el viejo oeste de 1911.",
        requisitos: "SO: Windows 10 64‑bit<br>Procesador: Intel Core i5‑4670 / AMD FX‑9590<br>Memoria: 8 GB RAM<br>Gráficos: NVIDIA GeForce GTX 960 / AMD Radeon R7 360<br>Almacenamiento: 12 GB<br>DirectX: 12<br>SSD recomendado",
        downloads: 0,
        rating: "⭐⭐⭐⭐⭐",
        comments: ["Divertido", "Me encanta Los caballos", "Recomendado para fans de vaqueros"],
        links: {
            direct: "https://gofile.io/d/c2B4Cd  ",
            mediafire: "https://gofile.io/d/c2B4Cd  "
        },
        imagen: "Images/Red_Dead_Redemption.jpg",
        password: "123" // <--- Contraseña agregada
    } // <--- LLAVE DE CIERRE PARA EL OBJETO id:13
]; // <--- PARENTESIS DE CIERRE PARA EL ARRAY 'recursos' Y PUNTO Y COMA FINAL

// <--- Elimina cualquier '}' adicional suelto que haya estado aquí
// Nota: El '}' adicional al final de tu archivo original parece ser un error de copiado/pegado, así que lo he eliminado.
