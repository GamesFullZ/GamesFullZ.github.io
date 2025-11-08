<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Nosotros - GamesFullZ</title>
    
    <!-- Metadatos optimizados -->
    <meta name="description" content="Conoce más sobre GamesFullZ, nuestra historia y compromiso con la comunidad gamer. Descubre cómo empezamos y hacia dónde vamos.">
    <meta name="keywords" content="sobre nosotros, gamesfullz, historia, comunidad gamer">
    <meta name="author" content="GamesFullZ">
    
    <!-- Open Graph para redes sociales -->
    <meta property="og:title" content="Sobre Nosotros - GamesFullZ">
    <meta property="og:description" content="Conoce más sobre GamesFullZ, nuestra historia y compromiso con la comunidad gamer.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://gamesfullz.com/sobre-nosotros.html">
    <meta property="og:image" content="https://gamesfullz.com/images/og-about.jpg">
    
    <!-- AdManager -->
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossorigin="anonymous"></script>
    <script>
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/23318791520/GFZ_TOP_728x90', [728, 90], 'div-gpt-ad-1758490864512-0')
                 .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    </script>
    
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5795479991735761"
     crossorigin="anonymous"></script>
    
    <!-- Fuentes modernas -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    
    <!-- Iconos con Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Enlace al CSS externo -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Estilos adicionales para esta página -->
    <style>
        /* Estilos específicos para la página Sobre Nosotros */
        .hero-section {
            position: relative;
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: linear-gradient(135deg, #0a0a0f 0%, #14141f 50%, #1a1a2e 100%);
            margin-bottom: var(--space-xl);
        }
        
        .hero-content {
            text-align: center;
            z-index: 2;
            max-width: 800px;
            padding: var(--space-xl);
        }
        
        .hero-title {
            font-family: var(--font-display);
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            margin-bottom: var(--space-md);
            background: var(--gradient-accent);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from {
                text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
            }
            to {
                text-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(0, 245, 255, 0.6);
            }
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--clr-text-secondary);
            margin-bottom: var(--space-lg);
            line-height: 1.6;
        }
        
        .hero-cta {
            display: inline-flex;
            align-items: center;
            gap: var(--space-sm);
            padding: 0.875rem 2rem;
            background: var(--gradient-accent);
            border: none;
            border-radius: var(--radius-full);
            color: white;
            font-family: var(--font-display);
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            transition: all var(--transition-base);
            box-shadow: var(--shadow-md);
        }
        
        .hero-cta:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-glow);
        }
        
        .particles-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
        }
        
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(0, 245, 255, 0.8);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
            animation: float 8s infinite linear;
        }
        
        .about-story {
            background: var(--clr-bg-card);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-xl);
            padding: var(--space-xl);
            margin-bottom: var(--space-xl);
            box-shadow: var(--shadow-md);
        }
        
        .story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xl);
            align-items: center;
        }
        
        .story-image {
            width: 100%;
            height: auto;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            transition: transform var(--transition-slow);
        }
        
        .story-image:hover {
            transform: scale(1.03);
        }
        
        .story-content h2 {
            font-family: var(--font-display);
            font-size: 2rem;
            margin-bottom: var(--space-md);
            background: var(--gradient-accent);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .story-content p {
            font-size: 1.125rem;
            line-height: 1.7;
            color: var(--clr-text-secondary);
            margin-bottom: var(--space-md);
        }
        
        .timeline-section {
            background: var(--clr-bg-card);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-xl);
            padding: var(--space-xl);
            margin-bottom: var(--space-xl);
            box-shadow: var(--shadow-md);
        }
        
        .timeline {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .timeline::after {
            content: '';
            position: absolute;
            width: 4px;
            background: var(--gradient-accent);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -2px;
            border-radius: var(--radius-full);
        }
        
        .timeline-item {
            padding: var(--space-lg) 0;
            position: relative;
            width: 50%;
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            right: -10px;
            background: var(--clr-bg-primary);
            border: 4px solid var(--clr-accent-violet);
            top: 22px;
            border-radius: 50%;
            z-index: 1;
            box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
        }
        
        .timeline-item:nth-child(odd) {
            left: 0;
        }
        
        .timeline-item:nth-child(even) {
            left: 50%;
        }
        
        .timeline-item:nth-child(even)::after {
            left: -10px;
        }
        
        .timeline-content {
            padding: var(--space-lg);
            background: rgba(20, 20, 31, 0.6);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-lg);
            position: relative;
            transition: all var(--transition-base);
        }
        
        .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
            border-color: var(--clr-accent-violet);
        }
        
        .timeline-content h3 {
            font-family: var(--font-display);
            font-size: 1.5rem;
            margin-bottom: var(--space-sm);
            color: var(--clr-accent-cyan);
        }
        
        .timeline-content p {
            color: var(--clr-text-secondary);
            line-height: 1.6;
        }
        
        .values-section {
            background: var(--clr-bg-card);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-xl);
            padding: var(--space-xl);
            margin-bottom: var(--space-xl);
            box-shadow: var(--shadow-md);
        }
        
        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--space-lg);
        }
        
        .value-card {
            background: rgba(20, 20, 31, 0.6);
            backdrop-filter: blur(8px);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-lg);
            padding: var(--space-lg);
            text-align: center;
            transition: all var(--transition-base);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .value-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
            border-color: var(--clr-accent-violet);
        }
        
        .value-icon {
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--gradient-accent);
            border-radius: 50%;
            margin-bottom: var(--space-md);
            font-size: 2rem;
            color: white;
        }
        
        .value-title {
            font-family: var(--font-display);
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: var(--space-sm);
            color: var(--clr-text-primary);
        }
        
        .value-description {
            color: var(--clr-text-secondary);
            line-height: 1.6;
        }
        
        .cta-section {
            background: var(--clr-bg-card);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-xl);
            padding: var(--space-xl);
            margin-bottom: var(--space-xl);
            box-shadow
