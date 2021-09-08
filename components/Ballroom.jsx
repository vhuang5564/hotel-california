import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Ballroom({ ballroom, images }) {
  async function sendRequest(ballroom, text) {
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
  }

  return (
    <>
      <ToastContainer
        
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        rtl={false}
        pauseOnHover={false}
        closeButton={false}
        icon={false}
      />
      <section className={styles.grid_container}>
        {images.map((image) => (
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
