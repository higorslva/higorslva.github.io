// Função para aplicar a animação de fade-in e slide-up
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const options = {
        threshold: 0.25,  // Aciona a animação quando 25% do elemento estiver visível
    };

    // Callback para o Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para tornar o elemento visível
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar o elemento após a animação
            }
        });
    };

    // Cria o Intersection Observer
    const observer = new IntersectionObserver(observerCallback, options);

    // Observa todos os elementos com a classe .fade-in
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Obter elementos
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const header = document.querySelector('header');

    if (hamburger && menu && header) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');  // Exibe/oculta o menu
            header.classList.toggle('open'); // Move o header
        });
    }
});
const toggleButton = document.getElementById('dark-mode-toggle');
const menu = document.querySelector('.menu');
const body = document.body;

// Adiciona o evento de clique para alternar o menu
toggleButton.addEventListener('click', () => {
    // Adiciona ou remove a classe 'show' para mostrar ou esconder o menu
    menu.classList.toggle('show');
});
