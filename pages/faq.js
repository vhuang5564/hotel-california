import Head from 'next/head';
import Layout from '@/components/Layout.user';
import styles from '@/styles/Faq.module.scss';

export default function Faq() {
  return (
    <Layout>
      <section styles={styles.container}>
        <h1>FAQ</h1>
        <h2>What is Hotel California?</h2>
        <p>Hotel California is an app that lets you connect with our staff here at Hotel California when it comes to looking for more room refreshments or
          maybe you have misplaced your suite keys, Hotel California has got you covered.</p>
        <br/>
        <h2>Ballrooms</h2>
        <p>A list of the most common services that are required from us are displayed in the ballroom page. Simply press the button for the request that you desire and our
          personnel will receive a notification that will help you right away and expedite the process.</p>
        <br/>
        <h2>Chatting</h2>
        <p>Our built in chatting app lets you interact with our staff in real time. Have you got a specific query that our options don&apos;t cover? Feel free to hit up
          one of our employees at any time and allow them to assist you.</p>
        <br/>
        <h2>Satisfied?</h2>
        <p>If you were impressed with our app or if there were areas that you think can be improved upon please leave a review. We will do our utmost to provide you the best
          hotel experience possible.
        </p>
      </section>
    </Layout>
  );
}