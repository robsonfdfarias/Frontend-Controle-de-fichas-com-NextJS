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
        },
        divBt: {
            width: '15vw'
        },
        divBtText: {
            textAlign: 'center',
            fontSize: '1.4vw'
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

    const chama = async () => {
        await fetch('http://localhost:3000/ficha/defaultPriority', {
            method: 'POST',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                localId: parseInt(localStorage.getItem('localId')),
                mesa: localStorage.getItem('mesa'),
                userRegistration: localStorage.getItem('matricula'),
                token: localStorage.getItem('access_token')
            })
        })
        .then((response)=>response.json())
        .then((json)=>{
            //
        })
        .catch((error)=>{
            console.log('Erro encontrado: '+error)
        });
    }

    const priority = async () => {
        await fetch('http://localhost:3000/ficha/callPriority', {
            method: 'POST',
            headers: {
                authorization: 'Bearer '+localStorage.getItem('access_token'),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                localId: parseInt(localStorage.getItem('localId')),
                mesa: localStorage.getItem('mesa'),
                userRegistration: localStorage.getItem('matricula'),
                token: localStorage.getItem('access_token')
            })
        })
        .then((response)=>response.json())
        .then((json)=>{
            //
        })
        .catch((error)=>{
            console.log('Erro encontrado: '+error)
        });
    }
    return (
        <div style={styles.divC}>
            <div id="direita" style={styles.divs}>
                <div style={{fontSize: '2vw', marginBottom: '20px'}}>
                    Painel administrativo
                </div>
                
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div style={styles.divBt}>
                        <ButtonIcon
                            img={"imgs/painel.svg"}
                            padding={'0'}
                            height={styles.divBt.width}
                            width={styles.divBt.width}
                            radius={15}
                            shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                            textHover={"Clique para acessar o Painel"}
                            title={"Painel"}
                            colorDefault={"#4caf50"}
                            colorHover={"#458807"}
                            onClick={painel}
                        />
                        <div style={styles.divBtText}>Painel de fichas</div>
                    </div>

                    <div style={styles.divBt}>
                        <ButtonIcon
                            img={"imgs/prox-ficha.svg"}
                            padding={'0'}
                            height={styles.divBt.width}
                            width={styles.divBt.width}
                            radius={15}
                            shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                            title={"Administração"}
                            colorDefault={"#4caf50"}
                            colorHover={"#458807"}
                            textHover={"Clique para chamar a próxima ficha"}
                            onClick={chama}
                        />
                        <div style={styles.divBtText}>Próxima ficha</div>
                    </div>

                    <div style={styles.divBt}>
                        <ButtonIcon
                            img={"imgs/prox-ficha.svg"}
                            padding={'0'}
                            height={styles.divBt.width}
                            width={styles.divBt.width}
                            radius={15}
                            shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                            title={"Administração"}
                            colorDefault={"#4caf50"}
                            colorHover={"#458807"}
                            textHover={"Clique para chamar a próxima PRIORIDADE"}
                            onClick={priority}
                        />
                        <div style={styles.divBtText}>Próxima Prioridade</div>
                    </div>

                    <div style={styles.divBt}>
                        <ButtonIcon
                            img={"imgs/tutorial.svg"}
                            padding={'0'}
                            height={styles.divBt.width}
                            width={styles.divBt.width}
                            radius={15}
                            shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                            textHover={"Clique para acessar o tutorial"}
                            title={"Tutorial"}
                            colorDefault={"#4caf50"}
                            colorHover={"#458807"}
                            onClick={deslogar}
                        />
                        <div style={styles.divBtText}>Tutorial de uso</div>
                    </div>

                    <div style={styles.divBt}>
                        <ButtonIcon
                            img={"imgs/deslogar.svg"}
                            padding={'0'}
                            height={styles.divBt.width}
                            width={styles.divBt.width}
                            radius={15}
                            shadow={'2px 2px 2px 2px rgba(0,0,0,0.2)'}
                            textHover={"Clique para deslogar"}
                            title={"Deslogar"}
                            colorDefault={"#4caf50"}
                            colorHover={"#458807"}
                            onClick={deslogar}
                        />
                        <div style={styles.divBtText}>{"Sair ->"}</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}