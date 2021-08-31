import Ballroom from "../../components/Ballroom";
import Sidebar from "../../components/Sidebar";
import { useRouter } from 'next/router'

export default function Room() {
  const router = useRouter()
  const { id } = router.query
  return (
    <body>
      <h2>{ id }</h2>
      <Sidebar />
      <Ballroom />
    </body>
  );
}


// import Link from 'next/link'
// import Image from 'next/image'
// import styles from '../../styles/Home.module.css'


// const Room = () => {


//   return (
//     <>
//             <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">hCali</a>
//         </h1>

//         <h1>Meeting Room: { id }</h1>
//         {/* {console.log( ">>>>>>>>>>>>>>>>>>", id )} */}

//         <p className={styles.description}>
//           Request assistance by clicking on a tile
//         </p>

//       <ul>
//         <li>
//           <Link href="/requests/[id]" as={`/requests/${id}`}>
//             <a>First request</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/requests/[id]" as={`/requests/${id}`}>
//             <a>Second request</a>
//           </Link>
//         </li>
//       </ul>
    

//         <div className={styles.grid}>
           
//         {/* {requests.map((request) => (
//           <Link key={request.id} href="/requests/[id]" as={`/requests/${request.name}`} >
//           <a className={styles.card}>
//             <h2>{request.title} &rarr;</h2>
//             <p>Click to check instant request options</p>
//           </a>
//           </Link>
//           ))} */}

//         </div>
//       </main>


//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//       </>
//   )
// }

// export default Room

// // export async function ballroomQuery() { await prisma.ballroom.findUnique({
// //   where: {
// //     id: 1,
// //   },
// // });
// // }

// // export default function getBallroomName() {

// // }


// // export async function getStaticPaths() {

// // }

// // export async function getStaticProps() {

// // }