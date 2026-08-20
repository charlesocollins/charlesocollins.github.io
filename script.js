const button = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if(button && nav){
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href') === location.pathname.split('/').pop() ||
     (location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')){
    a.classList.add('active');
  }
});
