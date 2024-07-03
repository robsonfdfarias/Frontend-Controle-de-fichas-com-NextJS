export default function Top(){
    const styles = {
        div:{
            width: '100%',
            backgroundColor: '#4CAF50',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            itemAling: 'center',
            zIndex: '1000'
        },
        span: {
            fontSize: '1.7rem',
            fontWeigth: 'bold',
            color: '#ffffff'
        }
    }
    return (
        <div style={styles.div}>
            <span style={styles.span}>Empresa X - Controle de chamada de fichas</span>
        </div>
    )
}