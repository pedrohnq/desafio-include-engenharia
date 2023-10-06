class IncludeProfilePage extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <style>
                img {
                    width: 200px;
                }
                
                .include-doc {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: justify;
                    justify-content: center;
                    width: 100%;
                }


                .include-doc p {
                    width: 50%;
                    font-size: 1.5em;
                }

            </style>

            <div class="include-doc">
                <img src="assets/images/include2.png"/>
                <h2>O que é a Include Engenharia</h2>
                <p>
                    A Include Engenharia é uma empresa júnior do Centro de Tecnologia da Universidade 
                    Federal do Rio Grande do Norte dedicada à promoção da vivência empresarial 
                    aos estudantes dos cursos de Ciências e Tecnologia, Engenharia da Computação, 
                    Engenharia Mecatrônica e Engenharia de Telecomunicações
                </p>
                <h2>Serviços</h2>
                <p>
                    A Include Engenharia oferece serviços de otimização de Wi-fi, desenvolvimento de
                    sites e sistemas web, desenvolvimento de aplicativos mobile e automação residencial.
                </p>
            </div>
            
        `

    }
}


customElements.define('include-profile-page', IncludeProfilePage);