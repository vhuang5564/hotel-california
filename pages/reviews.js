import styles from '@/styles/Reviews.module.css';
import { useState } from 'react';
import Layout from '@/components/Layout.user';
import prisma from '../lib/prisma';

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
    <div className={styles.hero}>
      <Layout title="Hotel California | Leave A Review">
        <main>
          <div className={styles.auth}>
            <h1>How Did We Do Today?</h1>
            <form onSubmit={saveReview}>
              <div>
                <label htmlFor="rating">Rating</label>
                <select id="rating" name="rating" type="number" required>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>
              <div>
                <label htmlFor="text">Your Review</label>
                <textarea
                  // className={styles.item}
                  id="text"
                  name="text"
                  // type="text"
                  // cols="30"
                  // rows="10"
                  placeholder="Your review here... 🏄"
                  required
                  
                />
              </div>
              <input type="submit" value="Post My Review" className="btn" />
            </form>
          </div>
          <section>
            {reviews?.map((item) => (
              <div key={item.id} className={styles.item}>
                <div>
                  <div className={styles.rating}>rating: {item.rating}</div>
                  <span
                    className={styles.rating}
                    style={{
                      fontFamily: "'Allison', cursive",
                      fontSize: '170%',
                      color: 'red',
                    }}
                  >
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
          </section>
        </main>
      </Layout>
    </div>
  );
}
