import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Head from 'next/head';
import prisma from '../lib/prisma';
import Sidebar from '../components/Sidebar';

export async function getServerSideProps(context) {
  const reviews = await prisma.review.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  // Had to do the json trick to get the date obj that is not serializable and will error out if not stringified
  return {
    props: {
      data: JSON.parse(JSON.stringify(reviews)),
    },
  };
}

export default function Review({ data }) {
  const [reviews, setReviews] = useState(data);

  async function saveReview(e) {
    // e.preventDefault();
    const response = await fetch('/api/reviews/create', {
      body: JSON.stringify({
        rating: +e.target.rating.value,
        text: e.target.text.value,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
    });

    const review = await response.json();
    setReviews([...reviews, review]);
  }

  return (
    <>
      <Head>
        <title>Your Review</title>
      </Head>
      <Sidebar />
      <main className={styles.main}>
        <form onSubmit={saveReview} className={styles.card}>
          <label htmlFor="rating">Rating</label>
          <br />
          <input
            className={styles.card}
            id="rating"
            name="rating"
            type="number"
            placeholder="Rating 1 to 5"
            required
          />
          <br />
          <label htmlFor="text">Your Review</label>
          <br />
          <textarea
            className={styles.card}
            id="text"
            name="text"
            cols="30"
            rows="10"
            placeholder="Your review here... 🏄"
            required
          />
          <br />
          <button type="submit" className={styles.card}>
            Add Review
          </button>
        </form>
        {/* if there are any reviews, then map over */}
        {reviews?.map((item) => (
          <div key={item.id} className={styles.card}>
            <span>rating: {item.rating}</span>
            <br />
            <span>by {item.user?.firstName} </span>
            <span>{item.user?.lastName}</span>
            <br />
            <span> {item.text}</span>
            <br />
            <hr />
            <span>{item.createdAt.slice(0, 10)}</span>
          </div>
        ))}
      </main>
    </>
  );
}
