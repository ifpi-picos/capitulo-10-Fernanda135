import { describe, test, expect } from "bun:test";
import { somar, subtrair, multiplicar, dividir, nomeCompleto, voto } from './1.js';

describe('Testes', () => {
    test('Deve retornar 3 quando somar 1 e 2', () => {
        expect(somar(1, 2)).toBe(3);
    });

    test('subtrair: Deve retornar 1 quando subtrair 2 de 3', () => {
        expect(subtrair(3, 2)).toBe(1);
    });

    test('Deve retornar 6 quando multiplicar 2 e 3', () => {
        expect(multiplicar(2, 3)).toBe(6);
    });

    test('Deve retornar 2 quando dividir 6 por 3', () => {
        expect(dividir(6, 3)).toBe(2);
    });

    test('Deve retornar Infinity quando dividir por 0', () => {
        expect(dividir(6, 0)).toBe(Infinity);
    });

    test('Deve retornar "João Silva" quando os nomes são "João" e "Silva"', () => {
        expect(nomeCompleto('João', 'Silva')).toBe('João Silva');
    });

    test('Deve retornar "Maria tem voto obrigatório" quando a idade é 16', () => {
        expect(voto(16, 'Maria')).toBe('Maria tem voto obrigatório');
    });
});