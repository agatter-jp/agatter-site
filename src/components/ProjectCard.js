export function ProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-image">
        <p>（${project.image || 'Image'}）</p>
      </div>
      <div class="project-description">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="status-tag">${project.status}</div>
      </div>
    </div>
  `;
}
