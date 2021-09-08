import styles from '@/styles/Showcase.module.css';

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      {/* <h1 >WELCOME TO THE HOTEL CALIFORNIA</h1> */}
      <h1 style={{fontFamily: "'Allison', cursive", fontSize: "325%",}}>Let&apos;s <span style={{ color: "red"}}>connect</span><span style={{fontSize: "60%"}}>..in a click</span></h1>
    </div>
  );
}
