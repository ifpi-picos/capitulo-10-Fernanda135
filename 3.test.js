import { describe, expect, test, beforeEach } from "bun:test";
import { Usuario, Publicacao, Comentario } from './cap-9-class.js'; 

describe('Testes para a classe Publicacao', () => {
    let usuario;
    let publicacao;

    beforeEach(() => {
        usuario = new Usuario('Fernanda', '2006-10-22');
        publicacao = new Publicacao(usuario, new Date(), 'Texto da publicação');
    });

    test('Deve editar a publicação', () => {
        publicacao.editar('Texto editado');
        expect(publicacao.descricao).toBe('Texto editado');
    });

    test('Deve curtir a publicação', () => {
        publicacao.curtir();
        expect(publicacao.curtidas).toBe(1);
    });
});