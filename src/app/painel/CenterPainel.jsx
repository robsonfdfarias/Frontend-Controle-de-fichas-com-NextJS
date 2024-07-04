"use client"
// import Link from "next/link"
import { useEffect, useState } from "react"
import io from 'socket.io-client';



export default function CenterPainel(){
    const [ficha, setFicha] = useState([]);
    const [histFicha, setHistFicha] = useState([]);
    const [socket, setSocket] = useState(null);
    var o='';

    useEffect(()=>{
        const newSocket = io('http://localhost:3000', {
            withCredentials: true, // necessário para permitir cookies, se for o caso
        });
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        }
    }, []);
    
    useEffect(()=>{
        var audioElement = document.getElementById('myAudio');

        // Função para reproduzir áudio
        function playAudio() {
            // Verificar se a reprodução automática é possível
            if (audioElement.paused) {
                audioElement.play();
            }
        }

        // Exemplo: evento de clique para iniciar a reprodução
        document.addEventListener('click', function() {
            playAudio();
        });

        // Simulação de recebimento de atualização do socket
        function simulacaoAtualizacaoSocket() {
            // Aqui você pode simular uma atualização do socket
            // e iniciar a reprodução de áudio em resposta
            playAudio();
        }


        if(socket){
            socket.on('connect', ()=>{
                console.log('conectado ao servidor:', socket.id);
            });
            socket.on('msgToClient', (message) => {
                const audio = new Audio('/level-up-191997.mp3');
                audio.play();
                // console.log('-----------------------------------')
                // console.log(message)
                setFicha(message);
                histFicha.unshift(message);
                // setHistFicha((prevMessages) => [...prevMessages, message]);
                setHistFicha(histFicha);
                simulacaoAtualizacaoSocket();
            });
            socket.on('disconnect', () => {
                console.log('Socket desconectado');
            });
            return () => {
                // Limpa os listeners do socket
                // socket.off('connect');
                socket.off('disconnect');
            };
        }
    }, [socket]);
    // const sendMessage = ()=>{
    //     socket.emit('msgToServer', message);
    // }
    // var record = 0;
    // var arrHist = [];
    // arrHist.push([recordDefault, 1]);
    // const fichas = (record)=>{
    //     record++;
    //     if(record=='default'){
    //         setRecordDefault(recordDefault+1);
    //     }
    //     arrHist.push([record, 1]);
    // }
    const styles = {
        divC: {
            width: '100%',
            margin: 'auto',
            // backgroundColor: '#f2f2f2',
            // border: '1px solid #f2f2f2',
            // padding: '40px',
            // padding: 'clamp(0.1em, 0.1em + 3vw, 3em)',
            // paddingTop: '60px',
            // height: 'calc(100vh - 200px)',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        },
        divs: {
            width: '40%',
            height: '60%',
            overflow: 'hidden',
            backgroundColor: '#fff',
            border: '1px solid #cdcdcd',
            padding: '40px',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '2rem'
        },
        divsInt: {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: '#fff',
            paddingBottom: '30px',
            borderRadius: '9px',
            display: 'flex',
            flexDirection: 'column',
            fontSize: '1.6rem'
        }
    }
    return(
        <div style={styles.divC} id="principalCenter">
            <div id="esquerda" style={{...styles.divs, justifyContent: 'space-between', textAlign: 'center'}}>
                {/* {ficha?
                    <AudioPlay />
                :console.log(1)} */}
                <div>
                    {/* <audio ref={audioRef} src="/level-up-191997.mp3" autoPlay={false} /> */}
                    <audio id="myAudio">
                        <source src="/level-up-191997.mp3" type="audio/mpeg" />
                            Seu navegador não suporta áudio HTML5.
                    </audio>
                </div>
                {/* {console.log(ficha)}
                {console.log(histFicha)} */}
                <div style={{fontSize: 'clamp(1em, 1em + 3vw, 3em)'}}>{ficha.type}</div>
                {/* <div style={{fontSize: 'clamp(1em, 1em + 10vw, 10em)'}}>{dados!=undefined?dados.ficha.defaultRecord:'1'}</div> */}
                <div style={{fontSize: 'clamp(1em, 1em + 7vw, 7em)'}}>
                    {/* {arrHist[(arrHist.length-1)]} */}
                    {ficha.record}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: 'clamp(1em, 1em + 2vw, 2em)'}}>
                    <span>Mesa</span>
                    <span>{ficha.table}</span>
                </div>
            </div>
            <div id="direita" style={styles.divs}>
                <div style={styles.divsInt}>
                    <table>
                        <thead>
                            <tr>
                                <td>Ficha</td>
                                <td>Mesa</td>
                                <td>Tipo</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td style={{borderTop: '1px solid #cdcdcd'}}>5</td>
                                <td style={{borderTop: '1px solid #cdcdcd'}}>1</td>
                            </tr> */}
                            {histFicha.length>0?histFicha.map((obj, index)=>(
                                <tr key={index}>
                                    <td style={{ borderTop: '1px solid #cdcdcd'}}>
                                        { obj.record }
                                    </td>
                                    <td style={{ borderTop: '1px solid #cdcdcd'}}>
                                        { obj.table }
                                    </td>
                                    <td style={{ borderTop: '1px solid #cdcdcd'}}>
                                        { obj.type }
                                    </td>
                                </tr>
                            )):console.log('Não há fichas...')}
                        </tbody>
                    </table>
                </div>
                {/* <Link
                    href={{
                        pathname: '/admin',
                        query: {category:'login'}
                    }}
                >admin</Link> */}
            </div>
        </div>
    )
}
