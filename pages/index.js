import Head from 'next/head';
import prisma from '../lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async() => {
  const ballrooms = await prisma.ballroom.findMany();
  return { props: { ballrooms } };
};


export default function Home({ ballrooms }) {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
    

        <div className={styles.grid}>
          {ballrooms.map((ballroom) => (
          <Link key={ballroom.id} href="/[ballroom]/requests" as={`/${ballroom.name}/requests`} >
            {/* <Link href="/" key={ballroom.id}> */}
              <a className={styles.card}>
                <h2>{ballroom.name} &rarr;</h2>
                <p>Click to check instant request options</p>
                <div
                  className={styles.background}
                  style={{
                    backgroundImage: `url(${ballroom.imageUrl})`
                  }}
                ></div>
              </a>
            </Link>
          ))}
        </div>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  );
}
