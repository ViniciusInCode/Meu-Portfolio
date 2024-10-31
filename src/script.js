document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');

    // Verifica se há preferência salva no localStorage
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Modo Claro';
    }

    themeToggle.addEventListener('click', () => {
        // Alterna as classes e ícones
        body.classList.toggle('dark-mode');
        
        // Atualiza o ícone e texto do botão
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            text.textContent = 'Modo Claro';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            text.textContent = 'Modo Escuro';
            localStorage.setItem('darkMode', null);
        }
    });

    // Adiciona animação suave na transição dos temas
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: background-color 0.3s ease, color 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});