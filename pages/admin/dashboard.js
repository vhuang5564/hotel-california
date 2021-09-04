import Head from 'next/head';
import prisma from '../../lib/prisma';
import styles from '../../styles/AdminDashboard.module.scss';
import PhoneIcon from '@material-ui/icons/Phone';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

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

  // returns icon for specific request takes in string data.text
  // need to adjust later to include icons of every request
  const request = (text) => {
    switch (text) {
    case 'Need help with audio visual\n' :
      console.log('success!');
      return <OndemandVideoIcon className={styles.container_icon}/>;
    default:
      console.log('failure');
      return;
    }
  };

  request(data[0].text);

  return (
    <>
    
      <Head>
        <title>Reviews Dashboard</title>
      </Head>
      <header className={styles.header}>
        <h1>Requests</h1>
      </header>
      <section className={styles.container}>
        {data?.map((item) => (
          <div key={item.id} className={styles.container_inner}
            // style={{
            //   backgroundImage: `url(/${item.ballroom.imageUrl})`
            // }}
          >
            {request(item.text)}
            <span>by {item.user?.firstName} </span>
            <span>{item.user?.lastName}</span>
            <br />
            <span>{item.user?.phoneNumber} <PhoneIcon/></span>
            <br />
            <span> {item.text}</span>
            <span> in {item.ballroom?.name}</span>
            <hr />
            <span style={{
              color: "red",
            }}>posted at {item.createdAt.slice(11, 16)}</span>
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

    </>
  );
}