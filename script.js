
const nav=document.querySelector('.nav'),menu=document.querySelector('.menu-btn');
menu.addEventListener('click',()=>nav.classList.toggle('mobile'));
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const lb=document.querySelector('.lightbox'),lbi=lb.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(b=>b.addEventListener('click',()=>{lbi.src=b.dataset.img;lb.classList.add('open')}));
lb.querySelector('button').onclick=()=>lb.classList.remove('open');
lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
document.querySelector('#year').textContent=new Date().getFullYear();
