import {props, useState} from 'react'

export const ViewSite = (props) => {

    

    return (
        <div className={`site-viewer-container ${props.viewPopup ? 'active' : ''}`}>
            <div onClick={()=>{props.setViewPopup(false)}} className="close"></div>
            <iframe src={props.src} frameborder="0"></iframe>
        </div>
    )
}
