import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import AppsIcon from '@material-ui/icons/Apps';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import StreetviewIcon from '@material-ui/icons/Streetview';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoodIcon from '@material-ui/icons/Mood';
import SubwayIcon from '@material-ui/icons/Subway';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import PoolIcon from '@material-ui/icons/Pool';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import BathtubIcon from '@material-ui/icons/Bathtub';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Ballroom() {
  
  const notify = () => toast.success('Your request has been sent!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });

  const [images, setImages] = useState([
    {
      url: '/all_areas.jpg',
      title: 'COFFEE SERVICE',
      icon: <AppsIcon />,
      isDisabled: true
    },
    {
      url: '/cloche.jpg',
      title: 'SALES REPRESENTATIVE REQUIRED',
      icon: <LocalDiningIcon />,
      isDisabled: true
    },
    {
      url: '/restuarant.webp',
      title: 'ASSISTANCE WITH AUDIO VISUAL',
      icon: <MenuBookIcon />,
      isDisabled: false
    },
    {
      url: '/spa.jpg',
      title: 'COPY OF THE BANQUET EVENT ORDER',
      icon: <BathtubIcon />,
      isDisabled: false
    },
    {
      url: '/amenities.jpg',
      title: 'NEW MEETING ROOM KEY',
      icon: <PoolIcon />,
      isDisabled: false
    },
    {
      url: '/desk.jpg',
      title: 'RESTOCK BOTTLED WATER',
      icon: <MoodIcon />,
      isDisabled: false
    },
    {
      url: '/service.jpg',
      title: 'ASSISTANCE MAKING XEROX COPIES',
      icon: <AddIcCallIcon />,
      isDisabled: false
    },
    {
      url: '/stall.jpg_fit=scale',
      title: 'WHEEL CART',
      icon: <StreetviewIcon />,
      isDisabled: false
    },
    {
      url: 'bus.jpg',
      title: 'EXTRA CHAIRS',
      icon: <SubwayIcon />,
      isDisabled: false
    },
    {
      url: 'concierge.jpg',
      title: 'MEETING ROOM REFRESH',
      icon: <AssignmentIndIcon />,
      isDisabled: false
    },
    {
      url: 'valet.jpg',
      title: 'WET FLOOR',
      icon: <TimeToLeaveIcon />,
      isDisabled: false
    },
    {
      url: 'other.png',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />,
      isDisabled: false
    }
  ]);

  const request = (image) => {
    // console.log(image.title); //object title
    // console.log(image.isDisabled);
    console.log(image.isDisabled);
  };

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
              onClick={notify}
              // onClick={() => request(image)}
              disabled={image.isDisabled}
            ></Button>

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
