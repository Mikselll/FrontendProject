(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const x=[{href:"#experience",text:"Experience"},{href:"#work",text:"Work"},{href:"#testimonials",text:"Testimonials"},{href:"#contact",text:"Contact"}],y=(t,e,o)=>{const r=document.createElement("a");r.classList.add("item","body-2","body-2--medium"),r.setAttribute("href",t),r.textContent=e;const n=document.createElement("li");n.append(r),o.append(n)},L=document.querySelector(".navigation__items"),h=document.querySelector(".navigation-burger__items");L&&h&&x.forEach(({href:t,text:e})=>{y(t,e,L),y(t,e,h)});const b=document.querySelectorAll(".info__technologies-items"),S=["Next.js","Typescript","PostgreSQL","Tailwindcss","Figma","Storybook","Git"],q=(t,e)=>{const o=document.createElement("li");o.classList.add("item","body-3"),o.textContent=t,e.append(o)};b.forEach(t=>{S.forEach(e=>q(e,t))});const _=Array.from(b)[b.length-1];_.firstChild&&(_.firstChild.textContent="React");const E=t=>{let e=0;return Array.from(t).map((r,n)=>r===" "?(e+=1,r):e%2===n%2?`<span class='font-orange'>${r}</span>`:r).join("")},w=[".contacts__email",".contacts__number"];w.forEach(t=>{const e=document.querySelector(t),o=e==null?void 0:e.textContent;if(!o)return;const r=E(o);e.innerHTML=r});const m=document.querySelector("#header .button--open"),f=document.querySelector("#header .button--close"),a=document.querySelector(".burger-wrapper"),l=document.querySelector(".content-burger"),C=document.querySelectorAll(".navigation-burger__items .item");m==null||m.addEventListener("click",()=>{a==null||a.classList.add("burger-wrapper--active"),l==null||l.classList.add("content-burger--active")});f==null||f.addEventListener("click",()=>{a==null||a.classList.remove("burger-wrapper--active"),l==null||l.classList.remove("content-burger--active")});C.forEach(t=>{t.addEventListener("click",()=>{a==null||a.classList.remove("burger-wrapper--active"),l==null||l.classList.remove("content-burger--active")})});const T=document.querySelectorAll("#experience .date");T.forEach(t=>{t.addEventListener("click",e=>{const o=e.target,r=document.querySelector("#experience .date--active");r==null||r.classList.remove("date--active");const n=r==null?void 0:r.dataset.date,i=document.querySelector(`[data-date-info='${n}']`);i==null||i.classList.remove("date-info--active"),o.classList.add("date--active");const s=o.dataset.date,u=document.querySelector(`[data-date-info='${s}']`);u==null||u.classList.add("date-info--active")})});const d=document.querySelector(".form"),I=t=>/^.{1,20}$/.test(t),A=t=>/^[A-Za-z\s]+$/.test(t),M=t=>/^\+\d\s\d{6}-\d{2}-\d{2}$/.test(t),k=t=>{const e=t.target,r=e.value.replace(/[^\d+ ]/g,"").replace(/(\d{6})(\d{2})(\d{2})/,"$1-$2-$3");e.value=r},N=t=>{const e=t.target;e.value=e.value.replace(/\b\w/g,o=>o.toUpperCase())},$=()=>d?Array.from(d.querySelectorAll(".form__field-wrapper .field")).every(o=>{var r;return!(!((r=o.parentElement)===null||r===void 0)&&r.matches(".form__field-wrapper--error"))&&o.value!==""}):!1,D=[{selector:"subject",validate:I,errorMessage:"Field must contain no more than 20 characters"},{selector:"name",mask:N,validate:A,errorMessage:"Field must contain only letters"},{selector:"phone",mask:k,validate:M,errorMessage:"Incorrect number"}];D.forEach(t=>{if(!d)return;const e=d.querySelector(`[data-field=${t.selector}]`),o=e==null?void 0:e.querySelector(".field"),r=document.createElement("p");t.selector!=="subject"&&(o==null||o.addEventListener("input",n=>{var i;return(i=t.mask)===null||i===void 0?void 0:i.call(t,n)})),t.selector==="phone"&&(o==null||o.addEventListener("focus",n=>n.target.value="+7 ")),o==null||o.addEventListener("blur",n=>{var i;const s=n.target,u=s==null?void 0:s.value;if(!u)return;u===""?(e==null||e.classList.add("form__field-wrapper--error"),e==null||e.append(r),r.textContent="Required field!"):t.validate(u)?(e==null||e.classList.remove("form__field-wrapper--error"),e!=null&&e.contains(r)&&((i=e.querySelector("p"))===null||i===void 0||i.remove())):(e==null||e.classList.add("form__field-wrapper--error"),e==null||e.append(r),r.textContent=t.errorMessage);const v=d.querySelector(".button");$()?v==null||v.removeAttribute("disabled"):v==null||v.setAttribute("disabled","true")})});d&&d.addEventListener("submit",t=>{t.preventDefault(),d.reset()});const p=document.querySelector(".contacts__number");p==null||p.addEventListener("click",t=>{const o=t.currentTarget.textContent;window.innerWidth<=1023||!o||(navigator.clipboard.writeText(o),alert("Number copied"))});const c=document.querySelector(".annoying-message"),g=c==null?void 0:c.querySelector(".button--close");g==null||g.addEventListener("click",()=>{c==null||c.classList.remove("annoying-message--active"),setTimeout(()=>{c==null||c.classList.add("annoying-message--active")},12e4)});
