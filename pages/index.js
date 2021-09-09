
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
                    backgroundImage: ` url('https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE4fDMzOTkzNzF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')`
                  }}
                >
                  {/* <br /> */}
                  <h2>{ballroom.name}</h2>
                  </div>
                  <div
                  className={styles.background}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.00)), url('https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTE4fDMzOTkzNzF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')`
                  }}
                >
                  {/* <br /> */}
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
