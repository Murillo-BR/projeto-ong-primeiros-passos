// Módulo responsável pelos dados e pela exibição dos projetos

const projetosVoluntariado = [
    {
        titulo: 'Auxílio na cozinha para todos',
        descricao: `Aqui você consegue entender melhor como funciona
            nossa cozinha comunitária e como podemos ajudar.`
    },
    {
        titulo: 'Aulas para a comunidade',
        descricao: `Se você tem habilidades para ensinar alguma
            competência, nos ajude a melhorar a qualidade
            da educação de nossas crianças.`
    },
    {
        titulo: 'Entregas de amor',
        descricao: `Se você ainda não sabe como, mas gostaria de ajudar,
            venha participar da entrega das doações.`
    }
];

function criarProjeto(projeto) {
    return `
        <article>
            <h3>${projeto.titulo}</h3>

            <p>
                ${projeto.descricao}
            </p>
        </article>
    `;
}

export function renderProjetos(app) {
    const cardsProjetos = projetosVoluntariado
        .map(criarProjeto)
        .join('');

    app.innerHTML = `
        <h1>Nossos Projetos</h1>

        <section
            class="projetos-voluntariado"
            id="voluntariado"
        >
            <h2>Projeto Voluntariado</h2>

            ${cardsProjetos}
        </section>

        <section id="cases">
            <h2>Case de sucesso</h2>

            <article>
                <h3>
                    Mais de 200 cestas básicas entregues
                </h3>

                <p>
                    No dia xx/xx/xxxx tivemos a alegria de entregar
                    bênçãos às famílias assistidas por nós com mais
                    de 200 cestas básicas.
                </p>
            </article>
        </section>

        <section>
            <h2>Seja você também um investidor</h2>

            <p>
                Se você se sentiu tocado e pode contribuir de alguma
                forma, entre em contato conosco para participar.
            </p>
        </section>
    `;
}