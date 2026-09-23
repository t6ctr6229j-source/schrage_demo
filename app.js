const body = document.body;
const page = body.dataset.page;
document.querySelectorAll('[data-nav]').forEach(a=>{ if(a.dataset.nav===page) a.classList.add('is-active'); });
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav__links');
if(menu && links){ menu.addEventListener('click',()=>links.classList.toggle('is-open')); }
const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const btn=form.querySelector('button[type=submit]');if(!btn)return;const old=btn.textContent;btn.textContent='Danke – Prototype, noch ohne Versand';btn.disabled=true;setTimeout(()=>{btn.textContent=old;btn.disabled=false},3200);}));
setTimeout(()=>document.querySelectorAll(".reveal").forEach(e=>e.classList.add("is-visible")),120);