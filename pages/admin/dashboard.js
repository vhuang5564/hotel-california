import Head from 'next/head';
import prisma from '../../lib/prisma';
import styles from '@/styles/AdminDashboard.module.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

import LayoutAdmin from '@/components/Layout.admin';

import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';

export async function getStaticProps() {
  const requests = await prisma.request.findMany({
    include: {
      ballroom: true,
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    props: {
      data: JSON.parse(JSON.stringify(requests)),
    },
    revalidate: 1,
  };
}

export default function Reviews({ data }) {
  console.log(data[0].text); // grand.jpg

  // returns icon for specific request takes in string data.text
  // need to adjust later to include icons of every request
  const request = (text) => {
    switch (text) {

      case 'Need help with audio visual\n':
        console.log('success!');
        return <OndemandVideoIcon className={styles.container_icon} />;
      default:
        console.log('failure');
        return;

    }
  };

  request(data[0].text);

  return (
    <LayoutAdmin title="Admin Dashboard | Hotel California">
      {/* <div className={styles.header}>
        <h1>Requests</h1>
      </div> */}
      <section className={styles.container}>
        {data?.map((item) => (

          <div key={item.id} className={styles.container_inner}>
            <span className={styles.container_name}>by {item.user?.firstName} {item.user?.lastName} {item.user?.phoneNumber} <PhoneIcon/></span>
            <span className={styles.container_text}> {item.text} in {item.ballroom?.name}</span>
            <span className={styles.container_date}>posted at {item.createdAt.slice(11, 16)}</span>
            {request(item.text)}

          </div>
        ))}
        <style jsx>{`
          .container {
            margin: 50px;
            padding: 10px;
          }
        `}</style>
        <div className={styles.total}>Total requests: {data.length}</div>
      </section>
    </LayoutAdmin>
  );
}
