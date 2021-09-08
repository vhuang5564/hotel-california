import styles from '@/styles/Showcase.admin.module.css';

export default function ShowcaseAdmin({showcase}) {
  
  return (
    <div className={styles.showcase}>
      <h1 style={{fontFamily: "'Monoton', cursive", }}>Admin Dashboard</h1>
      <h2 style={{fontFamily: "'Allison', cursive", fontSize: "250%"}}>Pending Requests: <span style={{color: "orange"}}>{showcase}</span></h2>
    </div>
  );
}