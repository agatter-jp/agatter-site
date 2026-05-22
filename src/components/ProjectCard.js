export function ProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-image">
        ${project.image ? `
          ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">` : ''}
            <img src="${project.image}" alt="${project.title} image">
          ${project.link ? `</a>` : ''}
        ` : `
          ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">` : ''}
            <p>（Image）</p>
          ${project.link ? `</a>` : ''}
        `}
      </div>
      <div class="project-description">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${project.status ? `<div class="status-tag">${project.status}</div>` : ''}
      </div>
    </div>
  `;
}