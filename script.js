// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tem uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if(savedTheme === 'dark') themeToggleBtn.textContent = '☀️ Tom Claro';
    }

    // Função para alternar o tema
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';

        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            themeToggleBtn.textContent = '☀️ Tom Claro';
        } else {
            themeToggleBtn.textContent = '✨ Mudar Tom';
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Salva a escolha do usuário
    });
});