import {buscaTodosEditais} from "./api";

test('deve buscar todos editais, retornando somente o slug de cada arquivo', () => {
  const todosEditais = buscaTodosEditais(['slug']);

  expect(todosEditais).toEqual(expect.arrayContaining([{"slug": "edital-exemplo-1"}, {"slug": "edital-exemplo-2"}]));
});

test('deve buscar todos editais, retornando o titulo de cada arquivo', () => {
  const todosEditais = buscaTodosEditais(['titulo']);

  expect(todosEditais).toEqual(expect.arrayContaining([{"titulo": "Titulo do Edital 1"}, {"titulo": "Titulo do Edital 2"}]));
});

test('deve buscar todos editais, retornando multiplos atributos de cada arquivo', () => {
  const expectedResult = [
    {"titulo": "Titulo do Edital 1", "link": "http://www.gooole.com"},
    {"titulo": "Titulo do Edital 2", "link": "http://www.gooole.com"}
  ];

  const todosEditais = buscaTodosEditais(['titulo', 'link']);

  expect(todosEditais).toEqual(expect.arrayContaining(expectedResult));
});

