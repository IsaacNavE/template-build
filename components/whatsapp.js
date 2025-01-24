class AppWhatsApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="https://wa.me/1234567890" target="_blank" class="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
          <i class="fab fa-whatsapp text-2xl"></i>
        </a>
      `;
  }
}

customElements.define("app-whatsapp", AppWhatsApp);
