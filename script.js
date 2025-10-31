// year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// reveal-on-scroll (no libs)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
},{ threshold:.2 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
