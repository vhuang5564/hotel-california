import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import AppsIcon from '@material-ui/icons/Apps';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import image from 'next/image';



export default function Ballroom({ballroom, images}) {
  async function sendRequest(ballroom, text) {
    // e.preventDefault();
    console.log(ballroom, text)
    const response = await fetch('/api/requests/create', {
      body: JSON.stringify({
        
          ballroomId: +ballroom,
          text,
        
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
    });
    
    const res = await response.json();
    console.log("Heeeereee", res);
  }
  
  return (
    <section className={styles.grid_container}>
      {images.map((image) =>
        (
          <div key={image.title} className={styles.card}>
            <Button
            
              className={styles.ballroom}
              variant="outlined"
              style={{
                backgroundImage: `url(${image?.url})`,
              }}
              // onClick={() => props.onClick(image)}
              // disabled={image.isDisabled}
              onClick={(e) => sendRequest(ballroom, image.title)}
            >
              <a href="#"><h2 className={styles.wording}>{image.title}</h2></a>
            </Button >
          </div>
        )
      )}
    </section>
  );
}
