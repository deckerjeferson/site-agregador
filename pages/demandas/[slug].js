import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import ReactMarkdown from 'react-markdown'
import {getAllDemands, getDemandBySlug} from "../../lib/demand"
import Layout from "../../components/layout/layout";

const Demand = ({demand}) => {
  const router = useRouter();

  if (!router.isFallback && !demand?.slug) {
    return <ErrorPage statusCode={404}/>
  }
  return (
    <>
      <Layout>
        <ReactMarkdown source={demand.conteudo}/>
      </Layout>
    </>
  )
};

export const getStaticProps = async ({params}) => {
  const demand = getDemandBySlug(params.slug, [
    'title',
    'slug',
    'content'
  ]);

  return {
    props: {demand},
  }
};

export const getStaticPaths = async () => {
  const demands = getAllDemands(['slug']);
  return {
    paths: demands.map(demand => {
      return {
        params: {
          slug: demand.slug,
        },
      }
    }),
    fallback: false,
  }
};

export default Demand;
