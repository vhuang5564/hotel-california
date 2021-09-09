import prisma from '../../lib/prisma';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LayoutAdmin from '@/components/Layout.admin';
import { DataGrid } from '@mui/x-data-grid';

export default function Sear({ data }) {
  const router = useRouter();

  const columns = [
    { field: 'id', headerName: 'ID', width: 95 },
    {
      field: 'text',
      headerName: 'REQUEST',
      width: 230,
    },
    {
      field: 'ballroom',
      headerName: 'BALLROOM',
      width: 170,
    },
    {
      field: 'lastName',
      headerName: 'LAST NAME',
      width: 165,
    },
    {
      field: 'firstName',
      headerName: 'FIRST NAME',
      width: 165,
    },
    {
      field: 'date',
      headerName: 'DATE',
      width: 150,
    },
    {
      field: 'time',
      headerName: 'TIME',
      width: 150,
    },
  ];

  let rows = [];
  rows = data.map((item) => {
    return (rows = {
      id: item.id,
      firstName: item.user.firstName,
      lastName: item.user.lastName,
      ballroom: item.ballroom.name,
      text: item.text,
      date: item.createdAt.slice(0, 10),
      time: item.createdAt.slice(11, 16)
    });
  });

  return (
    <LayoutAdmin title="Search Results">
      <Link href="/admin/dashboard">
        <a style={{ color: 'red' }}>Go Back</a>
      </Link>
      <h1>Search Results for &quot;{router.query.term}&quot;:</h1>
      {data.length === 0 && <h3>No requests to show</h3>}

      <div style={{ height: 750, width: '100%', backgroundColor: "rgb(255, 255, 255, 0.9)" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={12}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>     
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
