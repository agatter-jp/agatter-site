import { ProjectCard } from '../components/ProjectCard.js';

// Product data
const products = [
  {
    title: 'OMOTA',
    description: 'シンプルなのに、毎回違う面白さのカードゲーム。',
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
        <a class="twitter-timeline" href="https://x.com/agatter_jp">Tweets by agatter_jp</a>
      </section>
    `;
  },
  after_render: async () => {
    const loadTwitterWidget = () => {
      // Ensure the twttr object and its widgets property are available.
      if (window.twttr && window.twttr.widgets) {
        // Scans the entire document for unregistered widgets and renders them.
        window.twttr.widgets.load();
      }
    };

    // If the Twitter script is not yet loaded, create a script tag,
    // and set its onload callback to the function that renders the widget.
    if (!window.twttr) {
      // Avoid adding the script multiple times if after_render is called quickly.
      if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        script.onload = loadTwitterWidget;
        document.head.appendChild(script);
      }
    } else {
      // If the script is already loaded, just call the load function.
      loadTwitterWidget();
    }
  }
};