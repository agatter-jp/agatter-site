(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const s=document.getElementById("app"),c={};function p(e){for(const t in e)c[t]=e[t]}async function a(){const e=window.location.pathname,t=c[e]||c["/404"];if(s&&t){const o=await t.render();s.innerHTML="",typeof o=="string"?s.innerHTML=o:s.appendChild(o),t.after_render&&await t.after_render()}}function u(e){window.history.pushState({},e,window.location.origin+e),a()}function l(){window.addEventListener("popstate",a),document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",e=>{const t=e.target.closest("a");t&&t.matches('[href^="/"]')&&(e.preventDefault(),u(t.getAttribute("href")))}),a()})}const f={render:async()=>`
      <section id="hero">
        <h1>人と関わるという行為そのものを、<br>遊びに昇華させる。</h1>
        <p>agatterは、人と人の関係性を遊びに変えるブランドです。</p>
      </section>
      <section id="timeline">
        <h2>Latest Posts</h2>
        <a class="twitter-timeline" href="https://twitter.com/agatter_jp">Tweets by agatter_jp</a>
      </section>
    `,after_render:async()=>{if(window.twttr&&window.twttr.widgets){const e=document.getElementById("timeline");e&&window.twttr.widgets.load(e)}else{const e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}},m={render:async()=>`
      <section id="about">
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
    `,after_render:async()=>{}};function h(e){return`
    <div class="project-card">
      <div class="project-image">
        <p>（${e.image||"Image"}）</p>
      </div>
      <div class="project-description">
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <div class="status-tag">${e.status}</div>
      </div>
    </div>
  `}const g=[{title:"OMOTA",description:"人と人との会話から、新しい物語が生まれるボードゲーム。",status:"準備中",image:"Image"}],y={render:async()=>`
      <section id="projects">
        <h2>Projects</h2>
        <div class="projects-grid">
          ${g.map(h).join("")}
        </div>
      </section>
    `,after_render:async()=>{}},w={render:async()=>`
      <section>
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </section>
    `,after_render:async()=>{}},v={"/":f,"/about":m,"/projects":y,"/404":w};p(v);l();
