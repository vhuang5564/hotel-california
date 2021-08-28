import React from "react";
import styles from '../styles/Sidebar.module.scss';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

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
      <h1>In Room Dining <LocalDiningIcon /></h1>
      <h1>Restuarant & Lounges</h1>
      <h1>Spa & Salon</h1>
      <h1>Hotel Amenities</h1>
      <h1>Transport</h1>
      <h1>Local Flavor</h1>
      <h1>Services</h1>
      <h1>Front-Desk</h1>
      <h1>Concierge</h1>
    </section>
  );
}