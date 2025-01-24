class AppFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="bg-dark text-white py-6">
          <div class="container mx-auto text-center">
            <div class="flex justify-center space-x-4 mb-4">
              <a href="https://www.instagram.com" class="text-white text-2xl hover:text-gray-500"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com" class="text-white text-2xl hover:text-gray-500"><i class="fab fa-facebook"></i></a>
            </div>
            <p>&copy; 2025 BuildPro Construction. All Rights Reserved.</p>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('app-footer', AppFooter);
  