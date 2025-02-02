class VideosWork extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <style>
            .video-container {
              display: flex;
              gap: 20px;
              padding: 20px;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              overflow-x: auto;
            }

            .video-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 300px;
              height: 500px;
              border-radius: 10px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }

            .video-item video {
              width: 100%;
              height: 100%;
              object-fit: contain;
              border-radius: 10px;
            }

            .video-description {
              padding: 15px;
              text-align: center;
              background-color: rgba(0, 0, 0, 0.7);
              color: white;
              width: 100%;
              position: absolute;
              bottom: 0;
              left: 0;
              font-size: 14px;
              display: none; /* Ocultamos el texto por defecto */
            }

            .video-item:hover .video-description {
              display: block; /* Aparece cuando el video se pasa por encima */
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
          </style>

          <div class="video-container">
            <!-- Video 1 -->
            <div class="video-item">
              <video autoplay muted loop>
                <source src="./assets/video/video1.mp4" type="video/mp4">
                Tu navegador no soporta el formato de video.
              </video>
              
            </div>

            <!-- Video 2 -->
            <div class="video-item">
              <video autoplay muted loop>
                <source src="./assets/video/video2.mp4" type="video/mp4">
                Tu navegador no soporta el formato de video.
              </video>
             
            </div>

            <!-- Video 3 -->
            <div class="video-item">
              <video autoplay muted loop>
                <source src="./assets/video/video3.mp4" type="video/mp4">
                Tu navegador no soporta el formato de video.
              </video>
              
            </div>
          </div>

          <button class="more-btn">Ver más</button>
        `;
    }
}

customElements.define('videos-work', VideosWork);
