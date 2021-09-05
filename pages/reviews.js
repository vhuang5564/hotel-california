import styles from '@/styles/Item.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout.user';
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
    e.preventDefault();
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
    setReviews([review, ...reviews]);
    e.target.reset();
  }

  return (
    <Layout title="Hotel California | Leave A Review">
      <main>
        <form onSubmit={saveReview}>
          <label htmlFor="rating">Rating</label>
          <br />
          <select id="rating" name="rating" type="number" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <br />
          <label htmlFor="text">Your Review</label>
          <br />
          <textarea
            className={styles.item}
            id="text"
            name="text"
            cols="30"
            rows="10"
            placeholder="Your review here... 🏄"
            required
          />
          <br />
          <button type="submit">Add Review</button>
        </form>

        {reviews?.map((item) => (
          <div key={item.id} className={styles.item}>
            <div>
              <div className={styles.rating}>rating: {item.rating}</div>
              <span className={styles.rating}>
                by {item.user?.firstName} {item.user?.lastName}
              </span>
              <div className={styles.rating}>
                {new Date(item.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>

            <div className={styles.rating}>{item.text}</div>
          </div>
        ))}
      </main>
    </Layout>
  );
}
