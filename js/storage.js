// Módulo responsável pelo armazenamento dos dados do formulário//

export function salvarDadosFormulario(formulario) {
    const dadosFormulario = new FormData(formulario);

    const dadosCadastro =
        Object.fromEntries(dadosFormulario.entries());

    localStorage.setItem(
        'cadastro',
        JSON.stringify(dadosCadastro)
    );
}

export function carregarDadosFormulario(formulario) {
    const dadosSalvos =
        localStorage.getItem('cadastro');

    if (!dadosSalvos) {
        return;
    }

    const dadosCadastro =
        JSON.parse(dadosSalvos);

    Object.keys(dadosCadastro).forEach(
        function (nomeCampo) {

            const campo =
                formulario.elements[nomeCampo];

            if (campo) {
                campo.value =
                    dadosCadastro[nomeCampo];
            }
        }
    );
}

export function apagarDadosFormulario() {
    localStorage.removeItem('cadastro');
}