"use client"
import styles from "../page.module.css";
import Top from "../components/Top"
import Footer from "../components/Footer"
import DivCenter from "../components/DivCenter"
import CenterPainel from "./CenterPainel"
import { useEffect } from "react";
export default function Painel(){
    useEffect(()=>{
        if(sessionStorage.getItem('objSession')==undefined || sessionStorage.getItem('objSession')==null){
          window.location.href = '/login'
        }
      }, [])
    return (
        <div className={styles.main}>
            <Top />
            <DivCenter content={<CenterPainel objSession={sessionStorage.getItem('objSession')} />} />
            <Footer />
        </div>
    )
}