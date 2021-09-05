import styles from '@/styles/Showcase.module.css';
import Ballroom from './Ballroom';

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1 style={{fontFamily: "'Proza Libre', sans-serif", }}>Welcome To The Hotel California</h1>
      <h2 style={{fontFamily: "'Allison', cursive", fontSize: "250%"}}>Let&apos;s <span style={{color: "red"}}>connect</span></h2>
    </div>
  );
}
