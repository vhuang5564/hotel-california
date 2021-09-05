import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header.user'
import Footer from './Footer'
import Showcase from './Showcase'
// import InfoBox from './InfoBox'
import styles from '@/styles/Layout.user.module.css'

export default function Layout({ title, keywords, description, children }) {
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

      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'HotelCalifornia | Connect with us',
  description: 'Connecting venue clients and the hotel team ',
  keywords: 'hotel, events, chat, venue, requests',
}