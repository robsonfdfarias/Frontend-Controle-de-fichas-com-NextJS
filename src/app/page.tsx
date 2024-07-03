// import Image from "next/image";
'use client'
import styles from "./page.module.css";
// import Menu from "./components/Menu"
import Top from "./components/Top"
import Footer from "./components/Footer"
import DivCenter from "./components/DivCenter"
import CenterPrincipal from "./pages/CenterPrincipal"
import React, { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    if(!localStorage.getItem('access_token')){
      window.location.href = '/login'
    }
  }, [])
  return (
    <main className={styles.main}>
      <Top />
      <DivCenter content={<CenterPrincipal />} />
      <Footer />
    </main>
  );
}
