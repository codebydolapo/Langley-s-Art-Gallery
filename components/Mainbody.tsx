import styles from '../styles/mainbody.module.css'
import Landing from './Landing'
import Collections from './Collections'
import {galleryData } from './data'
import About from './About'
import Footer from './Footer'

interface Props {
  nameTop: string;
  imageTop: string;
  nameMiddle: string;
  imageMiddle: string;
  nameBottom: string;
  imageBottom: string;
}


function Mainbody(){
    return(
        <div className = {styles.mainbody}>
            {false && <Landing/>}
            {false && galleryData.map(({nameTop, imageTop, nameMiddle, imageMiddle, nameBottom, imageBottom}: Props)=>{
                return <Collections
                    nameTop = {nameTop}
                    imageTop = {imageTop}
                    nameMiddle = {nameMiddle}
                    imageMiddle = {imageMiddle}
                    nameBottom = {nameBottom}
                    imageBottom = {imageBottom}
                    
                />
            })}
            <About/>
            <Footer/>
        </div>
    )
}

export default Mainbody