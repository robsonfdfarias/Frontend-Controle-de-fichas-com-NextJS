'use client'
import styles from "../page.module.css";
import Top from "../components/Top"
import Footer from "../components/Footer"
import DivCenter from "../components/DivCenter"
import CenterAdmin from "./CenterAdmin"
import { useEffect } from "react";
export default function Admin(){
    useEffect(()=>{
      if(!localStorage.getItem('access_token')){
        window.location.href = '/login'
      }
    }, [])
    return (
        <div  className={styles.main}>
            <Top />
            <DivCenter content={<CenterAdmin />} />
            <Footer />
        </div>
    )
}