import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Ballroom.module.scss';
import Ballroom from '@/components/Ballroom';
import Layout from '@/components/Layout.user';
import { prisma } from '@prisma/client';
import { ToastContainer, toast } from 'react-toastify';

const sendRequest = () => {
  console.log("sent");
}

const request = (image) => {
  toast.success('Your request has been sent!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });

  console.log(image.title);
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

          <Ballroom onClick={request}/>

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

// const requests = await prisma.Request.create({
//   data: {
//     text: 
//   }

// })