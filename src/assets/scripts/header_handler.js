try {
    window.addEventListener("DOMContentLoaded", init);
} catch (error) {};

function init() {
    loadMenu();
    navigateMenu();
}

function loadMenu() {
    const headerContainer = document.getElementById('header');
    headerContainer.innerHTML = `
        <div class="header-menu" id="container">
            <table class="header-menu">
                <tr class="header-menu">
                    <td class="header-menu">About</td>
                    <td class="header-menu">Projects</td>
                    <td class="header-menu">Resume</td>
                    <td class="header-menu">Contact</td>
                </tr>
            </table>
        </div>
        <div class="header-title" id="container">
            <h2 class="header-title">Christopher Han</h2>
        </div>
        <div class="header-icons" id="container">
            <table class="header-icons">
                <tr class="header-icons">
                    <td class="header-icons">
                        <a href="https://www.linkedin.com/in/christopher-han-737a74235/">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="header-icons">
                        <a href="https://github.com/sep160112138">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </td>
                    <td class="header-icons">
                        <a href="mailto:christopher.bo.han2001@gmail.com">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    `;

    const headerMenu = document.querySelectorAll('table.header-menu');
    const headerContent = document.querySelectorAll('table td.header-menu');

    for (let i = 0; i < headerMenu.length; i++) {
        headerMenu[i].style = `
            border-collapse: collapse;
            border-style: hidden;
        `;
    }
    for (let i = 0; i < headerContent.length; i++) {
        headerContent[i].style = `
            border: 1px solid black;
        `;
    }
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