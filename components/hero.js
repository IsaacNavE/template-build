class AppHero extends HTMLElement {
  static get observedAttributes() {
    return ['bg-color', 'text-color', 'text-align', 'border-radius'];
  }

  constructor() {
    super();
    this.bgColor = 'bg-black'; // Fondo negro
    this.textColor = 'text-white'; // Texto blanco
    this.textAlign = 'text-center'; // Alineación centrada
    this.borderRadius = 'rounded-lg'; // Radio de borde por defecto
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @keyframes neonGlow {
          0% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 30px rgba(255, 0, 0, 0.4),
                        0 0 50px rgba(255, 0, 0, 0.6);
          }
          50% {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
                        0 0 45px rgba(255, 0, 0, 0.5),
                        0 0 80px rgba(255, 0, 0, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                        0 0 30px rgba(255, 0, 0, 0.4),
                        0 0 50px rgba(255, 0, 0, 0.6);
          }
        }

        @keyframes floatingNeon {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-48%, -52%) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .hero-bg {
          position: relative;
          overflow: hidden;
        }

        .neon-light {
          position: absolute;
          border-radius: 50%;
          width: 300px;
          height: 300px;
          background: rgba(255, 0, 0, 0.3); /* Rojo */
          animation: neonGlow 3s infinite ease-in-out, floatingNeon 6s infinite ease-in-out;
          mix-blend-mode: screen;
        }

        .neon-light:nth-child(1) {
          top: 20%;
          left: 30%;
          background: rgba(255, 0, 0, 0.3); /* Rojo */
          animation-delay: 0s;
        }

        .neon-light:nth-child(2) {
          top: 50%;
          left: 70%;
          background: rgba(255, 0, 0, 0.3); /* Rojo */
          animation-delay: 1s;
        }

        .neon-light:nth-child(3) {
          top: 80%;
          left: 20%;
          background: rgba(255, 0, 0, 0.3); /* Rojo */
          animation-delay: 2s;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center; /* Alineación centrada */
          animation: fadeIn 2s ease-in-out;
        }

        .hero-content h1 {
          margin-top: 2rem; /* Espaciado superior */
          font-size: 2.25rem; /* Tamaño de fuente para h1 */
          font-weight: bold;
          margin-bottom: 1.5rem; /* Espaciado inferior */
        }

        .hero-content p {
          font-size: 1.125rem; /* Tamaño de fuente para párrafos */
          margin-bottom: 1.5rem; /* Espaciado inferior */
          color: #f4f4f4; /* Texto blanco */
        }

        .hero-content a {
          background-color: red; /* Rojo para el botón */
          color: white; /* Texto blanco */
          font-weight: bold;
          padding: 15px 30px;
          border-radius: 9999px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .hero-content a:hover {
          background-color: darkred; /* Rojo oscuro al pasar el ratón */
        }

        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 0;
        }

        .hero-bg {
          transition: background-color 1s ease-in-out;
        }

        /* Clases para el fondo, texto y bordes personalizados */
        .bg-black {
          background-color: black;
        }

        .text-white {
          color: white;
        }

        .rounded-lg {
          border-radius: 0.5rem;
        }
      </style>

      <section id="hero" class="hero-bg ${this.bgColor} ${this.textColor} ${this.borderRadius} hero-container">
        <!-- Luces de neón dinámicas -->
        <div class="neon-light"></div>
        <div class="neon-light"></div>
        <div class="neon-light"></div>

        <!-- Contenido del Hero -->
        <div class="hero-content">
          <h1 class="hero-title" data-translate="heroText">Build Your Future with ARCE LIBERTY LLC</h1>
          <p class="hero-description" data-translate="heroDescription">Professional construction services tailored to your needs.</p>
          <a href="#contact" class="hero-button" data-translate="getQuoteButton">
            Get a Quote
          </a>
        </div>
      </section>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'bg-color') {
        this.bgColor = newValue;
      } else if (name === 'text-color') {
        this.textColor = newValue;
      } else if (name === 'text-align') {
        this.textAlign = newValue;
      } else if (name === 'border-radius') {
        this.borderRadius = newValue === 'none' ? '' : newValue || 'rounded-lg';
      }

      this.connectedCallback();
    }
  }
}

customElements.define('app-hero', AppHero);
