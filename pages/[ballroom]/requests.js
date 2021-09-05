import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Ballroom.module.scss';
import Ballroom from '@/components/Ballroom';
import Layout from '@/components/Layout.user';

const Requests = () => {
  const router = useRouter();
  const { ballroom } = router.query;

  return (
    <>
        <main className={styles.hero}>
      <Layout>
          <section style={{ textAlign: 'center', fontSize: '150%' }}>
            <h1
              style={{
                fontFamily: "'Proza Libre', sans-serif",
                color: 'rgb(88,88,88)',
              }}
            >
              How can we improve your event in {ballroom}?
            </h1>
          </section>

          <Ballroom />
      </Layout>
        </main>
    </>
  );
};

export default Requests;
