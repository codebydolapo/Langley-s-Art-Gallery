import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Mainbody from '../components/Mainbody'
import Navbar from '../components/Navbar'



const Home: any | NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Langley's Art Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Mainbody/>
    </div>
  );
};

export default Home;

