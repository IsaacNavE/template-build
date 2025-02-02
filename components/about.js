class AppAbout extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
          <style>
              /* Hover effect for underline */
              .hover-line::after {
                  content: '';
                  display: block;
                  width: 0;
                  height: 2px;
                  background: #ff0000; /* Red */
                  transition: width 0.3s ease;
                  margin-top: 5px;
              }
              .hover-line:hover::after {
                  width: 100%;
              }

              /* Container and Layout */
              .container {
                  max-width: 1200px;
                  margin: 0 auto;
                  padding: 0 20px;
              }

              section {
                  background-color: #f4f4f4;
                  padding: 60px 20px;
                  opacity: 0;
                  animation: fadeIn 1.5s forwards;
              }

              /* Animation for section appearance */
              @keyframes fadeIn {
                  from {
                      opacity: 0;
                  }
                  to {
                      opacity: 1;
                  }
              }

              .content {
                  background-color: #ffffff;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
                  padding: 20px;
                  display: flex;
                  gap: 40px;
                  align-items: center;
                  transition: box-shadow 0.3s ease;
              }

              .content:hover {
                  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
              }

              .image {
                  width: 100%;
                  max-width: 300px;
                  border-radius: 8px;
                  object-fit: cover;
              }

              .text {
                  flex: 1;
                  color: #333333;
                  font-family: Arial, sans-serif;
              }

              h2 {
                  font-size: 2.5rem;
                  font-weight: bold;
                  color: #000000;
                  margin-bottom: 15px;
              }

              p {
                  font-size: 1.1rem;
                  color: #555555;
                  line-height: 1.6;
                  margin-bottom: 20px;
                  transition: transform 0.3s ease;
              }

              p:hover {
                  transform: translateX(5px);
              }

              /* Keywords with specific color effects */
              .keyword {
                  color: #ff0000; /* Red */
                  font-weight: bold;
                  transition: color 0.3s ease;
              }

              .keyword:hover {
                  color: #000000; /* Change color to black when hovered */
              }

              /* Responsive adjustments */
              @media (max-width: 768px) {
                  .content {
                      flex-direction: column;
                      align-items: center;
                      text-align: center;
                  }

                  .image {
                      max-width: 250px;
                      margin-bottom: 20px;
                  }

                  h2 {
                      font-size: 2rem;
                  }

                  p {
                      font-size: 1rem;
                  }
              }

              @media (max-width: 480px) {
                  section {
                      padding: 40px 20px;
                  }

                  .content {
                      gap: 20px;
                  }

                  h2 {
                      font-size: 1.8rem;
                  }

                  p {
                      font-size: 0.95rem;
                  }
              }
          </style>

          <section>
              <div class="container">
                  <div class="content">
                      <!-- Image -->
                      <img src="./assets/images/logo-black.jpg" alt="About Us" class="image">

                      <!-- Text -->
                      <div class="text">
                          <h2 class="hover-line">About Us</h2>
                          <p>We are a full remodeling construction company specializing in <span class="keyword">drywall</span>, patching, <span class="keyword">painting</span>, <span class="keyword">tile</span>, <span class="keyword">wood flooring</span>, <span class="keyword">vinyl flooring</span>, <span class="keyword">epoxy floors</span> (metallic and flake), <span class="keyword">plumbing</span>, electricity, framing, <span class="keyword">wood fences</span>, <span class="keyword">metal fences</span>, <span class="keyword">decks</span>, concrete, and more. Whether small or large projects, we prioritize excellence and delivering the best results every time.</p>
                          <p>The people behind Arce Liberty LLC have been remodeling Chicagoland for over five years. Our commitment to excellence sets us apart. Quality, price, and service are at the core of everything we do, ensuring that we exceed our customers' expectations from the first meeting. We offer factory-direct discounts, saving you 30-50% on materials without compromising on quality. Choose Arce Liberty LLC for top-of-the-line products, expert craftsmanship, and unparalleled service.</p>
                      </div>
                  </div>
              </div>
          </section>
      `;
  }
}

customElements.define('app-about', AppAbout);
