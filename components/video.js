class AppVideo extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          .video-container {
            position: relative;
            width: 100%;
            max-width: 640px; /* Tamaño máximo del video */
            padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
            margin: 0 auto; /* Centrar el video */
            height: 0;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #000;
          }
          .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
          .video-section {
            background: #f9fafb;
            padding: 2rem 1rem;
            text-align: center;
          }
          .video-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 1rem;
          }
          .video-description {
            font-size: 1rem;
            color: #6b7280;
            margin-bottom: 2rem;
          }
        </style>
  
        <section class="video-section">
          <h2 class="video-title">Watch Our Video</h2>
          <p class="video-description">Learn more about us in this short video.</p>
          <div class="video-container">
            <video controls>
              <source src="./assets/video/mario.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define('app-video', AppVideo);
  