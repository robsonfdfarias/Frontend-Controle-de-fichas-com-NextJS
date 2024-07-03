import styles from "../page.module.css";
import Top from "../components/Top"
import Footer from "../components/Footer"
import DivCenter from "../components/DivCenter"
import CenterLogin from "./CenterLogin"
export default function FormLogin(){
    return (
        <div className={styles.main}>
            <Top />
            <DivCenter content={<CenterLogin />} />
            <Footer />
        </div>
    )
}