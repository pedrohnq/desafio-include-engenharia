class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer style="margin-top: auto">Designed and developed by Pedro Henrique</footer>
        `;
    }
}

customElements.define('footer-component', Footer);