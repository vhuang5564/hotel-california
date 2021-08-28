import React from "react";
import styles from '../styles/Sidebar.module.scss';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

export default function Sidebar(props) {
  let n = 0;

  const expand = () => {
    n = n + 1;
    console.log(n);
  };

  return (
    <section className={styles.sidebar}>
      <h1>Hotel California
        <IconButton
          className={styles.icon}
          startIcon={<ArrowForwardIosIcon />}
          onClick={expand}
        />
      </h1>
      <h1>All Areas <AppsIcon /></h1>
      <h1>In Room Dining <MenuBookIcon /></h1>
      <h1>Restuarant & Lounges <LocalDiningIcon /></h1>
      <h1>Spa & Salon <BathtubIcon /></h1>
      <h1>Hotel Amenities <PoolIcon /></h1>
      <h1>Transport <SubwayIcon /></h1>
      <h1>Local Flavor <StreetviewIcon /></h1>
      <h1>Services <AddIcCallIcon /></h1>
      <h1>Front-Desk <AssignmentIndIcon /></h1>
      <h1>Valet Service <TimeToLeaveIcon /></h1>
      <h1>Concierge <MoodIcon /></h1>
    </section>
  );
}