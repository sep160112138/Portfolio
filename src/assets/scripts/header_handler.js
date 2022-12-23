try {
    window.addEventListener("DOMContentLoaded", init);
} catch (error) {};

function init() {
    loadMenu();
    navigateMenu();
}

function loadMenu() {

    const header = document.getElementById('header');
    
    header.innerHTML = `
        <div class="container">
            <div class="header-menu" id="container">
                <table class="header-menu">
                    <tr class="header-menu">
                        <td class="header-menu" id="about">About</td>
                        <td class="header-menu" id="projects">Projects</td>
                        <td class="header-menu" id="resume">Resume</td>
                        <td class="header-menu" id="contact">Contact</td>
                    </tr>
                </table>
            </div>
            <div class="header-title" id="container">
                <h2 class="header-title" id="title">Christopher Han</h2>
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
        </div>
    `;

    const headerContainer = document.querySelector('#header > .container');
    const headerMenuContainer = document.querySelector('#container.header-menu');
    const headerMenu = document.querySelectorAll('table.header-menu');
    const headerContent = document.querySelectorAll('table td.header-menu');
    const headerTitle = document.querySelector('#title.header-title');
    const headerIconsContainer = document.querySelector('#container.header-icons');
    const headerIconsTable = document.querySelector('table.header-icons');
    const headerIconsData = document.querySelectorAll('td.header-icons > a');
    const headerIcons = document.querySelectorAll('.fa');

    header.style = `
        background-color: white;
        box-shadow: 0px 1px 50px black;
        left: 0;
        position: fixed;
        top: 0px;
        width: 100%;
    `;

    headerContainer.style = `
        align-items: center;
        display: flex;
        justify-content:space-between;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
    `;

    headerMenuContainer.style = `
        width: 250px;
    `;

    for (let i = 0; i < headerMenu.length; i++){
        headerMenu[i].style = `
            border-collapse: collapse;
            border-style: hidden;
            width: 100%;
        `;
    }

    for (let i = 0; i < headerContent.length; i++) {
        headerContent[i].style = `
            border: 1px solid black;
        `;
    }

    headerTitle.style = `
        margin: 0px;
    `;

    headerIconsContainer.style = `
        width: 250px;
    `;

    headerIconsTable.style = `
        padding-left: 100px;
        padding-right: 0px;
        width: 100%;
        
    `;

    for (let i = 0; i < headerIconsData.length; i++) {
        headerIconsData[i].style = `
            float: right;
        `;
    }

    for (let i = 0; i < headerIcons.length; i++) {
        headerIcons[i].style = `
            color: rgb(0, 115, 255);
        `;
    }

}

function navigateMenu() {
    const aboutButton = document.querySelector('#about.header-menu');
    const projectsButton = document.querySelector('#projects.header-menu');
    const resumeButton = document.querySelector('#resume.header-menu')
    const contactButton = document.querySelector('#contact.header-menu');
    const homeButton = document.querySelector('#title.header-title');

    aboutButton.addEventListener('click', function() {
        location.href = 'about.html';
    })
    projectsButton.addEventListener('click', function() {
        location.href = 'projects.html';
    });
    resumeButton.addEventListener('click', function() {
        location.href = 'resume.html'
    });
    contactButton.addEventListener('click', function() {
        location.href = 'contact.html';
    });

    homeButton.addEventListener('click', function() {
        location.href = 'index.html';
    });
}