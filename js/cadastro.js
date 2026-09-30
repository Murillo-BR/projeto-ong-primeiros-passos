// Módulo responsável pela exibição e configuração do formulário

import {
    salvarDadosFormulario,
    carregarDadosFormulario,
    apagarDadosFormulario
} from './storage.js';

export function renderCadastro(app) {
    app.innerHTML = `
        <h1>Cadastre-se</h1>

        <form id="form-cadastro">

            <fieldset>
                <legend>Dados Pessoais</legend>

                <div>
                    <label for="nome">
                        Nome Completo
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >
                </div>

                <div>
                    <label for="nascimento">
                        Data de nascimento
                    </label>

                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >
                </div>

                <div>
                    <label for="email">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >
                </div>

                <div>
                    <label for="phone">
                        Telefone
                    </label>

                    <input
                        type="tel"
                        pattern="\\([0-9]{2}\\)[0-9]{5}-[0-9]{4}"
                        placeholder="(00)00000-0000"
                        id="phone"
                        name="phone"
                        required
                    >
                </div>

                <div>
                    <label for="documento">
                        CPF
                    </label>

                    <input
                        type="text"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        placeholder="000.000.000-00"
                        id="documento"
                        name="cpf"
                        title="Formato: 000.000.000-00"
                        required
                    >
                </div>

            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <div>
                    <label for="rua">
                        Rua / Avenida
                    </label>

                    <input
                        type="text"
                        id="rua"
                        name="endereco"
                        required
                    >
                </div>

                <div>
                    <label for="numero">
                        Número da Residência
                    </label>

                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        required
                    >
                </div>

                <div>
                    <label for="complemento">
                        Complemento
                    </label>

                    <input
                        type="text"
                        id="complemento"
                        name="complemento"
                    >
                </div>

                <div>
                    <label for="cep">
                        CEP
                    </label>

                    <input
                        type="text"
                        pattern="[0-9]{5}-[0-9]{3}"
                        placeholder="00000-000"
                        id="cep"
                        name="cep"
                        title="Formato: 00000-000"
                        required
                    >
                </div>

                <div>
                    <label for="estado">
                        Estado
                    </label>

                    <input
                        type="text"
                        id="estado"
                        name="state"
                        required
                    >
                </div>

                <div>
                    <label for="cidade">
                        Cidade
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="city"
                        required
                    >
                </div>

            </fieldset>

            <div class="alerta">
                <span>
                    Ops, ainda falta alguma informação em seu cadastro.
                </span>

                <button
                    type="button"
                    class="alerta-fechar"
                >
                    ×
                </button>
            </div>

            <button type="submit">
                Enviar
            </button>

        </form>

        <div class="toast">
            Cadastro enviado com sucesso!
        </div>
    `;

    configurarFormulario();
}

function configurarFormulario() {
    const formulario =
        document.querySelector('#form-cadastro');

    const alerta =
        document.querySelector('.alerta');

    const fecharAlerta =
        document.querySelector('.alerta-fechar');

    const telefone =
        document.querySelector('#phone');

    const cpf =
        document.querySelector('#documento');

    const cep =
        document.querySelector('#cep');

    IMask(telefone, {
        mask: '(00)00000-0000'
    });

    IMask(cpf, {
        mask: '000.000.000-00'
    });

    IMask(cep, {
        mask: '00000-000'
    });

    alerta.style.display = 'none';

    carregarDadosFormulario(formulario);

    formulario.addEventListener(
        'input',
        function () {
            salvarDadosFormulario(formulario);
        }
    );

    fecharAlerta.addEventListener(
        'click',
        function () {
            alerta.style.display = 'none';
        }
    );

    formulario.addEventListener(
        'submit',
        function (event) {

            event.preventDefault();

            if (!formulario.checkValidity()) {
                alerta.style.display = 'flex';
                return;
            }

            alerta.style.display = 'none';

            const toast =
                document.querySelector('.toast');

            toast.style.animation = 'none';

            toast.offsetHeight;

            toast.style.animation =
                'aparecer-sumir 4s ease forwards';

            formulario.reset();

            apagarDadosFormulario();
        }
    );
}