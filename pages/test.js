import Sidebar from "../components/Sidebar";
import styles from "../styles/Layout.module.scss";

export default function test() {
  return (
    <body className={styles.background}>
      <Sidebar />
    </body>
  );
}