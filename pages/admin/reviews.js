import Head from 'next/head';
import prisma from '../../lib/prisma';

export async function getStaticProps() {
  
  const reviews = await prisma.review.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  // Had to do the json trick to get the date obj that is not serializable and will error out if not stringified
  
  return {
    props: {
      data: JSON.parse(JSON.stringify(reviews)),
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
            <span>rating: {item.rating}</span>
            <br />
            <span>by {item.user?.firstName} </span>
            <span>{item.user?.lastName}</span>
            <br />
            <span> {item.user?.email}</span>
            <br />
            <span> {item.user?.phoneNumber}</span>
            <br />
            <span> {item.text}</span>
            <br />
            <hr />
            <span>{item.createdAt.slice(0, 10)}</span>
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