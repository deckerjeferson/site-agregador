import Head from 'next/head'
import Link from 'next/link';
import Layout from "../../components/layout/layout"
import ReactMarkdown from "react-markdown";
import styles from "./demand.module.css";
import {getAllDemands} from "../../lib/demand";

const Index = ({demands}) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Abastece SUS - Demandas</title>
        </Head>

        <main>
          <section>
            <ul>
              {demands.map((demand, index) => (
                <Link key={index} as={`/demandas/${demand.slug}`} href="/demandas/[slug]">
                  <li className={styles.demand}>
                    <h2 className={styles.header}>{demand.title}</h2>
                    <div className={styles.excerpt}>
                      <ReactMarkdown source={demand.excerpt}/>
                    </div>
                    <div className={styles.footer}>
                      <span>{demand.plaintiff}</span>
                      <span>-</span>
                      <span>{demand.date}</span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps = () => {
  const demands = getAllDemands(['title', 'slug', 'date', 'excerpt', 'plaintiff']);
  return {
    props: {demands},
  }
};


export default Index;
