import Head from 'next/head';
import prisma from '../lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Layout from '@/components/Layout.user';


export const getStaticProps = async() => {
  const ballrooms = await prisma.ballroom.findMany();
  return { props: { ballrooms } };
};


export default function Home({ ballrooms }) {
  return (
    <>
    <Layout>
    {/* <div className={styles.container}> */}
      {/* <Head>
        <title>Main Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <main className={styles.main}> */}

          {/* <header className={styles.header}>
            <div className={styles.hotel_image}><Image src="/hotel.png" alt="hotel" height="100" width="100"/> </div>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">hCali</a>
            </h1>

            <p className={styles.description}>
              To get started, click on your meeting room or send us message in the live chat
            </p>
          </header> */}

    

        <div className={styles.grid}>
          {ballrooms.map((ballroom) => (
          <Link key={ballroom.id} href="/[ballroom]/requests" as={`/${ballroom.name}/requests`} >
            {/* <Link href="/" key={ballroom.id}> */}
              <a className={styles.card}>
                <h2>{ballroom.name}</h2>
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
      {/* </main> */}

    {/* </div> */}
    </Layout>
    </>
  );
}
