class ProjectCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const article = document.createElement('article');
        const style = document.createElement('style');

        style.textContent = `
            img {
                width: 100%;
                border-radius: 20px;
            }
            article {
                /*border: 1px solid black;*/
                border-radius: 8px;
                padding-left: 20px;
                padding-right: 20px;
                padding-bottom: 20px
            }
            h3 {
                font-weight: 500;
                font-size: 24px;
            }
        `;

        shadow.append(style, article);
    };

    set data(data) {
        if (!data) return;

        const article = this.shadowRoot.querySelector('article');

        article.innerHTML = `
            <img class="${data.class}" src="${data.imgSrc}" alt="${data.imgAlt}">
            <h3 class="${data.class}">${data.projectName}</p>
        `;
    }
}

customElements.define('project-card', ProjectCard);