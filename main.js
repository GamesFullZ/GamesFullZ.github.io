// JUEGOS PRECARGADOS (¡SIN CARACTERES ESPECIALES!)
const juegoHTML = `
    <div class="juego-card">
        <h2>${juego.titulo}</h2>
        <img src="${juego.imagen}" alt="${juego.titulo}" class="juego-imagen">
        <p><strong>Año:</strong> ${juego.ano}</p>
        <p><strong>Tamaño:</strong> ${juego.tamano}</p>
        <p><strong>Género:</strong> ${juego.genero}</p>
        <p><strong>Versión:</strong> ${juego.version}</p>
        <p><strong>Requisitos Mínimos:</strong> ${juego.minimo}</p>
        <p><strong>Requisitos Recomendados:</strong> ${juego.recomendado}</p>
        
        <!-- ✅ BOTONES -->
        <div class="botones">
            <a href="${juego.enlaces[0].url.trim()}" target="_blank" class="btn-descargar">Descargar ${juego.enlaces[0].nombre}</a>
            <button onclick="alert('${juego.review}')" class="btn-review">Ver Review</button>
            <a href="${juego.youtube}" target="_blank" class="btn-youtube">Ver Gameplay</a>
        </div>
    </div>
`;

// INICIAR LA APLICACIÓN CON MANEJO DE ERRORES
document.addEventListener('DOMContentLoaded', () => {
  try {
    renderGames(juegos);
    setupEventListeners(juegos);
    
    // Verificar si hay juegos
    if (juegos.length === 0) {
      document.getElementById('gameGallery').innerHTML = `
        <div class="loading">
          <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 15px;"></i><br>
          No hay juegos disponibles.<br>
          Agrega juegos en main.js
        </div>
      `;
    }
  } catch (error) {
    console.error("Error crítico:", error);
    document.getElementById('gameGallery').innerHTML = `
      <div class="loading">
        <i class="fas fa-bug" style="font-size: 2rem; color: #ff4444; margin-bottom: 15px;"></i><br>
        ERROR: ${error.message}<br>
        <small>Abre la consola (F12) para más detalles</small>
      </div>
    `;
  }
});

// RENDERIZAR JUEGOS (¡CORREGIDO!)
function renderGames(juegos) {
  const gallery = document.getElementById('gameGallery');
  if (!gallery) {
    console.error("No se encontró el elemento #gameGallery");
    return;
  }
  
  if (juegos.length === 0) {
    gallery.innerHTML = `
      <div class="loading">
        <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 15px;"></i><br>
        No se encontraron juegos con ese filtro
      </div>
    `;
    return;
  }

  gallery.innerHTML = juegos.map(juego => `
    <div class="game-card">
      <img src="${juego.imagen}" 
           alt="${juego.titulo}" 
           class="game-img" 
           onerror="this.src='https://via.placeholder.com/300x160?text=Sin+Imagen';">
      <div class="game-info">
        <div class="game-title">${juego.titulo}</div>
        <div class="game-meta">
          <span>📅 ${juego.ano}</span> <!-- ¡CORREGIDO! -->
          <span>📦 ${juego.tamano}</span> <!-- ¡CORREGIDO! -->
        </div>
        <a href="${juego.enlace}" class="download-btn" target="_blank">
          <i class="fas fa-download"></i> Descargar
        </a>
      </div>
    </div>
  `).join('');
}

// CONFIGURAR EVENTOS (¡CON VALIDACIÓN!)
function setupEventListeners(juegos) {
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (!searchInput || filterButtons.length === 0) {
    console.error("No se encontraron elementos de UI");
    return;
  }

  // Búsqueda en tiempo real
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      renderGames(juegos);
      return;
    }
    
    const filtered = juegos.filter(j => 
      j.titulo.toLowerCase().includes(query)
    );
    
    renderGames(filtered);
  });

  // Filtros por género
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activar botón seleccionado
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filtro = btn.getAttribute('data-filter');
      if (filtro === 'all') {
        renderGames(juegos);
      } else {
        const filtered = juegos.filter(j => 
          j.generos && j.generos.includes(filtro)
        );
        renderGames(filtered);
      }
    });
  });
}

// BOTÓN "SUBIR ARRIBA" (¡CON VALIDACIÓN!)
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }
    
    backToTop.style.display = scrollTop > 400 ? 'flex' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ¡EL PROBLEMA ERA ESTO! (tema corregido)
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const icon = themeToggle.querySelector('i');
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
      icon.classList.replace('fa-moon', 'fa-sun');
      document.body.style.background = 'linear-gradient(135deg, #f0f0f4, #e0e0e8)';
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      document.body.style.background = 'linear-gradient(135deg, #0a0e17, #0f172a)';
    }
  });
}