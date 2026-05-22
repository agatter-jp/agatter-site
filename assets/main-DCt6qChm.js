(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const i=document.getElementById("app"),a={};function u(t){for(const e in t)a[e]=t[e]}async function c(){const t=window.location.pathname,e=a[t]||a["/404"];if(i&&e){const o=await e.render();i.innerHTML="",typeof o=="string"?i.innerHTML=o:i.appendChild(o),e.after_render&&await e.after_render()}}function l(t){window.history.pushState({},t,window.location.origin+t),c()}function p(){window.addEventListener("popstate",c),document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",t=>{const e=t.target.closest("a");e&&e.matches('[href^="/"]')&&(t.preventDefault(),l(e.getAttribute("href")))}),c()})}function f(t){return`
    <div class="project-card">
      <div class="project-image">
        ${t.image?`
          ${t.link?`<a href="${t.link}" target="_blank" rel="noopener noreferrer">`:""}
            <img src="${t.image}" alt="${t.title} image">
          ${t.link?"</a>":""}
        `:`
          ${t.link?`<a href="${t.link}" target="_blank" rel="noopener noreferrer">`:""}
            <p>（Image）</p>
          ${t.link?"</a>":""}
        `}
      </div>
      <div class="project-description">
        <h3>${t.title}</h3>
        <p>${t.description}</p>
        ${t.status?`<div class="status-tag">${t.status}</div>`:""}
      </div>
    </div>
  `}const m=[{title:"OMOTA",description:"シンプルなのに、毎回違う面白さのカードゲーム。",image:"/omota.png",link:"https://gamemarket.jp/game/187476"}],g={render:async()=>`
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
    `,after_render:async()=>{const t=()=>{window.twttr&&window.twttr.widgets&&window.twttr.widgets.load()};if(window.twttr)t();else if(!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')){const e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.async=!0,e.charset="utf-8",e.onload=t,document.head.appendChild(e)}}},h={render:async()=>`
      <section id="about">
        <h1>人と関わるという行為そのものを、<br>遊びに昇華させる。</h1>
        <p class="sub-purpose">agatterは、人と人の関係性を遊びに変えるブランドです。</p>
        <h2>About</h2>
        <p>
          人と関わることって、本来少し面倒で、恥ずかしくて、煩わしいものです。
          <br>だからこそ、多くの人は関係の一歩手前で立ち止まってしまいます。
        </p>
        <p>
          agatter は、その面倒さや気まずさを人に押し付けるのではなく、
          <br>仕掛けや仕組みの力でそっと取り除いていきます。
        </p>
        <p>
          緩く、自由につながれる場を通したとき、
          <br>人と関わるという行為は、驚くほど楽しいものに変わる。
        </p>
        <p>
          そんな世界をつくり続けたいと思います。
        </p>
      </section>
    `,after_render:async()=>{}},w={render:async()=>`
      <section>
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </section>
    `,after_render:async()=>{}},y={"/":g,"/about":h,"/404":w};u(y);p();
