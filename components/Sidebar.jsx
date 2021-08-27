import React from "react";
import styles from '../styles/Sidebar.module.scss';

export default function Sidebar(props) {
  const minimize = console.log("minimized");

  return (
    <section className={styles.sidebar}>
      <h1 className={styles.sidebar.h1}>This is the Sidebar</h1>
      <h1>In Room Dining</h1>
      <h1>Restuarant & Lounges</h1>
      <h1>Spa & Salon</h1>
      <h1>Hotel Amenities</h1>
      <h1>Transport</h1>
      <h1>Local Flavor</h1>
      <h1>Services</h1>
      <h1>Front-Desk</h1>
      <h1>Concierge</h1>
    </section>
  );
}