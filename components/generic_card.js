class GenericCard extends HTMLElement {
    constructor() {
        super();
        this.data = {
            title: '',
            description: '',
            image: '',
        }
    }

    static get observedAttributes() {
        return ['title', 'description', 'image'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.data[name] = newValue;
        this.updateContent();
    }

    connectedCallback() {
        this.updateContent();
    }

    updateContent() {
        this.innerHTML = `
            <style>
                .card {
                    width: 100%;
                    max-width: 550px;
                    background-color: #111;
                    border: 1px solid #ccc;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    margin: 0 10px;
                    padding: 5px;
                    color: #fff;
                    transition: opacity 0.3s ease-in-out;
                }

                .card:hover {
                    transform: scale(1.01);
                }

                .card img {
                    width: 100%;
                    height: auto;
                }

                iframe {
                    width: 80%;
                }
                
            </style>
        
            <div class="card">
                ${this.data.image === '' ? '' : `
                    <img src="${this.data.image}" />
                `}
                <h3>${this.data.title}</h3>
                <p>${this.data.description}</p>
                ${this.data.title === 'Estilo musical' ? `
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/712U4iyvEqCjBkWfnKvfqg?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                ` : ''
            }
            </div>
        `;
    }
}

customElements.define('generic-card', GenericCard);
                