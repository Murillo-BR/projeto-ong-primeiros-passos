// Módulo responsável pelo controle das rotas e navegação da SPA

import { renderProjetos } from './projetos.js';
import { renderCadastro } from './cadastro.js';

export function iniciarRotas(app) {

    const BASE_PATH = '';

    const routes = {
        '/': renderInicio,
        '/projetos': renderProjetos,
        '/cadastro': renderCadastro
    };

    function renderInicio(app) {
        app.innerHTML = `
            <h1>
                Organização Não Governamental Primeiros Passos
            </h1>

            <section>
                <h2>De onde viemos</h2>

                <p>
                    Breve texto contando um pouco da história da ONG.
                </p>
            </section>

            <section>
                <h2>Venha nos visitar</h2>

                <p>
                    Convite sobre atividades realizadas em visitas à ONG.
                </p>
            </section>

            <section>
                <h2>Nossos Produtos</h2>

                <p>
                    Adquira produtos da ONG e ajude a financiar
                    nossos projetos.
                </p>

                <span class="badge">
                    Adquira o seu e ajude o próximo!
                </span>
            </section>
        `;
    }

    function render404(app) {
        app.innerHTML = `
            <h1>Página não encontrada</h1>

            <p>
                A rota informada não existe.
            </p>
        `;
    }

    function normalizarRota(pathname) {
        let caminho = pathname;

        if (caminho.endsWith('/index.html')) {
            caminho =
                caminho.replace('/index.html', '');
        }

        if (caminho === BASE_PATH || caminho === '') {
            return '/';
        }

        if (caminho.startsWith(BASE_PATH)) {
            caminho =
                caminho.substring(BASE_PATH.length);
        }

        if (caminho === '') {
            return '/';
        }

        if (!caminho.startsWith('/')) {
            caminho = `/${caminho}`;
        }

        return caminho;
    }

    function obterRota() {
        return normalizarRota(
            window.location.pathname
        );
    }

    function rolarParaAncoragem() {
        const hash = window.location.hash;

        if (!hash) {
            return;
        }

        const elemento =
            document.querySelector(hash);

        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    function renderizarRota() {
        const caminho = obterRota();

        const rota =
            routes[caminho] || render404;

        rota(app);

        rolarParaAncoragem();
    }

    document.addEventListener(
        'click',
        function (event) {

            const link =
                event.target.closest('[data-link]');

            if (!link) {
                return;
            }

            event.preventDefault();

            const url = new URL(
                link.href,
                window.location.href
            );

            let caminho = url.pathname;

            if (caminho.endsWith('/index.html')) {
                caminho =
                    caminho.replace('/index.html', '');
            }

            if (
                caminho === '' ||
                caminho === BASE_PATH
            ) {
                caminho = BASE_PATH || '/';
            }

            history.pushState(
                null,
                '',
                caminho + url.hash
            );

            renderizarRota();

            const menu =
                document.querySelector('#menu-toggle');

            if (menu) {
                menu.checked = false;
            }
        }
    );

    window.addEventListener(
        'popstate',
        function () {
            renderizarRota();
        }
    );

    renderizarRota();
}