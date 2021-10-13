import { props } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image.jsx'

export default function ClientGrid(props) {

    const imageSizes = props.client.Gallery.formats

    if (imageSizes.large!==undefined){
        var maxImageSize = imageSizes.large.url
    } else if (imageSizes.medium!==undefined){
        var maxImageSize = imageSizes.medium.url
    } else if (imageSizes.small!==undefined){
        var maxImageSize = imageSizes.small.url
    } else if (imageSizes.thumbnail!==undefined){
        var maxImageSize = imageSizes.thumbnail.url
    } else {
        var maxImageSize = ''
    }


    return (
        <Link to={`/clients/${props.client.id}`}>
            <div className='grid-item'>
                <Image src={`${window.currentAddress}${maxImageSize} `} />
                <div className="grid-item-inner">
                    <h4>{props.client.Title}</h4>
                </div>
            </div>
        </Link>
    )
}
