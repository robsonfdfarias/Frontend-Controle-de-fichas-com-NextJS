"use client"
import styles from "../page.module.css";
import Top from "../components/Top"
import Footer from "../components/Footer"
import DivCenter from "../components/DivCenter"
import CenterPainel from "./CenterPainel"
import { useEffect } from "react";
export default function Painel(){
    useEffect(()=>{
        if(!localStorage.getItem('access_token')){
          window.location.href = '/login'
        }
      }, [])
    return (
        <div className={styles.main}>
            <Top />
            <DivCenter content={<CenterPainel />} />
            <Footer />
        </div>
    )
}