class CarruselWorks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.index = 0;
    this.images = [
      "./assets/images/services/image00001.jpeg",
      "./assets/images/services/image00002.jpeg",
      "./assets/images/services/image00003.jpeg",
      "./assets/images/services/image00004.jpeg",
      "./assets/images/services/image00003.jpeg",
      "./assets/images/services/image00004.jpeg",
    ];
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        /* Animación para que el contenedor aparezca de abajo y se vuelva opaco */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(100px); /* Inicia desde abajo */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Termina en su posición original */
          }
        }

        .carousel {
          position: relative;
          width: 80%;
          max-width: 800px;
          margin: 20px auto;
          overflow: hidden;
          background: black;
          border-radius: 20px;
          animation: fadeInUp 1s ease-out; /* Aplicar la animación */
        }

        .carousel-container {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-item {
          min-width: 100%;
          object-fit: cover;
          height: auto;
          max-height: 400px;
          opacity: 0;
          transition: opacity 1s ease-in-out; /* Animación de fade-in */
        }
        .carousel-item.active {
          opacity: 1; /* Hacer visible la imagen activa */
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: red;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 50%;
          font-size: 24px;
          z-index: 5;
        }
        .prev-btn {
          left: 10px;
        }
        .next-btn {
          right: 10px;
        }
        .carousel-btn:hover {
          background: darkred;
        }

        /* Ocultar las flechas en pantallas pequeñas */
        @media (max-width: 768px) {
          .carousel-btn {
            display: none;
          }
        }

        /* Mostrar las flechas en pantallas grandes */
        @media (min-width: 768px) {
          .carousel-btn {
            display: block;
          }
        }

        /* Estilos de los indicadores */
        .indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }
        .indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: white;
          opacity: 0.5;
          cursor: pointer;
        }
        .indicator.active {
          opacity: 1;
          background-color: red;
        }
      </style>
      <div class="carousel">
        <button id="prev" class="carousel-btn prev-btn">&#10094;</button>
        <div class="carousel-container">
          ${this.images
            .map(
              (img, i) => `
                <img src="${img}" class="carousel-item" alt="Imagen" id="item-${i}">
              `
            )
            .join("")}
        </div>
        <button id="next" class="carousel-btn next-btn">&#10095;</button>
      </div>
      <!-- Indicadores ahora están debajo de la imagen -->
      <div class="indicators">
        ${this.images
          .map(
            (_, i) =>
              `<div class="indicator" data-index="${i}"></div>`
          )
          .join("")}
      </div>
    `;

    this.container = this.shadowRoot.querySelector(".carousel-container");
    this.prevBtn = this.shadowRoot.getElementById("prev");
    this.nextBtn = this.shadowRoot.getElementById("next");
    this.indicators = this.shadowRoot.querySelectorAll(".indicator");

    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    this.addSwipeListeners();
    this.updateIndicators(); // Para asegurar que los indicadores se muestren correctamente al cargar
    this.setActiveSlide(); // Establecer la primera imagen como activa
  }

  prevSlide() {
    this.index = this.index === 0 ? this.images.length - 1 : this.index - 1;
    this.updateCarousel();
    this.updateIndicators();
  }

  nextSlide() {
    this.index = this.index === this.images.length - 1 ? 0 : this.index + 1;
    this.updateCarousel();
    this.updateIndicators();
  }

  updateCarousel() {
    this.container.style.transform = `translateX(-${this.index * 100}%)`;
    this.setActiveSlide();
  }

  updateIndicators() {
    this.indicators.forEach((indicator, i) => {
      indicator.classList.remove("active");
      if (i === this.index) {
        indicator.classList.add("active");
      }
    });
  }

  setActiveSlide() {
    // Hacer que solo la imagen activa se desvanezca hacia adentro
    const items = this.shadowRoot.querySelectorAll(".carousel-item");
    items.forEach((item, i) => {
      if (i === this.index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  addSwipeListeners() {
    let startX = 0;
    this.shadowRoot
      .querySelector(".carousel-container")
      .addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });

    this.shadowRoot
      .querySelector(".carousel-container")
      .addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
          this.nextSlide();
        } else if (endX - startX > 50) {
          this.prevSlide();
        }
      });
  }
}

customElements.define("carrusel-works", CarruselWorks);
