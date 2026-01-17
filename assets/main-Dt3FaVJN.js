(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const s=document.getElementById("app"),c={};function p(t){for(const e in t)c[e]=t[e]}async function a(){const t=window.location.pathname,e=c[t]||c["/404"];if(s&&e){const n=await e.render();s.innerHTML="",typeof n=="string"?s.innerHTML=n:s.appendChild(n),e.after_render&&await e.after_render()}}function u(t){window.history.pushState({},t,window.location.origin+t),a()}function l(){window.addEventListener("popstate",a),document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",t=>{const e=t.target.closest("a");e&&e.matches('[href^="/"]')&&(t.preventDefault(),u(e.getAttribute("href")))}),a()})}function f(t){return`
    <div class="project-card">
      <div class="project-image">
        ${t.image?`<img src="${t.image}" alt="${t.title} image">`:"<p>（Image）</p>"}
      </div>
      <div class="project-description">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <div class="status-tag">${t.status}</div>
      </div>
    </div>
  `}const m=[{title:"OMOTA",description:"シンプルなのに、毎回違う面白さのカードゲーム。",status:"準備中",image:"/omota.png"}],h={render:async()=>`
      <section id="products">
        <h2>Products</h2>
        <div class="projects-grid">
          ${m.map(f).join("")}
        </div>
      </section>
      <section id="timeline">
        <h2>Latest Posts</h2>
        <a class="twitter-timeline" href="https://x.com/agatter_jp">Tweets by agatter_jp</a>
      </section>
    `,after_render:async()=>{const t=()=>{window.twttr&&window.twttr.widgets&&window.twttr.widgets.load()};if(window.twttr)t();else if(!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')){const e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.async=!0,e.charset="utf-8",e.onload=t,document.head.appendChild(e)}}},g={render:async()=>`
      <section id="about">
        <h1>人と関わるという行為そのものを、<br>遊びに昇華させる。</h1>
        <p class="sub-purpose">agatterは、人と人の関係性を遊びに変えるブランドです。</p>
        <h2>About</h2>
        <p>
          人と関わることは、本来少し面倒で、恥ずかしくて、煩わしい。
          <br>だからこそ、多くの人は関係の一歩手前で立ち止まってしまう。
        </p>
        <p>
          agatter は、その面倒さや気まずさを人に押し付けるのではなく、
          <br>仕掛けや仕組みの力でそっと取り除いていく。
        </p>
        <p>
          緩く、自由につながれる場を通したとき、
          <br>人と関わるという行為は、驚くほど楽しいものに変わる。
        </p>
        <p>
          私たちは、そんな世界をつくり続ける。
        </p>
      </section>
    `,after_render:async()=>{}},w={render:async()=>`
      <section>
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </section>
    `,after_render:async()=>{}},y={"/":h,"/about":g,"/404":w};p(y);l();
