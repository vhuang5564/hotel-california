import prisma from '../../lib/prisma';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LayoutAdmin from '@/components/Layout.admin';

export default function SearchPage({ data }) {
  const router = useRouter();
  return (
    <LayoutAdmin title="Search Results">
      <Link href="/admin/dashboard"><a style={{color: "red"}}>Go Back</a></Link>
      <h1>Search Results for {router.query.term}</h1>
      {data.length === 0 && <h3>No requests to show</h3>}
      {data.map((item) => (
        <div key={item.id}>
          <span>by {item.user?.firstName} </span>
          <span>{item.user?.lastName}</span>
          <br />
          <span>{item.user?.phoneNumber} </span>
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
