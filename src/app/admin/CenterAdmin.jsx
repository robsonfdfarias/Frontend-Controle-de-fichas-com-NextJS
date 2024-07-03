import Link from "next/link"
import Button from "../components/Button"
export default function CenterAdmin(){
    const styles = {
        divC: {
            width: '95%',
            margin: 'auto',
            // backgroundColor: '#f2f2f2',
            // border: '1px solid #f2f2f2',
            padding: '40px',
            // height: 'calc(100vh - 200px)',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between'
        },
        divs: {
            width: '49%',
            height: '100%',
            backgroundColor: '#fff',
            border: '1px solid #cdcdcd',
            padding: '30px',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column'
        }
    }
    const chamar = () => {
        console.log('Chamou a ficha');
    }
    return (
        <div style={styles.divC}>
            <div id="esquerda" style={styles.divs}>
                <h1>Admin</h1>
                Div esquerda
            </div>
            <div id="direita" style={styles.divs}>
                Div direita
                <Link
                    href={{
                        pathname: '/admin',
                        query: {category:'login'}
                    }}
                >Chamar</Link>
                <Button event={chamar} type={"button"} title={"Chamar"} />
            </div>
        </div>
    )
}