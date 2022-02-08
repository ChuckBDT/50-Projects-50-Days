// Variables

const input = document.querySelector('.input');
const btnOpen = document.querySelector('.btn');

// Listeners

btnOpen.addEventListener('click', () => {
    input.classList.toggle('active');
    input.focus();
})