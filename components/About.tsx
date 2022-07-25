import styles from '../styles/about.module.css'


function About(){
    return (
      <div className={styles.about} id = 'about'>
        <div className={styles.intro}>
          <p>
            Each collection in our archives originates from carefully selected art and
            photography masterpieces from all over history
          </p>
        </div>
        <div className={styles.underline}></div>
        <div className={styles.aboutTop}>
          <div className={styles.topLeft}>
            <h2>Ethos</h2>
            <h1>Historic Yet Timeless</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fugiat magni ullam recusandae. Odio doloremque necessitatibus
              repellat tempora architecto, rerum, hic rem numquam atque, maiores
              cum laboriosam voluptatum expedita soluta.
            </p>
          </div>
          <div className={styles.topRight}>
            <img src="/images/s.jpg" alt="" className={styles.topImage} />
          </div>
        </div>
        <div className={styles.underline}></div>
        <div className={styles.aboutMiddle}>
          <div className={styles.middleLeft}>
            <img src="/images/q.jpg" alt="" className={styles.middleImage} />
          </div>
          <div className={styles.middleRight}>
            <h2>Values</h2>
            <h1>Committed To Quality</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fugiat magni ullam recusandae. Odio doloremque necessitatibus
              repellat tempora architecto, rerum, hic rem numquam atque, maiores
              cum laboriosam voluptatum expedita soluta.
            </p>
          </div>
        </div>
      <div className={styles.underline}></div>
        <div className={styles.aboutBottom}>
          <div className={styles.bottomLeft}>
            <h2>About The Founder</h2>
            <h1>Kemi Davis</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              fugiat magni ullam recusandae. Odio doloremque necessitatibus
              repellat tempora architecto, rerum, hic rem numquam atque, maiores
              cum laboriosam voluptatum expedita soluta.
            </p>
          </div>
          <div className={styles.bottomRight}>
            <img src="/images/r.jpg" alt="" className={styles.bottomImage} />
          </div>
        </div>
      </div>
    );
}

export default About 