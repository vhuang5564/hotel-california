import prisma from '../../lib/prisma';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LayoutAdmin from '@/components/Layout.admin';
import styles from '@/styles/AdminReviews.module.scss';

export default function SearchPage({ data }) {
  const router = useRouter();
  return (
    <LayoutAdmin title="Search Results">
      <Link href="/admin/dashboard"><a style={{color: "red"}}>Go Back</a></Link>
      <h1>Search Results for {router.query.term}</h1>
      {data.length === 0 && <h3>No requests to show</h3>}
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <span className={styles.time}>{item.createdAt.slice(11, 16)} {new Date(item.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}</span>
          <span>by {item.user?.firstName} {item.user?.lastName}</span>
          <span>{item.user?.email}</span>
          <span className={styles.phone}>{item.user?.phoneNumber} </span>
          <span className={styles.text}> {item.text}</span>
          <span> in {item.ballroom?.name}</span>
        </div>
      ))}
    </LayoutAdmin>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const requests = await prisma.request.findMany({
    where: {
      OR: [
        {
          text: {
            contains: term,
            mode: 'insensitive',
          },
        },
        {
          ballroom: {
            name: {
              contains: term,
              mode: 'insensitive',
            },
          },
        },
        {
          user: {
            firstName: {
              contains: term,
              mode: 'insensitive',
            },
          },
        },
        {
          user: {
            lastName: {
              contains: term,
              mode: 'insensitive',
            },
          },
        },
      ],
    },
    include: {
      user: true,
      ballroom: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  return {
    props: { data: JSON.parse(JSON.stringify(requests)) },
  };
}
