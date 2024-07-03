export default function Footer(){
    const styles = {
      div: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
        width: '100%',
        padding: '20px',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0'
      },
      span: {
        display: 'flex',
        justifyContent: 'center'
      }
    }
    return (
        <div style={styles.div}>
            <span style={styles.span}>Contato: contato@empresax.com | Telefone: (11) 1234-5678</span>
            <span style={styles.span}>© 2024 Empresa x. Todos os direitos reservados.</span>
        </div>
    )
}