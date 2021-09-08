
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
              <a className={styles.card}>
                <div
                  className={styles.background}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ballroom.imageUrl})`
                  }}
                >
                  <br />
                  <h2>{ballroom.name}</h2>
                  </div>
                  <div
                  className={styles.background}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ballroom.imageUrl})`
                  }}
                >
                  <br />
                  <h2>{ballroom.name}</h2>
                  </div>
              </a>
            </Link>
          ))}
        </div>
    </Layout>
    </>
  );
}
