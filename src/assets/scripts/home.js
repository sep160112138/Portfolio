try {
    window.addEventListener("DOMContentLoaded", init);
} catch (error) {};

function init() {
    navigateHomeMenu();
};

function navigateHomeMenu() {
    const aboutButton = document.querySelector('#about.home-menu');
    const projectsButton = document.querySelector('#projects.home-menu');
    const resumeButton = document.querySelector('#resume.home-menu')
    const contactButton = document.querySelector('#contact.home-menu');

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
}