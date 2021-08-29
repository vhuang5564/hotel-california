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
  return (
    <section className={styles.grid_container}>
      <Button className={styles.ballroom} startIcon={<AppsIcon />}>ALL AREAS</Button>
      <Button className={styles.ballroom} startIcon={<LocalDiningIcon />}>IN-ROOM DINING</Button>
      <Button className={styles.ballroom} startIcon={<MenuBookIcon />}>RESTAURANT & LOUNGES</Button>
      <Button className={styles.ballroom} startIcon={<BathtubIcon />}>SPA & SALON</Button>
      <Button className={styles.ballroom} startIcon={<PoolIcon />}>HOTEL AMENITIES</Button>
      <Button className={styles.ballroom} startIcon={<AssignmentIndIcon />}>FRONT DESK</Button>
      <Button className={styles.ballroom} startIcon={<AddIcCallIcon />}>SERVICES</Button>
      <Button className={styles.ballroom} startIcon={<StreetviewIcon />}>LOCAL FLAVOR</Button>
      <Button className={styles.ballroom} startIcon={<SubwayIcon />}>TRANSPORT</Button>
      <Button className={styles.ballroom} startIcon={<MoodIcon />}>CONCIERGE</Button>
      <Button className={styles.ballroom} startIcon={<TimeToLeaveIcon />}>VALET SERVICE</Button>
      <Button className={styles.ballroom} startIcon={<AppsIcon />}>OTHER REQUESTS</Button>
    </section>
  );
}