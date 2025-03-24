import { describe, expect, test, beforeEach } from "bun:test";
import { Usuario, Publicacao, Comentario } from './cap-9-class.js'; 

describe('Testes para a classe Usuario', () => {
    let usuario1;
    let usuario2;

    beforeEach(() => {
        usuario1 = new Usuario('Fernanda', '2006-10-22');
        usuario2 = new Usuario('Vitória', '1996-10-22');
    });

    test('Deve criar uma nova publicação', () => {
        usuario1.criarPublicacao('Minha primeira publicação');
        expect(usuario1.publicacoes.length).toBe(1);
    });

    test('Deve seguir outro usuário', () => {
        usuario1.seguir(usuario2);
        expect(usuario1.seguindo).toContain(usuario2);
    });

    test('Deve deixar de seguir um usuário', () => {
        usuario1.seguir(usuario2);
        usuario1.deixarDeSeguir(usuario2);
        expect(usuario1.seguindo).not.toContain(usuario2);
    });
});