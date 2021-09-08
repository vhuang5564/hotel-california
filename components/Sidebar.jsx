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
import Modal from '@/components/Modal';
import { useState } from 'react';
import AblyChatComponent from './AblyChatComponent';



export default function Sidebar() {
  const [checked, setChecked] = useState(false);
  const [isActive, setActive] = useState(false);
  const [showModal, setShowModal] = useState(false)
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
          
              <Button onClick={() => setShowModal(true)}>
                <BsChatDots />
                <p>CHAT{' '}</p>
              </Button>
         
          <Link href="/reviews">
            <a>
              <Button>
                <MdRateReview />
                <p>REVIEWS{' '}</p>
              </Button>
            </a>
          </Link>
          <Link href="/faq">
            <a>
              <Button>
                <FaQuestionCircle />
                <p>FAQ{' '}</p>
              </Button>
            </a>
          </Link>
        </div>
      </Slide>
      <Modal show={showModal} onClose={() => setShowModal(false)}><AblyChatComponent/></Modal>
    </div>
  );
}
