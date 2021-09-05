import React from 'react';
import Slide from '@material-ui/core/Slide';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from 'next/dist/client/link';
import { Button } from '@material-ui/core';
import styles from '../styles/Sidebar.module.scss';
import { BsChatDots } from 'react-icons/bs';
import { MdRateReview } from 'react-icons/md';
import { FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

export default function Sidebar() {
  const [checked, setChecked] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const handleChange = () => {
    setChecked((prev) => !prev);
    setActive(!isActive);
  };

  return (
    <div>
      <IconButton className={isActive ? styles.active : styles.icon} onClick={handleChange}>
        <ArrowForwardIosIcon />
      </IconButton>
      <Slide
        direction="right"
        in={checked}
        mountOnEnter
        unmountOnBlur={true}
        unmountOnExit
        className={styles.sidebar}
      >
        <div>
          <Link href="/">
            <a>
              <Button>
                <AiOutlineHome />
                <p >HOME{' '}</p>
              </Button>
            </a>
          </Link>
          <Link href="/chat">
            <a>
              <Button>
                <BsChatDots />
                <p>CHAT{' '}</p>
              </Button>
            </a>
          </Link>
          <Link href="/reviews">
            <a>
              <Button>
                <MdRateReview />
                <p>REVIEWS{' '}</p>
              </Button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Button>
                <FaQuestionCircle />
                <p>FAQ{' '}</p>
              </Button>
            </a>
          </Link>
        </div>
      </Slide>
    </div>
  );
}
