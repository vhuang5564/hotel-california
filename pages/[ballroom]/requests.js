import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Ballroom from '../../components/Ballroom';

const Requests = () => {
  const router = useRouter();
  const { ballroom } = router.query;

  return (
    <>
      <h1>Meeting Room: {ballroom}</h1>

      <body>
        <h2>Hotel California</h2>
        <Ballroom />
      </body>

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
    </>
  );
};

export default Requests;
