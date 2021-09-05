import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import AppsIcon from '@material-ui/icons/Apps';
import prisma from '../lib/prisma'
export default function Ballroom() {
  
  const notify = () => toast.success('Your request has been sent!', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });

  const [images, setImages] = useState([
    {
      url: '/bw_palm_leaf.png',
      title: 'COFFEE SERVICE',
      icon: <AppsIcon />,
      isDisabled: true
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'SALES COORDINATOR',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'AUDIO VISUAL HELP',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'CONTRACT COPY',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'NEW ROOM KEY',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'BOTTLED WATER',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ACCESS TO XEROX',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ADJUST SETUP',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'EXTRA CHAIRS',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'ROOM REFRESH',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'BANQUET CAPTAIN',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />,
      isDisabled: false
    }
  ]);

  const request = (image) => {
    // console.log(image.title); //object title
    // console.log(image.isDisabled);
    console.log(image.isDisabled);
  };

  return (
    <section className={styles.grid_container}>
      {images.map((image) => (
        <div key={image.title}>
          <Button
            className={styles.ballroom}
            variant="outlined"
            style={{
              backgroundImage: `url(${image.url})`,
            }}
            onClick={() => request(image)}
          >
            <a href="#"><h2 className={styles.wording}>{image.title}</h2></a>
          </Button>
        </div>
      ))}
    </section>
  );
}
