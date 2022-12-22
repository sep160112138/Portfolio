class ProjectCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const article = document.createElement('article');
        const style = document.createElement('style');

        style.textContent = `
            img {
                width: 100%;
            }
            article {
                border: 1px solid black;
                border-radius: 8px;
                padding-left: 50px;
                padding-right: 50px;
            }
        `;

        shadow.append(style, article);
    };

    set data(data) {
        if (!data) return;

        const article = this.shadowRoot.querySelector('article');

        article.innerHTML = `
            <img class="${data.class}" src="${data.imgSrc}" alt="${data.imgAlt}">
            <p class="${data.class}">${data.projectName}</p>
        `;
    }
}

customElements.define('project-card', ProjectCard);