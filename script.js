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
    const menuItems = menu.querySelectorAll('a'); // Seleciona todos os links do menu

    if (hamburger && menu) {
        // Abrir/fechar o menu ao clicar no ícone do hambúrguer
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique se propague para o documento
            hamburger.classList.toggle('is-active'); // Adiciona/remove a classe para animar o ícone
            menu.classList.toggle('show');
        });

        // Fechar o menu ao clicar em um item do menu
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.remove('show'); // Fecha o menu
            });
        });

        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                menu.classList.remove('show'); // Fecha o menu
            }
        });

        // Impedir que o menu feche ao clicar dentro dele
        menu.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique se propague para o documento
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

