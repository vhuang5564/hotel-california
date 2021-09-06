import prisma from '../lib/prisma';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout.user';

export default function SearchPage({ data} ) {
  const router = useRouter();
  console.log('>>>>>>>>>>>>>>>>>>>', router.query);
  return (
    <Layout title="Search Results">
      <Link href="/admin/dashboard">Go Back</Link>
      <h1>Search Results for </h1>
      {data.length === 0 && <h3>No requests to show</h3>}
      {data.map((item) => (
        <div key={item.id}>
          <span>by {item.user?.firstName} </span>
          <span>{item.user?.lastName}</span>
          <br />
          <span>{item.user?.phoneNumber}</span>
          <span>{item.user?.email}</span>
          <br />
          <span> {item.text}</span>
          <span> in {item.ballroom?.name}</span>
          <hr />
          <span
            style={{
              color: 'red',
            }}
          >
            posted at {item.createdAt.slice(11, 16)}
          </span>
          <span>
            {new Date(item.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const requests = await prisma.request.findMany({
    where: {
      OR: [
        {
          text: {
            contains: 'aniston',
            mode: 'insensitive',
          },
        },
        {
          ballroom: {
            name: {
              contains: 'aniston',
              mode: 'insensitive',
            },
          },
        },
        {
          user: {
            firstName: {
              contains: 'aniston',
              mode: 'insensitive',
            },
          },
        },
        {
          user: {
            lastName: {
              contains: 'aniston',
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
