(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const s=document.getElementById("app"),c={};function u(t){for(const e in t)c[e]=t[e]}async function a(){const t=window.location.pathname,e=c[t]||c["/404"];if(s&&e){const o=await e.render();s.innerHTML="",typeof o=="string"?s.innerHTML=o:s.appendChild(o),e.after_render&&await e.after_render()}}function p(t){window.history.pushState({},t,window.location.origin+t),a()}function l(){window.addEventListener("popstate",a),document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",t=>{const e=t.target.closest("a");e&&e.matches('[href^="/"]')&&(t.preventDefault(),p(e.getAttribute("href")))}),a()})}function f(t){return`
    <div class="project-card">
      <div class="project-image">
        <p>（${t.image||"Image"}）</p>
      </div>
      <div class="project-description">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        <div class="status-tag">${t.status}</div>
      </div>
    </div>
  `}const m=[{title:"OMOTA",description:"人と人との会話から、新しい物語が生まれるボードゲーム。",status:"準備中",image:"Image"}],h={render:async()=>`
      <section id="products">
        <h2>Products</h2>
        <div class="projects-grid">
          ${m.map(f).join("")}
        </div>
      </section>
      <section id="timeline">
        <h2>Latest Posts</h2>
        <a class="twitter-timeline" href="https://twitter.com/agatter_jp">Tweets by agatter_jp</a>
      </section>
    `,after_render:async()=>{if(window.twttr&&window.twttr.widgets){const t=document.getElementById("timeline");t&&window.twttr.widgets.load(t)}else{const t=document.createElement("script");t.async=!0,t.src="https://platform.twitter.com/widgets.js",t.charset="utf-8",document.body.appendChild(t)}}},g={render:async()=>`
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
    `,after_render:async()=>{}},y={"/":h,"/about":g,"/404":w};u(y);l();
