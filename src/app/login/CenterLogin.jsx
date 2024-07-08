"use client"
import { useEffect, useState } from "react"
import Button from "../components/Button"
export default function CenterLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const styles = {
        divC: {
            width: '90%',
            margin: 'auto',
            border: '1px solid #f2f2f2',
            padding: '20px',
            height: '100%',
            display: 'grid',
            placeItems: 'center'
        },
        divForm: {
            width: '400px',
            borderRadius: '6px',
            padding: '30px',
            boxShadow: '0px 0px 4px 5px #f2f2f2dd inset'
        },
        inputs: {
            width: '100%',
            fontSize: '1.5rem',
            padding: '5px',
            marginBottom: '10px',
            borderRadius: '5px',
            border: '1px solid #cdcdcd'
        }
    }
    // useEffect(() => {
    //     console.log(data)
    // },[data])
    // localStorage.removeItem("access_token")
    const handleSubmit = (e) => {
        e.preventDefault();
        const mesa = document.getElementById('mesa').value;
        async function auth() {
            try{
                const response =  await fetch("http://localhost:3000/login", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user: username,
                        password: password
                    })
                });
                console.log(response)
                const data = await response.json()
                console.log(data)
                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('localId', data.localId);
                localStorage.setItem('matricula', data.matricula);
                // localStorage.setItem('mesa', '01')
                localStorage.setItem('mesa', mesa)
                window.location.href="/";
                setData(data);
            }catch(error){
                console.log(error);
            }
        };
        
        auth();
      };

    return(
        <div style={styles.divC}>
            <div style={styles.divForm}>
                <h2>Entre com os dados abaixo</h2><br />
                    <div>
                        Selecione a mesa: <br />
                        <select name="mesa" id="mesa">
                            <option value="01">Mesa 01</option>
                            <option value="02">Mesa 02</option>
                            <option value="03">Mesa 03</option>
                            <option value="04">Mesa 04</option>
                            <option value="05">Mesa 05</option>
                            <option value="06">Mesa 06</option>
                            <option value="07">Mesa 07</option>
                            <option value="08">Mesa 08</option>
                            <option value="09">Mesa 09</option>
                            <option value="10">Mesa 10</option>
                            <option value="11">Mesa 11</option>
                            <option value="12">Mesa 12</option>
                            <option value="13">Mesa 13</option>
                            <option value="14">Mesa 14</option>
                        </select>
                    </div>
                    <input style={styles.inputs} onChange={(e) => setUsername(e.target.value)} placeholder="Matricula (Ex: 555888)" type="text" id="matricula" />
                    <input style={{...styles.inputs, marginBottom: '25px'}} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="text" id="senha" /><br />
                    <Button event={handleSubmit} type={"submit"} title={"Entrar"} />
            </div>
        </div>
    )
}