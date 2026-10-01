import { iniciarRotas } from './routes.js';

const app = document.querySelector('#app');

iniciarRotas(app);

// Configura o menu de navegação responsivo
const botaoMenu = document.querySelector('#menu-toggle');
const menuPrincipal = document.querySelector('#menu-principal');

botaoMenu.addEventListener('click', () => {
    const menuAberto = menuPrincipal.classList.toggle('menu-aberto');

    botaoMenu.setAttribute('aria-expanded', menuAberto);
    botaoMenu.setAttribute(
        'aria-label',
        menuAberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
});