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
import { useState } from "react";

export default function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  let n = 0;

  const collapse = () => {
    
    n = n + 1;
    console.log(n);
  };

  return (
    <section className={styles.sidebar}>
      <h1>Hotel California
        <IconButton
          className={styles.icon}
          startIcon={<ArrowForwardIosIcon />}
          onClick={collapse}
        />
      </h1>
      <Button className={styles.button}>ALL AREAS <AppsIcon /></Button>
      <Button>In Room Dining <MenuBookIcon /></Button>
      <Button>Restuarant & Lounges <LocalDiningIcon /></Button>
      <Button>Spa & Salon <BathtubIcon /></Button>
      <Button>Hotel Amenities <PoolIcon /></Button>
      <Button>Transport <SubwayIcon /></Button>
      <Button>Local Flavor <StreetviewIcon /></Button>
      <Button>Services <AddIcCallIcon /></Button>
      <Button>Front-Desk <AssignmentIndIcon /></Button>
      <Button>Valet Service <TimeToLeaveIcon /></Button>
      <Button>Concierge <MoodIcon /></Button>
    </section>
  );
}