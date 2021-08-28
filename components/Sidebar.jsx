import React from "react";
import styles from '../styles/Sidebar.module.scss';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoodIcon from '@material-ui/icons/Mood';

export default function Sidebar(props) {
  let n = 0;

  const expand = () => {
    n = n + 1;
    console.log(n);
  };

  return (
    <section className={styles.sidebar}>
      <div>
        <IconButton
          className={styles.icon}
          startIcon={<ArrowForwardIosIcon />}
          onClick={expand}
        />
      </div>
      <h1>All Areas <AppsIcon /></h1>
      <h1>In Room Dining <MenuBookIcon /></h1>
      <h1>Restuarant & Lounges <LocalDiningIcon /></h1>
      <h1>Spa & Salon</h1>
      <h1>Hotel Amenities</h1>
      <h1>Transport <LocationOnIcon /></h1>
      <h1>Local Flavor</h1>
      <h1>Services</h1>
      <h1>Front-Desk</h1>
      <h1>Concierge <MoodIcon /></h1>
    </section>
  );
}