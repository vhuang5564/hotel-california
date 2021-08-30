import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import ButtonBase from '@material-ui/core/ButtonBase';
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
      url: 'https://www.hospitalitynet.org/picture/xxl_153098883.jpg?t=20190328105447',
      title: 'ALL AREAS',
      icon: <AppsIcon />
    },
    {
      url: 'https://st.depositphotos.com/1575673/3350/i/950/depositphotos_33503107-stock-photo-restaurant-cloche-with-lid.jpg',
      title: 'IN-ROOM DINING',
      icon: <LocalDiningIcon />
    },
    {
      url: 'https://cdn.wealthygorilla.com/wp-content/uploads/2019/11/Most-Expensive-Restaurants-Maison-Pic-Valence-Paris-France.webp',
      title: 'RESTAURANT & LOUNGES',
      icon: <MenuBookIcon />
    },
    {
      url: 'https://cache.marriott.com/marriottassets/marriott/SI/si-spa-001-hor-feat.jpg?downsize=1440px:*',
      title: 'SPA & SALON',
      icon: <BathtubIcon />
    },
    {
      url: 'https://insights.ehotelier.com/wp-content/uploads/sites/6/2018/05/Hotel-amenities-large-300x300.jpg',
      title: 'HOTEL AMENITIES',
      icon: <PoolIcon />
    },
    {
      url: 'https://www.plazaprotection.com/blog/wp-content/uploads/2020/05/front-desk-security-guards.jpg',
      title: 'FRONT DESK',
      icon: <MoodIcon />
    },
    {
      url: 'placeholder',
      title: 'SERVICES',
      icon: <AddIcCallIcon />
    },
    {
      url: 'placeholder',
      title: 'LOCAL FLAVOR',
      icon: <StreetviewIcon />
    },
    {
      url: 'placeholder',
      title: 'TRANSPORT',
      icon: <SubwayIcon />
    },
    {
      url: 'placeholder',
      title: 'CONCIERGE',
      icon: <AssignmentIndIcon />
    },
    {
      url: 'placeholder',
      title: 'VALET SERVICE',
      icon: <TimeToLeaveIcon />
    },
    {
      url: 'placeholder',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />
    }
  ];

  const request = (image) => {
    console.log(image.title)
    console.log("clicked")
    // console.log(image.title)
  }

  return (
    <section className={styles.grid_container}>

      {images.map((image) => 
        (
        <div>
          <h2 className={styles.wording}>
              {image.title} {image.icon}
          </h2>
          <Button
            key={image.title} 
            className={styles.ballroom} 
            variant="outlined" 
            style={{
              backgroundImage: `url(${image.url})`
            }}
            onClick={request}
          ></Button>
        </div>
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