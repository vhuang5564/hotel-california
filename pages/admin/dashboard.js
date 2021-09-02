import Head from 'next/head';
import prisma from '../../lib/prisma';

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
  return (
    <>
    
      <Head>
        <title>Reviews Dashboard</title>
      </Head>
      <section>
      {data?.map((item) => (
          <div key={item.id} className="container">
            <span>by {item.user?.firstName} </span>
            <span>{item.user?.lastName}</span>
            <br />
            <span> {item.user?.phoneNumber}</span>
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
  )
}