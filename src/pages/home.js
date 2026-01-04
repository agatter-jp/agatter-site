export default {
  render: async () => {
    return `
      <section id="hero">
        <h1>人と関わるという行為そのものを、<br>遊びに昇華させる。</h1>
        <p>agatterは、人と人の関係性を遊びに変えるブランドです。</p>
      </section>
      <section id="timeline">
        <h2>Latest Posts</h2>
        <a class="twitter-timeline" href="https://twitter.com/agatter_jp">Tweets by agatter_jp</a>
      </section>
    `;
  },
  after_render: async () => {
    // This function handles rendering the Twitter timeline in a SPA context.
    // When navigating between pages, the Twitter script might already be loaded.
    // If so, we need to manually tell it to find and render new widgets.
    if (window.twttr && window.twttr.widgets) {
      // If script is already loaded, just re-trigger the widget rendering.
      // We target the specific container to be more efficient.
      const timelineContainer = document.getElementById('timeline');
      if (timelineContainer) {
        window.twttr.widgets.load(timelineContainer);
      }
    } else {
      // If the script isn't loaded yet, create and append it.
      // The script will automatically scan the page and render widgets on its own once it loads.
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://platform.twitter.com/widgets.js";
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }
};
