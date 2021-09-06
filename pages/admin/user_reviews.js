import LayoutAdmin from '@/components/Layout.admin';
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

  return {
    props: {
      data: JSON.parse(JSON.stringify(reviews)),
    },
    revalidate: 1,
  };
}

export default function Reviews({ data }) {
  return (
    <LayoutAdmin title="Admin Dashboard Reviews | Hotel California">
      <section>
        {data?.map((item) => (
          <div key={item.id} >
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
        
      </section>
    </LayoutAdmin>
  );
}
