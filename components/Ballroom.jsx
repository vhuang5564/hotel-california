import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import AppsIcon from '@material-ui/icons/Apps';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Ballroom() {
  
  const request = (image) => {
    console.log(image);
    toast.success('Your request has been sent!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const [images, setImages] = useState([
    {
      url: '/palm_leaf.jpg',
      title: 'COFFEE SERVICE',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'SALES COORDINATOR',
      icon: null,
      isDisabled: false
    },
    {
      url: '/palm_leaf.jpg',
      title: 'AUDIO VISUAL HELP',
      icon: null,
      isDisabled: false
    },
    {
      url: '/light_bg.png',
      title: 'CONTRACT COPY',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/light_bg.png',
      title: 'NEW ROOM KEY',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/light_bg.png',
      title: 'BOTTLED WATER',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ACCESS TO XEROX',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/palm_leaf.jpg',
      title: 'ADJUST SETUP',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'EXTRA CHAIRS',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/light_bg.png',
      title: 'ROOM REFRESH',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/light_bg.png',
      title: 'BANQUET CAPTAIN',
      icon: <AppsIcon />,
      isDisabled: false
    },
    {
      url: '/light_bg.png',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />,
      isDisabled: false
    }
  ]);

  return (
    <section className={styles.grid_container}>
      {images.map((image) =>
        (
          <div key={image.title} className={styles.card}>
            <h2 className={styles.wording}>
              {image.title} {image.icon}
            </h2>
            <Button
              className={styles.ballroom}
              variant="outlined"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
              onClick={() => request(image)}
              disabled={image.isDisabled}
            >
              <a href="#"><h2 className={styles.wording}>{image.title}</h2></a>
            </Button>

            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
            />
          </div>
        )
      )}
    </section>
  );
}
