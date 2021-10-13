import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'
import Image from '../components/Image.jsx'
import {props, useState} from 'react'
import Loading from './Loading.jsx'
import { ViewSite } from '../components/ViewSite.jsx'

const CLIENTS = gql`
    query GetClients($id: ID!) {
        client(id: $id) {
            Title,
            Gallery{
                formats
            },
            TheBrief,
            TheSolution,
            Description, 
            id,
            SiteAddress
        }
    }
`

export default function Client(props) {
    const { id } = useParams()
    const { loading, error, data } = useQuery(CLIENTS, { variables: { id: id } })
    const [viewPopup, setViewPopup] = useState(false)

    if (loading) { return (<Loading/>) }
    if (error) { return (<h3>Error</h3>) }

    if (data!== undefined){
        const imageSizes = data.client.Gallery.formats
        var maxImageSize
        if (imageSizes.large !== undefined) {
            maxImageSize = imageSizes.large.url
        } else if (imageSizes.medium !== undefined) {
            maxImageSize = imageSizes.medium.url
        } else if (imageSizes.small !== undefined) {
            maxImageSize = imageSizes.small.url
        } else if (imageSizes.thumbnail !== undefined) {
            maxImageSize = imageSizes.thumbnail.url
        } else {
            maxImageSize = ''
        }
    }


    return (
        
        <>
            <section id="title">
                <div className="section-inner">
                    <Image src={`${window.currentAddress}${maxImageSize}`} />
                    <div className="title-content">
                        <h1>
                            {data.client.Title}
                        </h1>
                        <h2>
                            {data.client.Description}
                        </h2>
                        se
                    </div>
                </div>
            </section>
            <section id="information">
                <div className="section-inner">
                    <div className="the-brief">
                        <h2>The Brief</h2>
                        {data.client.TheBrief}
                    </div>
                    <div className="the-solution">
                        <h2>The Solution</h2>
                        {data.client.TheSolution}
                    </div>
                </div>
            </section>
            <ViewSite src={data.client.SiteAddress} viewPopup={viewPopup} setViewPopup={setViewPopup} />
        </>
    )
}
