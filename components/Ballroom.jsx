import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Ballroom({ ballroom, images }) {
  const [appState, changeState] = useState({ disabledObject: null, images });

  async function sendRequest(ballroom, text, index) {
    // e.preventDefault();
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
    toast.error('Your request has been sent!', {
      icon: false,
    });
    console.log(res);
    toggleDisabled(index);
  }

  function toggleDisabled(index) {
    changeState({ ...appState, disabledObject: appState.images[index] });
  }
  function toggleDisabledStyles(index) {
    if (appState.images[index] === appState.disabledObject) {
      return true;
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        rtl={false}
        pauseOnHover={false}
        closeButton={false}
        icon={false}
      />
      <section className={styles.grid_container}>
        {appState.images.map((image, index) => (
          <div key={index} className={styles.card}>
            <Button
              disabled={toggleDisabledStyles(index)}
              className={styles.ballroom}
              variant="outlined"
              style={{
                backgroundImage: `url(${image?.url})`,
              }}
              onClick={(e) => sendRequest(ballroom, image.title, index)}
            >
              <a href="#">
                <h2 className={styles.wording}>{image.title}</h2>
              </a>
            </Button>
          </div>
        ))}
      </section>
    </>
  );
}
