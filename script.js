    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(observerCallback, options);
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
        const closeBtn = document.getElementById('close-btn'); // Botão de fechar
        const menuItems = menu.querySelectorAll('a'); // Seleciona todos os links do menu

        if (hamburger && menu && closeBtn) {
            // Abrir/fechar o menu ao clicar no ícone do hambúrguer
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation(); // Impede que o clique se propague para o documento
                menu.classList.toggle('show');
            });
            // Fechar o menu ao clicar no botão de fechar
            closeBtn.addEventListener('click', () => {
                menu.classList.remove('show'); // Fecha o menu
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

