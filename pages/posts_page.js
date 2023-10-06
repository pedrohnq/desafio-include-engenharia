class PostsPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .posts {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    text-align: justify;
                    width: 100%;
                }

                .posts generic-card {
                    margin-top: 15px;
                }

                .posts img {
                    width: 100%;
                }

            </style>
            <h1>Posts</h1>
            <div class="posts">
                <generic-card
                    image="assets/images/oppenheimer.jpg"
                    title="Minha opinião sobre o filme Oppenheimer (2023)"
                    description="
                        O filme é muito bom, traz uma visão muito interessante sobre a vida de um dos
                        maiores cientistas da história, Robert Oppenheimer, que foi o responsável pela
                        criação da bomba atômica.
                        Apesar de ser longo, acho que valeu a pena assistir as 3h de filme, pois
                        é uma história muito interessante e que nos faz refletir sobre a importância
                        da ética na ciência.
                        Ainda mais no contexto de estudantes de engenharia, que estão em uma área
                        que pode impactar muito a vida das pessoas, é importante que tenhamos
                        consciência dos impactos que nossas ações podem ter.
                    "
                ></generic-card>
                <generic-card
                    image="assets/images/barbie.webp"
                    title="Minha opinião sobre o filme da Barbie (2023)"
                    description="
                        Contrariando algumas expectativas, Barbie é um filme que aborda temas
                        importantes no contexto das lutas das mulheres por equidade.
                        A história é muito interessante, e acho que vale a pena assistir, pois
                        nos faz refletir sobre a importância da representatividade feminina
                        em todos os âmbitos da sociedade, inclusive na ciência.
                    "
                ></generic-card>
                <generic-card
                    image="assets/images/oppenheimer2.webp"
                    title="Quem foi Oppenheimer?"
                    description="
                    J. Robert Oppenheimer foi um físico teórico notável que liderou o 
                    Projeto Manhattan durante a Segunda Guerra Mundial. Sua carreira acadêmica 
                    prévia incluiu contribuições significativas para a física quântica. No entanto, 
                    sua associação com o projeto trouxe controvérsias e desafios legais, 
                    ilustrando o dilema ético enfrentado pelos cientistas em contextos de 
                    conflito.
                    "
                ></generic-card>

            </div>
        `
    }
}

customElements.define('posts-page', PostsPage);