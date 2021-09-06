import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import AppsIcon from '@material-ui/icons/Apps';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function Ballroom(props) {
  
  return (
    <section className={styles.grid_container}>
      {props.images.map((image) =>
        (
          <div key={image.title} className={styles.card}>
            <Button
              className={styles.ballroom}
              variant="outlined"
              style={{
                backgroundImage: `url(${image?.url})`,
              }}
              onClick={() => props.onClick(image)}
              disabled={image.isDisabled}
            >
              <a href="#"><h2 className={styles.wording}>{image.title}</h2></a>
            </Button>
          </div>
        )
      )}
    </section>
  );
}
