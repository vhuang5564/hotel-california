import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Link from 'next/link';
import prisma from '../lib/prisma';
import Sidebar from '../components/Sidebar';

export default function Review({ data }) {
  const [formData, setFormData] = useState({});
  const [reviews, setReviews] = useState(data);

  async function saveReview(e) {
    e.preventDefault();
    setReviews([...reviews, formData]);
    const response = await fetch('/api/reviews/create', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    return await response.json();
  }

  return (
    <>
      <Sidebar />
      <main className={styles.main}>
        {/* {console.log(JSON.parse(reviews)[0].user.firstName)} */}
        {JSON.parse(reviews).map((item) => (
          <div key={item.id} className={styles.card}>
            <span>rating: {item.rating}</span>
            <br />
            <span>by {item.user.firstName} </span>
            <span>{item.user.lastName}</span>
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

export async function getServerSideProps() {
  const reviews = await prisma.review.findMany({
    include: {
      user: true,
    },
  });

  return {
    props: {
      data: JSON.stringify(reviews),
    },
  };
}
