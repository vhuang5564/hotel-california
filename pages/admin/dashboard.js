import prisma from '../../lib/prisma';
import router from 'next/router';
import styles from '@/styles/AdminDashboard.module.scss';
import LayoutAdmin from '@/components/Layout.admin';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import { ImCheckmark2 } from 'react-icons/im';
import { RiPhoneFill } from 'react-icons/ri';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import { toast, ToastContainer } from 'react-toastify';
import { Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Box from '@material-ui/core/Box';
import ShowcaseAdmin from '@/components/ShowcaseAdmin';

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
      createdAt: 'asc',
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
  // console.log(data[0].text); // grand.jpg
  // returns icon for specific request takes in string data.text
  // need to adjust later to include icons of every request
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
  // request(data[0].text);

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
      toast.success('Status updated');
      router.push('/admin/dashboard');
    }
  };

  return (
    <LayoutAdmin title="Admin Dashboard | Hotel California" showcase={data.length}>
      <ToastContainer />
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
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
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
                  onClick={() => handleRequestUpdate(item.id)}
                >
                  <ImCheckmark2 />
                  Done
                </button>
              </Tooltip>
            </div>
            {/* {request(item.text)} */}
          </div>
        ))}
      </section>
    </LayoutAdmin>
  );
}
