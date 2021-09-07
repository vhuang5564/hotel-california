import { useRouter } from 'next/router';
import styles from '@/styles/Ballroom.module.scss';
import Ballroom from '@/components/Ballroom';
import Layout from '@/components/Layout.user';
import AppsIcon from '@material-ui/icons/Apps';

const images = [
  {
    url: '/bw_palm_leaf.png',
    title: 'COFFEE SERVICE',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'SALES COORDINATOR',
    icon: null,
    isDisabled: false,
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'AUDIO VISUAL HELP',
    icon: null,
    isDisabled: false,
  },
  {
    title: 'CONTRACT COPY',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    title: 'NEW ROOM KEY',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    title: 'BOTTLED WATER',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'ACCESS TO XEROX',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'ADJUST SETUP',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    url: '/bw_palm_leaf.png',
    title: 'EXTRA CHAIRS',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    title: 'ROOM REFRESH',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    title: 'BANQUET CAPTAIN',
    icon: <AppsIcon />,
    isDisabled: false,
  },
  {
    title: 'OTHER REQUESTS',
    icon: <AppsIcon />,
    isDisabled: false,
  },
];

const Requests = () => {
  const router = useRouter();
  //passing down as props to Ballroom component
  const { ballroom } = router.query;

  return (
    <>
      <main className={styles.hero}>
        <Layout>
          <section style={{ textAlign: 'center', fontSize: '150%' }}>
            <h1
              style={{
                fontFamily: "'Proza Libre', sans-serif",
                color: 'rgb(88,88,88)',
              }}
            >
              Click to send us an {' '}
              <span
                style={{
                  fontFamily: "'Allison', cursive",
                  color: 'red',
                  fontSize: '160%',
                }}
              >
                instant request
              </span>
              ...
            </h1>
          </section>

          <Ballroom ballroom={ballroom} images={images} />
        </Layout>
      </main>
    </>
  );
};

export default Requests;
