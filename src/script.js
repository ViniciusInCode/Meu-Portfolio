// script.js

document.addEventListener('DOMContentLoaded', () => {
    const lightBtn = document.getElementById('light-theme-btn');
    const darkBtn = document.getElementById('dark-theme-btn');
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    document.head.appendChild(themeLink);

    function setTheme(isDark) {
        if (isDark) {
            themeLink.href = 'dark-theme.css';
            darkBtn.classList.add('active');
            lightBtn.classList.remove('active');
            localStorage.setItem('theme', 'dark');
        } else {
            themeLink.href = '';
            lightBtn.classList.add('active');
            darkBtn.classList.remove('active');
            localStorage.setItem('theme', 'light');
        }
    }

    // Carregar tema salvo
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');

    // Event listeners para os botões
    lightBtn.addEventListener('click', () => setTheme(false));
    darkBtn.addEventListener('click', () => setTheme(true));
});