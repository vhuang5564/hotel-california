import LayoutAdmin from '@/components/Layout.admin';
import prisma from '../../lib/prisma';
import styles from '@/styles/AdminReviews.module.scss';

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
          <div key={item.id} className={styles.item}>
            <span>rating: {item.rating}</span>
            <span className={styles.time}>{item.createdAt.slice(0, 10)}</span>
            <span>by {item.user?.firstName} {item.user?.lastName}</span>
            <span> {item.user?.email}</span>
            <span className={styles.phone}> {item.user?.phoneNumber}</span>
            <span className={styles.text}> {item.text}</span>
          </div>
        ))}
        
      </section>
    </LayoutAdmin>
  );
}
