import { ProjectCard } from '../components/ProjectCard.js';

// Product data
const products = [
  {
    title: 'OMOTA',
    description: '人と人との会話から、新しい物語が生まれるボードゲーム。',
    status: '準備中',
    image: '/omota.png'
  }
];

export default {
  render: async () => {
    const productCards = products.map(ProjectCard).join('');
    return `
      <section id="products">
        <h2>Products</h2>
        <div class="projects-grid">
          ${productCards}
        </div>
      </section>
      <section id="timeline">
        <h2>Latest Posts</h2>
        <a class="twitter-timeline" href="https://twitter.com/agatter_jp">Tweets by agatter_jp</a>
      </section>
    `;
  },
  after_render: async () => {
    if (window.twttr && window.twttr.widgets) {
      const timelineContainer = document.getElementById('timeline');
      if (timelineContainer) {
        window.twttr.widgets.load(timelineContainer);
      }
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://platform.twitter.com/widgets.js";
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }
};