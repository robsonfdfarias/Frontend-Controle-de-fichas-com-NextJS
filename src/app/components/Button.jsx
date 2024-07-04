export default function Button(props){
    const styles = {
        bt: {
            padding: '15px 20px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            width: '100%',
            fontSize: '1.3rem',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
        }
    }
    return (<button onClick={props.event} type="submit" style={styles.bt}>{props.title}</button>)
}