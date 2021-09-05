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
      url: '/palm_leaf.jpg',
      title: 'COFFEE SERVICE',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'SALES REPRESENTATIVE REQUIRED',
      icon: <LocalDiningIcon />,
    },
    {
      url: '/palm_leaf.jpg',
      title: 'ASSISTANCE WITH AUDIO VISUAL',
      icon: <MenuBookIcon />,
    },
    {
      url: '/light_bg.png',
      title: 'COPY OF THE BANQUET EVENT ORDER',
      icon: <BathtubIcon />,
    },
    {
      url: '/light_bg.png',
      title: 'NEW MEETING ROOM KEY',
      icon: <PoolIcon />,
    },
    {
      url: '/light_bg.png',
      title: 'RESTOCK BOTTLED WATER',
      icon: <MoodIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ASSISTANCE MAKING XEROX COPIES',
      icon: <AddIcCallIcon />,
    },
    {
      url: '/palm_leaf.jpg',
      title: 'ADJUST ROOM TEMTERATURE',
      icon: <StreetviewIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'EXTRA CHAIRS',
      icon: <SubwayIcon />,
    },
    {
      url: '/light_bg.png',
      title: 'MEETING ROOM REFRESH',
      icon: <AssignmentIndIcon />,
    },
    {
      url: '/light_bg.png',
      title: 'WET FLOOR',
      icon: <TimeToLeaveIcon />,
    },
    {
      url: '/light_bg.png',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />,
    },
  ];

  const request = (image) => {
    console.log(image.title); //object title
  };

  return (
    <section className={styles.grid_container}>
      {images.map((image) => (
        <div key={image.title}>
          <Button
            className={styles.ballroom}
            variant="outlined"
            style={{
              backgroundImage: `url(${image.url})`,
            }}
            onClick={() => request(image)}
          >
            <h2 className={styles.wording}>{image.title}</h2>
          </Button>
        </div>
      ))}
    </section>
  );
}
