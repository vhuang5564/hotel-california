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
  const [sidebar, setSidebar] = useState(true);

  // sets sidebar value to true or false whenever clicked
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };

  return (
    // Shows/hides sidebar if state is true/false
    <section className={sidebar ? styles.sidebar : styles.empty}>
      <h1>Hotel California
        <IconButton
          className={styles.icon}
          startIcon={<ArrowForwardIosIcon />}
          onClick={showSidebar}
        />
      </h1>
      {/* class css .button in .sidebar */}
      <Button>MEETING ROOM 1 <AppsIcon /></Button>
      <Button>MEETING ROOM 2 <MenuBookIcon /></Button>
      <Button>MEETING ROOM 3 <LocalDiningIcon /></Button>
      <Button>MEETING ROOM 4 <BathtubIcon /></Button>
      <Button>MEETING ROOM 5 <PoolIcon /></Button>
      <Button>MEETING ROOM 6 <AddIcCallIcon /></Button>
    </section>
  );
}