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
      <h1>How can we improve your event in {ballroom}?</h1>
      <h2>Please choose your options here</h2>

      <body >
        <Ballroom />
      </body>
    </>
  );
};

export default Requests;
