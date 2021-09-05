import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';
import AppsIcon from '@material-ui/icons/Apps';

export default function Ballroom() {
  const images = [
    {
      url: '/bw_palm_leaf.png',
      title: 'PROVIDE COFFEE SERVICE',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'SALES REPRESENTATIVE REQUIRED',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ASSIST WITH AUDIO VISUAL',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'EMAIL THE BANQUET EVENT ORDER',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'PROVIDE A NEW MEETING ROOM KEY',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'RESTOCK BOTTLED WATER',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ASSIST MAKING XEROX COPIES',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'ADJUST ROOM TEMTERATURE',
      icon: <AppsIcon />,
    },
    {
      url: '/bw_palm_leaf.png',
      title: 'BRING EXTRA CHAIRS',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'REFRESH THE MEETING ROOM',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'BANQUET CAPTAIN REQUIRED',
      icon: <AppsIcon />,
    },
    {
      // url: '/palm_leaf.jpg',
      title: 'OTHER REQUESTS',
      icon: <AppsIcon />,
    },
  ];

  const request = (image) => {
    console.log(image.title); //object title
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
            <h2 className={styles.wording}>{image.title}</h2>
          </Button>
        </div>
      ))}
    </section>
  );
}
