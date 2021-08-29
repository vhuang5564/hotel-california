import Button from '@material-ui/core/Button';
import styles from '../styles/Ballroom.module.scss';


export default function Ballroom(props) {
  return (
    <section className={styles.grid_container}>
      <Button className={styles.ballroom}>Ballroom 1</Button>
      <Button className={styles.ballroom}>Ballroom 2</Button>
      <Button className={styles.ballroom}>Ballroom 3</Button>
      <Button className={styles.ballroom}>Ballroom 4</Button>
      <Button className={styles.ballroom}>Ballroom 5</Button>
      <Button className={styles.ballroom}>Ballroom 6</Button>
      <Button className={styles.ballroom}>Ballroom 7</Button>
      <Button className={styles.ballroom}>Ballroom 8</Button>
      <Button className={styles.ballroom}>Ballroom 9</Button>
      <Button className={styles.ballroom}>Ballroom 10</Button>
      <Button className={styles.ballroom}>Ballroom 11</Button>
      <Button className={styles.ballroom}>Ballroom 12</Button>
    </section>
  );
}