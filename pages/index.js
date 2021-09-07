import Head from 'next/head';
import prisma from '../lib/prisma';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Layout from '@/components/Layout.user';


export const getStaticProps = async() => {
  const ballrooms = await prisma.ballroom.findMany();
  return { props: { ballrooms } };
};


export default function Home({ ballrooms }) {
  return (
    <>
    <Layout>
        <div className={styles.grid}>
          {ballrooms.map((ballroom) => (
          <Link key={ballroom.id} href="/[ballroom]/requests" as={`/${ballroom.id}/requests`} >
            {/* <Link href="/" key={ballroom.id}> */}
              <a className={styles.card}>
                <h2>{ballroom.name}</h2>
                <div
                  className={styles.background}
                  style={{
                    backgroundImage: `url(${ballroom.imageUrl})`
                    // backgroundImage: `url('/palm_leaf.jpg)`
                  }}
                ></div>
              </a>
            </Link>
          ))}
        </div>
    </Layout>
    </>
  );
}
