import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import Ballroom from '../../components/Ballroom';
import Layout from '@/components/Layout.user';

const Requests = () => {
  const router = useRouter();
  const { ballroom } = router.query;

  return (
    <>
      <Layout>
        <body>
          <h1>How can we improve your event in {ballroom}?</h1>
          <h2>Please choose your options here</h2>
          <Ballroom />
        </body>
      </Layout>
    </>
  );
};

export default Requests;
