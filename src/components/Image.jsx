import {props, useState} from 'react'

export default function Image(props) {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <>
            <img style={{opacity: imageLoaded ? 1 : 0}} src={props.src} onLoad={()=>{setImageLoaded(true)}} alt="" />
        </>
    )
}
