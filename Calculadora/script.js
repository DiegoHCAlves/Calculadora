function adicionarValor(value) {
    let tela = document.getElementById('tela');
    let calculo = document.getElementById('calculo');
    tela.value += value;
    calculo.value += value;
}

function limparTela() {
    document.getElementById('tela').value = '';
    document.getElementById('calculo').value = '';
}

function executarCalculo() {
    let calculo = document.getElementById('calculo');
    let tela = document.getElementById('tela');
    try {
        calculo.value = eval(calculo.value);
        tela.value = tela.value + "=" + calculo.value;

    } catch (e) {
        tela.value = 'Erro';
        calculo.value = '';
    }
}

function adicionarAoQuadrado(value) {
    let tela = document.getElementById('tela');
    let calculo = document.getElementById('calculo');
    
    calculo.value += '**2';
    tela.value += value;
}

function adicionarPorcentagem(value) {
    let tela = document.getElementById('tela');
    let calculo = document.getElementById('calculo');

    calculo.value += '*.01';
    tela.value += value;
}