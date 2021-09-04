import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import Head from 'next/head';
import prisma from '../lib/prisma';
import Sidebar from '../components/Sidebar'
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
    <>
      <Head>
        <title>Your Review</title>
      </Head>
      <Sidebar />
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
          <div key={item.id} className="container">
            <span>rating: {item.rating}</span>
            <br />
            <span>by {item.user?.firstName} </span>
            <span>{item.user?.lastName}</span>
            <br />
            <span> {item.text}</span>
            <br />
            <hr />
            <span>{item.createdAt.slice(0, 10)}</span>
            <style jsx>{`
              .container {
                margin: 50px;
                padding: 10px;
              }
            `}</style>
          </div>
        ))}
      </main>
    </>
  );
}
