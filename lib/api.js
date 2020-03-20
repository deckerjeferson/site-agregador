import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

const diretorioEditais = join(process.cwd(), '_editais');

const buscaEditais = () => {
  return fs.readdirSync(diretorioEditais);
};

export const buscaEditalPorNomeDoArquivo = (nomeDoArquivo, campos = []) => {
  const nomeDoArquivoSemExtensao = nomeDoArquivo.replace(/\.md$/, '');
  const caminhhoDoArquivo = join(diretorioEditais, `${nomeDoArquivoSemExtensao}.md`);
  const conteudoEdital = fs.readFileSync(caminhhoDoArquivo, 'utf8');
  const {data, content} = matter(conteudoEdital);

  const itens = {};

  campos.forEach(campo => {
    if (campo === 'slug') {
      itens[campo] = nomeDoArquivoSemExtensao;
    }
    if (campo === 'conteudo') {
      itens[campo] = content;
    }

    if (data[campo]) {
      itens[campo] = data[campo];
    }
  });

  return itens;
};

export const buscaTodosEditais = (campos = []) => {
  return buscaEditais()
    .map(nomeDoArquivo => buscaEditalPorNomeDoArquivo(nomeDoArquivo, campos));
}
