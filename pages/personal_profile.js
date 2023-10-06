class PersonalProfilePage extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .cards {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                .coisas-pessoais {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

            </style>
            <h1>Meu perfil pessoal</h1>
            <div class="cards">
                <profile-card></profile-card>
                <div class="coisas-pessoais">
                    <generic-card
                        title="Meus hobbies" 
                        description="
                            Tocar violão, ver filmes e séries, ver futebol, 
                            praia, sair com amigos, caminhar/correr, academia e conhecer lugares novos
                        "
                    ></generic-card>
                    <generic-card
                        title="Estilo musical"
                        description="
                            Rap, reggae, rock, MPB...
                        "
                    ></generic-card>
                    <generic-card
                        title="Time do coração"
                        description="
                            Flamengo
                        "
                    ></generic-card>
                </div>
            </div>
        `;
    }
}

customElements.define('personal-profile-page', PersonalProfilePage);