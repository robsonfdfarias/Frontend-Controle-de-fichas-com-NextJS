import { useEffect, useState } from "react";
import { ConfigUrlImg } from "./ConfigUrlImg";

export default function ButtonIcon(props){
    const [isHovered, setIsHovered] = useState(false);
    const url = ConfigUrlImg(props.img); // props.img = 'pasta/img.formato'
    const estiloBase = {
        padding: props.padding?props.padding:'10px 10px',
        color: 'white',
        height: props.height?props.height: 'auto',
        width: props.width?props.width: 'auto',
        fontSize: '1.3rem',
        borderRadius: props.radius?props.radius: '5px',
        boxShadow: props.shadow?props.shadow: 'none',
        // backgroundColor: '#0c582c',
        backgroundColor: props.colorDefault,
        border: 'none',
        cursor: 'pointer',
        margin: '3px',
        display: 'flex',
        justifyContent: 'center',
        transition: 'all ease-in-out 0.3s'
    };
    const estiloHover = {
        // backgroundColor: '#b1cd49'
        // backgroundColor: 'green'
        backgroundColor: props.colorHover
    };

    return (
        // <div id="insertArticle" onClick={()=>openLink()}
        <div id={props.id} onClick={props.onClick}
                        style={isHovered?{...estiloBase, ...estiloHover}:estiloBase}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
            {/* <img src={"../../"+props.img} width="20" title="Editar notícia" /> */}
            {/* <img src={url} width="20" title="Editar notícia" /> */}
            {props.img!=undefined?<img src={url} height={'100%'} width={'100%'} title="Editar notícia" />:props.title}
        </div>
    )
}