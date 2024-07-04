import ButtonIcon from './components/ButtonIcon'
export default function CenterPrincipal(){
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
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        divs: {
            width: '100%',
            // height: '100%',
            backgroundColor: '#fff',
            border: '1px solid #cdcdcd',
            padding: '30px',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column'
        }
    }
    const admin = () => {
        window.location.href='/admin'
    }
    const painel = () => {
        window.location.href='/painel'
    }
    const deslogar = (e) => {
        e.preventDefault
        localStorage.removeItem("access_token")
        localStorage.removeItem("localId")
        localStorage.removeItem("mesa")
        window.location.href = '/login'
    }
    return (
        <div style={styles.divC}>
            <div id="direita" style={styles.divs}>
                Painel administrativo<br />
                <ButtonIcon
                    img={"imgs/painel.svg"}
                    padding={'0'}
                    height={200}
                    width={200}
                    radius={15}
                    shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                    title={"Painel"}
                    colorDefault={"#4caf50"}
                    colorHover={"#458807"}
                    onClick={painel}
                />
                <ButtonIcon
                    // img={"imgs/edit-lapis.svg"}
                    title={"Administração"}
                    colorDefault={"#4caf50"}
                    colorHover={"#458807"}
                    onClick={admin}
                />
                <ButtonIcon
                    img={"imgs/tutorial.svg"}
                    padding={'0'}
                    height={200}
                    width={200}
                    radius={15}
                    shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                    title={"Deslogar"}
                    colorDefault={"#4caf50"}
                    colorHover={"#458807"}
                    onClick={deslogar}
                />
                <ButtonIcon
                    img={"imgs/deslogar.svg"}
                    padding={'0'}
                    height={200}
                    width={200}
                    radius={15}
                    shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                    title={"Deslogar"}
                    colorDefault={"#4caf50"}
                    colorHover={"#458807"}
                    onClick={deslogar}
                />
            </div>
        </div>
    )
}