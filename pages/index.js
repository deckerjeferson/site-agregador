import Head from 'next/head'
import Link from 'next/link';
import {buscaTodosEditais} from "../lib/api";
import styles from "./index.module.css";

const Index = ({editais}) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Site Agregador de Editais COVID-19</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
          <h1>
            Site Agregador de Editais
          </h1>
        </main>

        <section>
          {editais.map((edital, index) => (
            <Link key={index} as={`/editais/${edital.slug}`} href="/editais/[slug]">
              <a className={styles.link}>{edital.titulo} </a>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export const getStaticProps = () => {
  const editais = buscaTodosEditais(['titulo', 'slug']);

  return {
    props: {editais},
  }
};


export default Index
