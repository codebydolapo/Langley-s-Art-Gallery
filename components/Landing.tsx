import styles from "../styles/landing.module.css";
import Link from "next/link";

function Landing() {
  return (
    <div className={styles.landing} id="landing">
      <div className={styles.titleDiv}>
        <h1>Langley's</h1>
        <h2>Art Gallery</h2>
      </div>

      <Link href = '/#collections'>
        <button>EXPLORE</button>
      </Link>
    </div>
  );
}

export default Landing;
