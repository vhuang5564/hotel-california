import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header.admin'
import Footer from './Footer'
import Showcase from './Showcase'
import Sidebar from './Sidebar'
// import InfoBox from './InfoBox'
import styles from '@/styles/Layout.user.module.css'

export default function LayoutAdmin({ title, keywords, description, children, showcase }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {/* <Sidebar /> */}
      {/* show the Showcase only on the home page */}
      {/* {(router.pathname === '/' ) && <Showcase />} */}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

LayoutAdmin.defaultProps = {
  title: 'HotelCalifornia | Connect with us',
  description: 'Connecting venue clients and the hotel team ',
  keywords: 'hotel, events, chat, venue, requests',
  
}