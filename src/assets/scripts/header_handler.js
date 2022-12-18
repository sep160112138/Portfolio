try {
    window.addEventListener("DOMContentLoaded", init);
} catch (error) {};

function init() {
    loadMenu();
    navigateMenu();
}

function loadMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = `
        <div id="menu-home">
            <p>Home</p>
        </div>
        <div id="menu-projects">
            <p>Projects</p>
        </div>
        <div id="menu-contact">
            <p>Contact</p>
        </div>
        `;
    menuContainer.style = `
        background-color: beige;
        width = 100%;
        text-align: center;
        display: flex;
        padding-left: 40%;
        padding-right: 40%;
        justify-content: space-between;
    `;
}

function navigateMenu() {
    const homeButton = document.getElementById('menu-home');
    const projectsButton = document.getElementById('menu-projects');
    const contactButton = document.getElementById('menu-contact');

    homeButton.addEventListener('click', function() {
        location.href = 'index.html';
    })
    projectsButton.addEventListener('click', function() {
        location.href = 'projects.html';
    });
    contactButton.addEventListener('click', function() {
        location.href = 'contact.html';
    });
}