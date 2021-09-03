import Head from 'next/head';
import prisma from '../../lib/prisma';
import styles from '../../styles/AdminDashboard.module.scss';
import PhoneIcon from '@material-ui/icons/Phone';

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
  // Had to do the json trick to get the date obj that is not serializable and will error out if not stringified
  
  return {
    props: {
      data: JSON.parse(JSON.stringify(requests)),
    },
    revalidate: 1,
  };
}


export default function Reviews({data }) {


  console.log(data[0].text); // grand.jpg

  const request = (text) => {
    switch (text) {
    case 'Need help with audio visual\n' :
      console.log('success!');
      break;
    default:
      console.log('failure');
    }
  };

  request(data[0].text);

  return (
    <>
    
      <Head>
        <title>Reviews Dashboard</title>
      </Head>
      <section className={styles.container}>
        {data?.map((item) => (
          <div key={item.id} className={styles.container_inner}
            style={{
              backgroundImage: `url(/${item.ballroom.imageUrl})`
            }}>
            <span>by {item.user?.firstName} </span>
            <span>{item.user?.lastName}</span>
            <br />
            <span>{item.user?.phoneNumber} <PhoneIcon/></span>
            <br />
            <span> {item.text}</span>
            <span> in {item.ballroom?.name}</span>
            <hr />
            <span>posted at {item.createdAt.slice(11, 16)}</span>
          </div>
        ))}
        <style jsx>{`
        .container {
          margin: 50px;
          padding: 10px;
        }
      `}</style>
      </section>

    </>
  );
}