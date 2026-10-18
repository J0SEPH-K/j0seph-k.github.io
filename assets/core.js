const revealObserver = new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el)=>revealObserver.observe(el));
const progress=document.querySelector('.site-progress');
if(progress){const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?scrollY/max*100:0}%`};addEventListener('scroll',update,{passive:true});update()}
