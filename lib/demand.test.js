import {getAllDemands, getDemandBySlug} from "./demand";


test('should get all demands, returning only slug for each file', () => {
  const allDemands = getAllDemands(['slug']);

  expect(allDemands).toEqual(expect.arrayContaining([{"slug": "demanda-exemplo"}, {"slug": "demanda-outro-exemplo"}]));
});

test('should get all demands, returning only title for each file', () => {
  const allDemands = getAllDemands(['title']);

  expect(allDemands).toEqual(expect.arrayContaining([{"title": "Titulo da Demanda"}, {"title": "Titulo de outra Demanda"}]));
});

test('should get all demands, returning multiple attributes from each file', () => {
  const expectedResult = [
    {"title": "Titulo da Demanda", "link": "http://www.gooole.com"},
    {"title": "Titulo de outra Demanda", "link": "http://www.gooole.com"}
  ];

  const allDemands = getAllDemands(['title', 'link']);

  expect(allDemands).toEqual(expect.arrayContaining(expectedResult));
});

test('should get demand by slug, returning only requested fields', () => {
  const expectedResult = {"slug": "demanda-exemplo", "title": "Titulo da Demanda"};

  const demand = getDemandBySlug('demanda-exemplo', ['slug', 'title']);

  expect(demand).toEqual(expectedResult);
});

