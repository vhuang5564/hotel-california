import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Ballroom.module.scss';
import Ballroom from '@/components/Ballroom';
import Layout from '@/components/Layout.user';
import prisma from '../../lib/prisma';

import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
// import requestHandler from 'pages/api/requests/create';

export const getStaticPaths = async() => {

  return {
    paths:[{ params: {ballroom: "Sandy Beach Ballroom"}}, { params: {ballroom: "Grand Ballroom"}},
      { params: {ballroom: "Santa Monica Ballroom"}}, { params: {ballroom: "Disney Ballroom"}},
      { params: {ballroom: "Ocean View Ballroom"}}, { params: {ballroom: "Buena Vista Ballroom"}}],
    fallback: false,
  };
};

export async function getStaticProps() {
  const createRequest = await prisma.request.create({
    data: {
      text: 'text',
      ballroomId: 1,
    }
  });

  createRequest;

  return {
    props: {},
  };

};

const images = [
  {
    url: '/bw_palm_leaf.png',
    title: 'COFFEE SERVICE',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'SALES COORDINATOR',
    icon: null,
    isDisabled: false
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'AUDIO VISUAL HELP',
    icon: null,
    isDisabled: false
  },
  {
    
    title: 'CONTRACT COPY',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    
    title: 'NEW ROOM KEY',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    
    title: 'BOTTLED WATER',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'ACCESS TO XEROX',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'ADJUST SETUP',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'EXTRA CHAIRS',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    
    title: 'ROOM REFRESH',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    
    title: 'BANQUET CAPTAIN',
    icon: <AppsIcon />,
    isDisabled: false
  },
  {
    
    title: 'OTHER REQUESTS',
    icon: <AppsIcon />,
    isDisabled: false
  }
];



const createRequest = async(image) => {
  toast.success('Your request has been sent!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });

  console.log(image);
};

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
              Need anything in <span style={{fontFamily: "'Allison', cursive", color: "red", fontSize: "150%"}}>{ballroom}</span>?..
            </h1>
          </section>

          <Ballroom onClick={(image) => createRequest(image)} images={images}/>

          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
          />

      </Layout>
        </main>
    </>
  );
};

export default Requests;

