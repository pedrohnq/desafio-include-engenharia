class ProfileCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .perfil-card {
                    width: 500px;
                    background-color: #111;
                    border: 1px solid #ccc;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    margin: 0 auto;
                    color: #fff;
                }

                .perfil-card:hover {
                    transform: scale(1.01);
                }
                
                .capa img {
                    width: 100%;
                    height: auto;
                }
                
                .foto-perfil img {
                    width: 250px;
                    height: 250px;
                    border-radius: 50%;
                    margin-top: -150px;
                    border: 4px solid #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }
                
                .informacoes {
                    padding: 20px;
                }
                
                .informacoes h2 {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                }
                
                .informacoes p {
                    font-size: 1.2em;
                }
            </style>
            <div class="perfil-card">
                <div class="capa">
                    <img src="../assets/images/oppenheimer2.jpg" alt="Capa do perfil">
                </div>
                <div class="foto-perfil">
                    <img src="../assets/images/perfil.jpg" alt="Foto de perfil">
                </div>
                <div class="informacoes">
                    <h2>Pedro Henrique</h2>
                    <p>
                    Me chamo Pedro, tenho 22 anos e sou estudante do curso
                    de Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte.
                    </p>
                    <strong>Email:</strong> pedro.santos.708@ufrn.edu.com
                </div>
            </div>
        `;
    }
}

customElements.define('profile-card', ProfileCard);