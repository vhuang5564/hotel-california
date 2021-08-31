import Link from 'next/link';
import styles from '../styles/Sidebar.module.scss';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppsIcon from '@material-ui/icons/Apps';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PoolIcon from '@material-ui/icons/Pool';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import BathtubIcon from '@material-ui/icons/Bathtub';
import { useState } from "react";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  // sets sidebar value to true or false whenever clicked
  // showSidebar is still bugged on launch will animate expand
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
      <Link href="/review"><a><Button>REVIEWS <LocalDiningIcon /></Button></a></Link>
      <Button>MEETING ROOM 4 <BathtubIcon /></Button>
      <Button>MEETING ROOM 5 <PoolIcon /></Button>
      <Button>MEETING ROOM 6 <AddIcCallIcon /></Button>
    </section>
  );
}