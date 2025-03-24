export function maiorNumero(lista) {
    if (!Array.isArray(lista) || lista.length === 0) {
        return null;
    }
    return lista.indexOf(Math.max(...lista));
}

export function verificarParOuImpar(numero) {
    if (typeof numero !== 'number') {
        return null;
    }
    if (numero % 2 === 0) {
        return "Par";
    }
    return "Ímpar";
}

export function diaDaSemana(numero) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    if (numero < 1 || numero > 7) {
        return "Número inválido";
    }
    return dias[numero - 1];
}

export function somarLista(lista) {
    if (!Array.isArray(lista)) {
        return null;
    }
    return lista.reduce((acc, num) => acc + num, 0);
}

export function contarPalavras(texto) {
    if (typeof texto !== 'string') {
        return null;
    }
    return texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;
}


export function atualizarPropriedade(objeto, propriedade, valor) {
    if (typeof objeto !== 'object' || objeto === null) {
        return null;
    }
    objeto[propriedade] = valor;
    return objeto;
}


export function listarChaves(objeto) {
    if (typeof objeto !== 'object' || objeto === null) {
        return null;
    }
    return Object.keys(objeto);
}


export function saudacaoPorHora(hora) {
    if (hora < 0 || hora > 23) {
        return "Hora inválida!";
    } else if (hora < 12) {
        return "Bom dia!";
    } else if (hora < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}