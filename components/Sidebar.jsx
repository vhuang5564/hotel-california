import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from 'next/dist/client/link';
import { Button } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PoolIcon from '@material-ui/icons/Pool';
import styles from '../styles/Sidebar.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  }
}));

export default function SimpleSlide() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <IconButton className={styles.icon} onClick={handleChange}><ArrowForwardIosIcon /></IconButton>
        <Slide direction="right" in={checked} mountOnEnter unmountOnExit className={styles.sidebar}>
          <div>
            <h2>Hotel California</h2>
            <Link href="/"><a><Button>HOME <AppsIcon /></Button></a></Link>
            <Link href="/chat"><a><Button>CHAT <AddIcCallIcon /></Button></a></Link>
            <Link href="/reviews"><a><Button>REVIEWS <MenuBookIcon /></Button></a></Link>
            <Link href="/"><a><Button>FAQ <PoolIcon /></Button></a></Link>
          </div>
        </Slide>
      </div>
    </div>
  );
}