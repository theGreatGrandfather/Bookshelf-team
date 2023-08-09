!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("eVdBp");const o=e=>e.map((({book_image:e,title:t,author:n,_id:a,list_name:o,description:s,buy_links:i})=>`\n      <li class="book-item" class="_list  "\n        data-title="${t}"\n        data-image="${e}"\n        data-author="${n}"\n        data-listName="${o}"\n        data-description="${s}"\n        data-linkNameAmazon="${i[0].name}"\n        data-linkUrlAmazon="${i[0].url}"\n        data-linkNameApple="${i[1].name}"\n        data-linkUrlApple="${i[1].url}"\n        data-linkNameBarnes="${i[2].name}"\n        data-linkUrlBarnes="${i[2].url}"\n      >\n        <a href="#" class="_link" class="book-item" data-id="${a}">\n          <div class="thumb">\n            <img class="lazyload" src="" data-src="${e}" alt="${t}" loading="lazy"/>\n            <div class="overlay">\n              <p class="overlay-text">quick view </p>\n            </div>\n          </div>\n          <h4 class="book-title">${t}</h4>\n          <p class="book-author">${n}</p>\n        </a>\n      </li>\n    `)).join("");var s=a("dIxxU"),i=a("6JpON");const l="https://books-backend.p.goit.global",r=async()=>{try{return(await s.default.get(`${l}/books/category-list`)).data}catch(e){i.Notify.failure(`Error: ${errorMessage}`)}},d=async()=>{try{return(await s.default.get(`${l}/books/top-books`)).data}catch(e){i.Notify.failure(`Error: ${errorMessage}`)}throw new Error(error)},c=async e=>{try{return(await s.default.get(`${l}/books/category`,{params:{category:e}})).data}catch(e){i.Notify.failure(`Error: ${errorMessage}`)}};i=a("6JpON");const m=document.querySelector(".categories__list");(async()=>(await r()).map((({list_name:e})=>`\n                <li class='categories__item _list'>\n                    <a data-categories__item data-listName='${e}' rel='noopener no-referrel nofollow' class='categories__link _link' href='#'>${e}</a>\n                </li>`)).sort().join(""))().then((e=>{m.insertAdjacentHTML("beforeend",e)})).catch((e=>{i.Notify.failure(`Error: ${errorMessage}`)}));var g=a("kvC6y");const u=document.querySelector(".title_best-sellers"),p=async e=>await c(e);m.addEventListener("click",(e=>{if(e.target.hasAttribute("data-categories__item")){e.preventDefault(),(0,g.loaderOn)();const t=document.querySelector(".categories__list").getElementsByClassName("categories__link"),n=Array.from(t);for(let e=0;e<n.length;e++){n[e].classList.remove("active__link")}e.target.classList.add("active__link");const a=e.target.dataset.listname.split(" ");a.pop();const s=e.target.dataset.listname.split(" ")[e.target.dataset.listname.split(" ").length-1];p(e.target.dataset.listname).then((e=>{u.classList.add("no-change"),u.innerHTML=`${a.join(" ")}&nbsp\n                <span class="title_book">${s}</span>`,k.innerHTML=o(e),(0,g.loaderOff)(),document.documentElement.scrollWidth>=1440||document.querySelector("#best-sellers-container").scrollIntoView({behavior:"smooth",block:"start"})}))}}));g=a("kvC6y"),i=a("6JpON");const k=document.querySelector(".best_list");let L=5;const v=()=>!u.classList.contains("no-change"),h=async()=>{if(v())try{(0,g.loaderOn)();const e=await d();if(0===e.length)return;const t=e.map((({books:e,list_name:t})=>{const n=e.slice(0,L);return`<li class='best-item _list _anim-items'>\n                <h3 class='min-title'>${t}</h3>\n                <ul class='books-list'>\n                    ${o(n)}\n                </ul>\n                <button class='see_more' data-name="${t}">See More</button>\n              </li>`}));k.innerHTML=t.join("")}catch(e){i.Notify.failure(`Error: ${errorMessage}`)}finally{(0,g.loaderOff)()}},y=()=>{L=window.matchMedia("(max-width: 767px)").matches?1:window.matchMedia("(min-width: 768px) and (max-width: 1439px)").matches?3:5,h()},f=((e,t)=>{let n;return(...a)=>{clearTimeout(n),n=setTimeout((()=>e(...a)),t)}})(y,300);window.addEventListener("resize",f);window.addEventListener("resize",(()=>{v(),0})),window.addEventListener("load",(()=>{y()}));var w=a("6uLmu"),b=a("gQOBw"),E=a("iNWLi"),_=(b=a("gQOBw"),a("6m2hf"));const $=(0,b.getAuth)(E.app),T=(0,_.getFirestore)(E.app),x={body:document.querySelector("body"),modal:document.getElementById("modal"),modalInner:document.getElementById("modal-inner"),modalTitle:document.getElementById("modal-title"),modalAuthor:document.getElementById("modal-author"),modalDescr:document.getElementById("modal-description"),modalImg:document.getElementById("modal-image"),modalClose:document.getElementById("modal-close-btn"),amazonLink:document.getElementById("amazon-link"),appleLink:document.getElementById("apple-link"),barnesLink:document.getElementById("barnes-link"),addToList:document.getElementById("modal-add-to-list"),modalGreetings:document.getElementById("modal-greetings-text"),books:document.getElementById("best-sellers-container")},B="Add to shopping list",C="Remove from the shopping list";let I={},N=!1;const j=e=>{x.modal.classList.add("modal-js"),x.body.classList.remove("no-scroll-js"),x.modalClose.removeEventListener("click",j),document.removeEventListener("keydown",q),x.addToList.removeEventListener("click",z),x.modal.removeEventListener("click",M)},M=e=>{e.target===e.currentTarget&&(j(),x.modalClose.removeEventListener("click",j),document.removeEventListener("keydown",q),x.addToList.removeEventListener("click",z),x.modal.removeEventListener("click",M))},q=e=>{"Escape"===e.key&&(j(),x.modalClose.removeEventListener("click",j),document.removeEventListener("keydown",q),x.addToList.removeEventListener("click",z),x.modal.removeEventListener("click",M))},z=()=>{N?((0,w.delBook)(I.id),x.addToList.textContent=B,x.modalGreetings.classList.add("modal-greetings-text-js"),N=!1):((0,w.pullBookData)(I),x.addToList.textContent=C,x.modalGreetings.classList.remove("modal-greetings-text-js"),N=!0)};x.books.addEventListener("click",(e=>{if(e.preventDefault(),(0,b.onAuthStateChanged)($,(async e=>{if(e){const t=e.email,n=await(0,_.getDocs)((0,_.collection)(T,t)),a=[];n.forEach((e=>a.push(e.data().id))),a.some((e=>e===I.id))?(N=!0,x.addToList.textContent=C,x.modalGreetings.classList.remove("modal-greetings-text-js")):(N=!1,x.addToList.textContent=B,x.modalGreetings.classList.add("modal-greetings-text-js"))}else x.addToList.disabled=!0,x.addToList.style.cursor="not-allowed"})),!e.target.closest(".book-item"))return;x.modalClose.addEventListener("click",j),document.addEventListener("keydown",q),x.addToList.addEventListener("click",z),x.modal.addEventListener("click",M);const t=e.target.closest(".book-item");I={id:t.querySelector("._link").dataset.id,title:t.dataset.title,img:t.dataset.image,author:t.dataset.author,description:t.dataset.description,amazonLink:t.dataset.linkurlamazon,appleLink:t.dataset.linkurlapple,barnesLink:t.dataset.linkurlbarnes,listname:t.dataset.listname},x.modalTitle.textContent=I.title,x.modalAuthor.textContent=I.author,x.modalDescr.textContent=I.description,x.modalImg.src=I.img,x.amazonLink.href=I.amazonLink,x.appleLink.href=I.appleLink,x.barnesLink.href=I.barnesLink,N?(x.addToList.textContent=C,x.modalGreetings.classList.remove("modal-greetings-text-js")):(x.addToList.textContent=B,x.modalGreetings.classList.add("modal-greetings-text-js")),x.body.classList.add("no-scroll-js"),x.modal.classList.toggle("modal-js")}));const A=document.querySelectorAll("._anim-items");if(A.length>0){function O(){for(let e=0;e<A.length;e++){const t=A[e],n=t.offsetHeight,a=H(t).top,o=4;let s=window.innerHeight-n/o;n>window.innerHeight&&(s=window.innerHeight-window.innerHeight/o),scrollY>a-s&scrollY<a+n?t.classList.add("_active"):t.classList.remove("_active")}}function H(e){const t=e.getBoundingClientRect(),n=window.scrollX||document.documentElement.scrollLeft,a=window.scrollY||document.documentElement.scrollTop;return{top:t.top+a,left:t.left+n}}window.addEventListener("scroll",O),setTimeout((()=>{O()}),300)}a("4jEcb"),a("7hKzD");const S=document.querySelector(".go-top");S.hidden=!0;const D=()=>{window.scrollY>0&&(window.scrollBy(0,-82),setTimeout(D,0))};window.addEventListener("scroll",(()=>{const e=window.scrollY,t=document.documentElement.clientHeight;S.hidden=!(5*e>=t)})),S.addEventListener("click",D),a("50Y4H"),a("f5DzK");g=a("kvC6y");k.addEventListener("click",(e=>{if(e.target.classList.contains("see_more")){e.preventDefault(),(0,g.loaderOn)();const t=document.querySelector(".categories__list").getElementsByClassName("categories__link"),n=Array.from(t);for(let t=0;t<n.length;t++){const a=n[t];a.classList.remove("active__link"),e.target.dataset.name===a.innerText&&a.classList.add("active__link")}const a=e.target.dataset.name.split(" ");a.pop();const s=e.target.dataset.name.split(" ")[e.target.dataset.name.split(" ").length-1];p(e.target.dataset.name).then((e=>{u.classList.add("no-change"),u.innerHTML=`${a.join(" ")}&nbsp\n                <span class="title_book">${s}</span>`,k.innerHTML=o(e),(0,g.loaderOff)(),document.querySelector("#best-sellers-container").scrollIntoView({behavior:"smooth",block:"start"})}))}})),a("k0tN7"),a("kvC6y")}();
//# sourceMappingURL=index.10063068.js.map
