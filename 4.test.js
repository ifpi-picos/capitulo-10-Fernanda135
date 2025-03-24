import { describe, expect, test, beforeEach } from "bun:test";
import { Usuario, Publicacao, Comentario } from './cap-9-class.js'; 

describe('Testes para a classe Comentario', () => {
    let usuario;
    let comentario;

    beforeEach(() => {
        usuario = new Usuario('Fernanda', '2006-10-22');
        comentario = new Comentario(usuario, new Date(), 'Texto do comentário');
    });

    test('Deve editar o comentário', () => {
        comentario.editar('Texto editado');
        expect(comentario.texto).toBe('Texto editado');
    });
});