import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import {buscaEditalPorNomeDoArquivo, buscaTodosEditais} from '../../lib/api'
import ReactMarkdown from "react-markdown"

const Edital = ({edital}) => {
  const router = useRouter();

  if (!router.isFallback && !edital?.slug) {
    return <ErrorPage statusCode={404}/>
  }
  return (
    <ReactMarkdown source={edital.conteudo}/>
  )
};

export const getStaticProps = async ({params}) => {
  const edital = buscaEditalPorNomeDoArquivo(params.slug, [
    'titulo',
    'slug',
    'conteudo'
  ]);

  return {
    props: {
      edital: edital
    },
  }
};

export const getStaticPaths = async () => {
  const editais = buscaTodosEditais(['slug']);

  return {
    paths: editais.map(edital => {
      return {
        params: {
          slug: edital.slug,
        },
      }
    }),
    fallback: false,
  }
};

export default Edital;
