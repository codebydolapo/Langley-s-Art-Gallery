import styles from '../styles/footer.module.css'

function Footer(){
    return(
        <div className = {styles.footer}>
            <div className = {styles.eager}>
            <h1>We Are Always Eager To Connect With You</h1>
            <button>Get In Touch</button>
            </div>
            <div className = {styles.contact}>
                <h1>Langley's</h1>
                <h2>Made In Nigeria</h2>
                <h3>Site By Dolapo</h3>
                <p>Copyright: All rights reserved 2022 Langley's Gallery</p>
            </div>

        </div>
    )
}

export default Footer