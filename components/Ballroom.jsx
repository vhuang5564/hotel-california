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
export default function Ballroom() {
  const images = [
    {
      url: '/all_areas.jpg',
      title: 'COFFEE SERVICE',
      icon: <AppsIcon />
    },
    {
      url: '/cloche.jpg',
      title: 'SALES REPRESENTATIVE REQUIRED',
      icon: <LocalDiningIcon />
    },
    {
      url: '/restuarant.webp',
      title: 'ASSISTANCE WITH AUDIO VISUAL',
      icon: <MenuBookIcon />
    },
    {
      url: '/spa.jpg',
      title: 'COPY OF THE BANQUET EVENT ORDER',
      icon: <BathtubIcon />
    },
    {
      url: '/amenities.jpg',
      title: 'NEW MEETING ROOM KEY',
      icon: <PoolIcon />
    },
    {
      url: '/desk.jpg',
      title: 'RESTOCK BOTTLED WATER',
      icon: <MoodIcon />
    },
    {
      url: '/service.jpg',
      title: 'ASSISTANCE MAKING XEROX COPIES',
      icon: <AddIcCallIcon />
    },
    {
      url: '/stall.jpg_fit=scale',
      title: 'WHEEL CART',
      icon: <StreetviewIcon />
    },
    {
      url: 'bus.jpg',
      title: 'EXTRA CHAIRS',
      icon: <SubwayIcon />
    },
    {
      url: 'concierge.jpg',
      title: 'MEETING ROOM REFRESH',
      icon: <AssignmentIndIcon />
    },
    {
      url: 'valet.jpg',
      title: 'WET FLOOR',
      icon: <TimeToLeaveIcon />
    },
    {
      url: 'other.png',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />
    }
  ];

  const request = (image) => {
    console.log(image.title); //object title
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
              onClick={() => request(image)}
            ></Button>
          </div>
        )
      )}
    </section>
  );
}