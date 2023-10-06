class TechProfilePage extends HTMLElement {
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

                .tech-cards {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

            </style>
            <h1>Meu perfil técnico</h1>
            <div class="cards">
                <generic-card 
                    image="../assets/images/formatura.jpeg" 
                    title="Formação"
                    description="
                        Estudante do curso de Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte
                        <br>
                        Técnico em informática pelo IFRN - Campus Caicó
                    "
                /></generic-card>
                <div class="tech-cards">
                    <generic-card
                        title="Linguagens e frameworks" 
                        description="
                            Python e Django (Django Rest Framework)
                        "
                    ></generic-card>
                    <generic-card
                        title="Experiências"
                        description="
                            Engenheiro de Software Pleno @ Closeer | 2021 - Atualmente <br>
                            - Python, Django (Django Rest Framework)
                        "
                    ></generic-card>
                    <generic-card
                        title="Áreas de interesse"
                        description="
                            Desenvolvimento web, Data Science, Machine Learning, Deep Learning,
                            Gestão de projetos, Gestão de pessoas, Gestão de processos
                        "
                    ></generic-card>
                    <generic-card
                        title="Porquê devo entrar na Include?"
                        description="
                            Acredito que a Include é uma empresa que tem muito a me oferecer,
                            e que também posso contribuir com a empresa, pois sou uma pessoa
                            que gosta de aprender e de desafios, e acredito que a Include
                            é o lugar certo para isso.
                        "
                    ></generic-card>
                    
                </div>
            </div>
        `;
    }
}

customElements.define('tech-profile-page', TechProfilePage);