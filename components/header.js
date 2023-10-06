// import css

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
            .header {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                min-height: 8vh;
                color: #fff;
                padding: 0 5%;
                margin: 0;
                box-sizing: border-box;
            }


            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                margin: 0;
                padding: 0;
            }

            nav ul {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                list-style: none;
                width: 100%;
            }

            nav ul li a {
                color: #fff;
                text-decoration: none;
                font-size: 1.2rem;
                padding: 1rem;
            }

            nav ul li a:hover {
                color: #ccc;
                transition: color 0.3s ease-in-out;
            }

            .logo {
                font-size: 1.5rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

        </style>

        <div class="header">
            <h1 class="logo">Desafio</h1>
            <nav>
                <ul class="nav-links">
                    <li><a href="?page=posts">Posts</a></li>
                    <li><a href="?page=include_profile">Include Engenharia</a></li>
                    <li><a href="?page=tech_profile">Perfil técnico</a></li>
                    <li><a href="?page=personal_profile">Perfil pessoal</a></li>
                </ul>
            </nav>
        </div>

        
        `;
    }
}


customElements.define('header-component', Header);
