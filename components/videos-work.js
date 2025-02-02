class VideosWork extends HTMLElement {
  constructor() {
    super();
    this.currentVideoIndex = 0;
    this.videos = [
      "./assets/video/video1.mp4",
      "./assets/video/video2.mp4",
      "./assets/video/video3.mp4",
    ];
    this.isModalOpen = false;
    this.startX = 0;
    this.endX = 0;
  }

  connectedCallback() {
    this.render();
    this.addTouchEvents();
  }

  render() {
    this.innerHTML = `
      <style>
        .carousel-container-padre {
          margin: 5%;
          text-align: center;
        }
        
        .carousel-container {
          position: relative;
          width: 100%;
          height: 85vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .background-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 85%;
          object-fit: cover;
          opacity: 0.2;
          z-index: -1;
        }

        .video-item {
          position: absolute;
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .video-item video {
          margin-top: 2%;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
        }

        .nav-arrow {
          position: absolute;
          top: 35%;
          background: red;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 50%;
          font-size: 24px;
          z-index: 5;
          transition: all 0.3s ease;
        }

        .nav-arrow.left {
          left: 20%;
          background-color: red;
        }

        .nav-arrow.right {
          right: 20%;
          background-color: red;

        }

        .nav-arrow:hover {
          border: 2px solid white;
          background-color: red;
        }

        .indicator-container {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .indicator {
          width: 20px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 50px;
          cursor: pointer;
        }

        .indicator.active {
          background-color: red;
        }

        .more-btn {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          background-color: #FF0000;
          color: white;
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .more-btn:hover {
          background-color: #d40000;
        }

        .section-title {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: white;
          margin: 20px 0;
        }

        /* Modal */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal.open {
          display: flex;
        }

        .modal-content {
          position: relative;
          width: 90%;
          max-width: 1000px;
          height: 90%;
          background-color: black;
          border-radius: 10px;
        }

        .modal-content video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
        }

        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: red;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 50%;
        }

        .modal-close:hover {
          background-color: darkred;
        }

        /* Media Query para ocultar flechas en pantallas pequeñas */
        @media (max-width: 768px) {
          .nav-arrow {
            display: none;
          }
        }
      </style>

      <div class="section-title">
        <h1>Estos son nuestros trabajos</h1>
      </div>

      <div class="carousel-container-padre">
        <div class="carousel-container">
          <video class="background-video" autoplay muted loop>
            <source src="${
              this.videos[this.currentVideoIndex]
            }" type="video/mp4">
            Tu navegador no soporta el formato de video.
          </video>

          <div class="video-item" onclick="document.querySelector('videos-work').openModal(event)">
            <video autoplay muted loop>
              <source src="${
                this.videos[this.currentVideoIndex]
              }" type="video/mp4">
              Tu navegador no soporta el formato de video.
            </video>
          </div>

          <button class="nav-arrow left" onclick="document.querySelector('videos-work').prevVideo()">&#10094</button>
          <button class="nav-arrow right" onclick="document.querySelector('videos-work').nextVideo()">&#10095</button>
        </div>

        <!-- Contenedor de los indicadores ahora separado y centrado -->
        <div class="indicator-container">
          ${this.videos
            .map(
              (video, index) => `
                <div class="indicator ${
                  index === this.currentVideoIndex ? "active" : ""
                }" onclick="document.querySelector('videos-work').goToVideo(${index})"></div>
              `
            )
            .join("")}
        </div>
      </div>

      <button class="more-btn">Ver más</button>

      <!-- Modal -->
      <div class="modal" id="videoModal">
        <div class="modal-content">
          <video controls>
            <source src="${
              this.videos[this.currentVideoIndex]
            }" type="video/mp4">
            Tu navegador no soporta el formato de video.
          </video>
          <button class="modal-close" onclick="document.querySelector('videos-work').closeModal()">X</button>
        </div>
      </div>
    `;
  }

  prevVideo() {
    this.currentVideoIndex =
      this.currentVideoIndex === 0
        ? this.videos.length - 1
        : this.currentVideoIndex - 1;
    this.updateCarousel();
  }

  nextVideo() {
    this.currentVideoIndex =
      this.currentVideoIndex === this.videos.length - 1
        ? 0
        : this.currentVideoIndex + 1;
    this.updateCarousel();
  }

  goToVideo(index) {
    this.currentVideoIndex = index;
    this.updateCarousel();
  }

  openModal(event) {
    // Verificamos que se haya hecho clic en el video
    if (event.target.tagName === "VIDEO") {
      document.getElementById("videoModal").classList.add("open");
    }
  }

  closeModal() {
    document.getElementById("videoModal").classList.remove("open");
  }

  updateCarousel() {
    this.render();
  }

  // Agregar eventos para gestos de deslizamiento
  addTouchEvents() {
    const carousel = this.querySelector(".carousel-container");

    carousel.addEventListener("touchstart", (event) => {
      this.startX = event.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (event) => {
      this.endX = event.changedTouches[0].clientX;
      this.handleSwipe();
    });
  }

  handleSwipe() {
    if (this.startX - this.endX > 50) {
      // Deslizar hacia la izquierda
      this.nextVideo();
    } else if (this.endX - this.startX > 50) {
      // Deslizar hacia la derecha
      this.prevVideo();
    }
  }
}

customElements.define("videos-work", VideosWork);
