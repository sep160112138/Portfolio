try {
    window.addEventListener("DOMContentLoaded", init);
} catch (error) {};

function init() {
    populateProjects();
};

async function populateProjects() {
    const projectsFile = new Request('./reference/projects.json');
    const response = await fetch(projectsFile);
    const projects = await response.json();

    addProjectToDocument(projects);
}

function addProjectToDocument(projects) {
    if (!projects) {
        
        return;
    }
    let projectsContainer = document.querySelector('#container.project-main');
    projects.forEach((project) => {
        let projectCard = document.createElement('project-card');
        projectCard.data = project;
        projectsContainer.append(projectCard);
    });
}