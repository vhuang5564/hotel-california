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

export default function Ballroom(props) {
  const images = [
    {
      url: '../public/favicon.ico',
      title: 'ALL AREAS'
    },
    {
      url: 'placeholder',
      title: 'IN-ROOM DINING'
    },
    {
      url: 'placeholder',
      title: 'RESTAURANT & LOUNGES'
    },
    {
      url: 'placeholder',
      title: 'SPA & SALON'
    },
    {
      url: 'placeholder',
      title: 'HOTEL AMENITIES'
    },
    {
      url: 'placeholder',
      title: 'FRONT DESK'
    },
    {
      url: 'placeholder',
      title: 'SERVICES'
    },
    {
      url: 'placeholder',
      title: 'LOCAL FLAVOR'
    },
    {
      url: 'placeholder',
      title: 'TRANSPORT'
    },
    {
      url: 'placeholder',
      title: 'CONCIERGE'
    },
    {
      url: 'placeholder',
      title: 'VALET SERVICE'
    },
    {
      url: 'placeholder',
      title: 'OTHER REQUESTS'
    }
  ];

  return (
    <section className={styles.grid_container}>

      {images.map((image) => 
      (
        <Button className={styles.ballroom} variant="outlined" 
        style={{backgroundImage: `url(./public/favicon.ico)`}}
        >{image.title}</Button>
      )
      
      )}
      {/* <Button className={styles.ballroom} startIcon={<AppsIcon />} disabled variant="outlined">ALL AREAS</Button>
      <Button className={styles.ballroom} startIcon={<LocalDiningIcon />} variant="contained">IN-ROOM DINING</Button>
      <Button className={styles.ballroom} startIcon={<MenuBookIcon />} variant="outlined">RESTAURANT & LOUNGES</Button>
      <Button className={styles.ballroom} startIcon={<BathtubIcon />} variant="outlined">SPA & SALON</Button>
      <Button className={styles.ballroom} startIcon={<PoolIcon />} variant="outlined">HOTEL AMENITIES</Button>
      <Button className={styles.ballroom} startIcon={<AssignmentIndIcon />} variant="outlined">FRONT DESK</Button>
      <Button className={styles.ballroom} startIcon={<AddIcCallIcon />} variant="outlined">SERVICES</Button>
      <Button className={styles.ballroom} startIcon={<StreetviewIcon />} variant="outlined">LOCAL FLAVOR</Button>
      <Button className={styles.ballroom} startIcon={<SubwayIcon />} variant="outlined">TRANSPORT</Button>
      <Button className={styles.ballroom} startIcon={<MoodIcon />} variant="outlined">CONCIERGE</Button>
      <Button className={styles.ballroom} startIcon={<TimeToLeaveIcon />} variant="outlined">VALET SERVICE</Button>
      <Button className={styles.ballroom} startIcon={<AppsIcon />} variant="outlined">OTHER REQUESTS</Button> */}
    </section>
  );
}