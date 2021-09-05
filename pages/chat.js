import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from "../styles/chat.module.css"
import Layout from '@/components/Layout.user';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Chat window</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.header}>Live-Chat demo</h1>
        <AblyChatComponent />
      </main>

      <footer>
      </footer>

      <style jsx>{`
        ...       
      `}</style>

      <style jsx global>{`
        ...        
      `}</style>
    </div>
    </Layout>
  )
}

