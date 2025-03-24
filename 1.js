export function somar(a, b) {
    return a + b;
    }

export function subtrair(a, b) {
    return a - b;
    }

export function multiplicar(a, b) {
    return a * b;
    }

export function dividir(a, b) {
    return a / b;
    }

export function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

export function voto(idade, nome) {
    if (idade >= 16) {
        return nome + ' tem voto obrigatório';
    }
}