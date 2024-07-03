export default function DivCenter(props){
    const styles = {
        div: {
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            paddingTop: '60px',
            paddingBottom: '70px',
        }
    }
    return (
        <div style={styles.div}>
            { props.content}
        </div>
    )
}