import { useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";

function Navbar() {

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h1>Langley's</h1>
      </div>
      <div className={styles.right}>
        <p>About</p>
        <p>Contact</p>
        <p>Showroom</p>
        <p>Art</p>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Navbar;
