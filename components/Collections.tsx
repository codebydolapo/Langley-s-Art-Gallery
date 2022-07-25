import styles from "../styles/collections.module.css";

interface Props{
    nameTop: string,
    imageTop: string,
    nameMiddle: string,
    imageMiddle: string,
    nameBottom: string,
    imageBottom: string,
}

function Collections({nameTop, imageTop, nameMiddle, imageMiddle, nameBottom, imageBottom}: Props) {
  return (
    <div className={styles.collections} id="collections">
      <div className={styles.top}>
        <div className={styles.topRight}>
          <h2>Collection</h2>
          <h1>{nameTop}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            consectetur rerum minima id veritatis provident alias cupiditate cum
            inventore magni, nihil dolorem impedit doloribus totam? Omnis cum
            nihil veritatis ipsum!
          </p>
          <button className={styles.exploreButton}>Explore Collection</button>
        </div>
        <div className={styles.topLeft}>
          <img src={imageTop} className={styles.topImage} />
        </div>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.middle}>
        <div className={styles.middleLeft}>
          <h2>Collection</h2>
          <h1>{nameMiddle}</h1>
        </div>
        <div className={styles.middleMiddle}>
          <img alt="" src={imageMiddle} className={styles.middleImage} />
        </div>
        <div className={styles.middleRight}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            cupiditate necessitatibus odit ad aliquid suscipit. Dicta pariatur
            velit dolores. Quae dolorem, natus rem maxime deleniti saepe
            provident mollitia quaerat unde.
          </p>
          <button className={styles.exploreButton}>Explore Collection</button>
        </div>
      </div>
      <div className={styles.underline}></div>
      <div className={styles.bottom}>
        <div className={styles.bottomRight}>
          <img src={imageBottom} className={styles.bottomImage} />
        </div>
        <div className={styles.bottomLeft}>
          <h2>Collection</h2>
          <h1>{nameBottom}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            consectetur rerum minima id veritatis provident alias cupiditate cum
            inventore magni, nihil dolorem impedit doloribus totam? Omnis cum
            nihil veritatis ipsum!
          </p>
          <button className={styles.exploreButton}>Explore Collection</button>
        </div>
      </div>
      <div className = {styles.underline}></div>
    </div>
  );
}

export default Collections;
