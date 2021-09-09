import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';
import { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { MdRateReview } from 'react-icons/md';
import { FaQuestionCircle } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { IconButton } from '@material-ui/core';
import styles from '../styles/Sidebar.module.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Modal from '@/components/Modal';
import dynamic from 'next/dynamic';
const AblyChatComponent = dynamic(
  () => import('../components/AblyChatComponent'),
  { ssr: false }
);

export default function Sideb() {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const openLeft = (anchor) => (
    <div
      className={styles.sidebar}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div>
          <Link href="/">
            <a>
              <Button>
                <AiOutlineHome />
                <p>HOME </p>
              </Button>
            </a>
          </Link>

          <Button onClick={() => setShowModal(true)}>
            <BsChatDots />
            <p>CHAT </p>
          </Button>

          <Link href="/reviews">
            <a>
              <Button>
                <MdRateReview />
                <p>REVIEWS </p>
              </Button>
            </a>
          </Link>
          <Link href="/faq">
            <a>
              <Button>
                <FaQuestionCircle />
                <p>FAQ </p>
              </Button>
            </a>
          </Link>
        </div>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)} className={styles.icon}>
        <ArrowForwardIosIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {openLeft('left')}
      </Drawer>
      <Modal show={showModal} onClose={() => setShowModal(false)}><AblyChatComponent/></Modal>
    </div>
  );
}
