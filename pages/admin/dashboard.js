import prisma from '../../lib/prisma';
import router from 'next/router';
import styles from '@/styles/AdminDashboard.module.scss';
import LayoutAdmin from '@/components/Layout.admin';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import { ImCheckmark2 } from 'react-icons/im';
import { RiPhoneFill } from 'react-icons/ri';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic'
const AblyChatComponent = dynamic(() => import('../../components/AblyChatComponent'), { ssr: false });
import { useRef } from "react";
import useDraggable from '../../utils/useDraggable';


export async function getStaticProps() {
  const requests = await prisma.request.findMany({
    where: {
      active: true,
    },
    include: {
      ballroom: true,
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    props: {
      data: JSON.parse(JSON.stringify(requests)),
    },
    revalidate: 1,
  };
}

export default function Reviews({ data }) {
  const request = (text) => {
    switch (text) {
      case 'Need help with audio visual\n':
        console.log('success!');
        return <OndemandVideoIcon className={styles.container_icon} />;
      default:
        console.log('failure');
        return;
    }
  };
  
  const handleRequestUpdate = async (id) => {
    const res = await fetch('/api/requests/update', {
      body: JSON.stringify({
        id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'PUT',
    });
    toast.dismiss();
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      toast.warn('Saved to database', {
        icon: false
        });
      router.push('/admin/dashboard');
    }
  };


  const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    useDraggable(cardRef);
  
    return (
      <div  ref={cardRef}>
        {children}
      </div>
    );
  };
  


  return (
    <LayoutAdmin title="Admin Dashboard | Hotel California" showcase={data.length}>

      <div>
      <DraggableCard><section className={styles.chat}><AblyChatComponent /></section></DraggableCard>

       <ToastContainer
       theme="colored"
       position="top-right"
       autoClose={2000}
       hideProgressBar={false}
       rtl={false}
       pauseOnHover={false}
       closeButton={false}
       icon={false}
          />

      <section className={styles.container}>
        {data?.map((item) => (
          <div key={item.id} className={styles.container_inner}>
            <span className={styles.container_text}>
              {' '}
              {item.text} in {item.ballroom?.name}
            </span>
            <div className={styles.container_date}>
              <span>
                {new Date(item.createdAt).toLocaleString('en-US', {
                  weekday: 'long',
                })}
                ,{' '}
              </span>
              <span>
                {new Date(item.createdAt).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>

              <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                  <div>
                    <Button {...bindTrigger(popupState)}>
                      By {item.user?.firstName} {item.user?.lastName}
                    </Button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'top',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                    >
                      <Box p={2}>
                        <RiPhoneFill />
                        {item.user?.phoneNumber}
                        <br />
                        {item.user?.email}
                      </Box>
                    </Popover>
                  </div>
                )}
              </PopupState>
              <Tooltip title="And save to database">
                <button
                  className="btn-secondary btn-icon"
                  style={{
                    margin: "10px"
                  }}
                  onClick={() => handleRequestUpdate(item.id)}
                >
                  <ImCheckmark2 />
                  Done
                </button>
              </Tooltip>
            </div>
          </div>
        ))}
      </section>
      </div>
    </LayoutAdmin>
  );
}
