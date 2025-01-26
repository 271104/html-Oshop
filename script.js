//  const bar = document.getElementById('bar');
//  const close = document.getElementById('close');
//  const nav = document.getElementById('navbar');
//  if (bar) {
//     bar.addEventListener('click', () =>{
//         nav.classList.add('active');
//     })
//     if(close){
//         bar.addEventListener('lick', () =>{
//             close.classList.remove('active');
//         })
//     }
//  }

const hamburger = document.getElementById('mobile');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close');

hamburger.addEventListener('click', () => {
    navbar.style.right = '0';
});

closeBtn.addEventListener('click', () => {
    navbar.style.right = '-300px';
});

document.querySelectorAll('#navbar li a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.style.right = '-300px';
    });
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
