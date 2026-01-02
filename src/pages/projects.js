import { ProjectCard } from '../components/ProjectCard.js';

// Project data
const projects = [
  {
    title: 'OMOTA',
    description: '人と人との会話から、新しい物語が生まれるボードゲーム。',
    status: '準備中',
    image: 'Image'
  }
  // Add more projects here in the future
];

export default {
  render: async () => {
    const projectCards = projects.map(ProjectCard).join('');
    return `
      <section id="projects">
        <h2>Projects</h2>
        <div class="projects-grid">
          ${projectCards}
        </div>
      </section>
    `;
  },
  after_render: async () => {}
};