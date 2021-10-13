import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Image from '../components/Image.jsx'
import ClientGrid from '../components/ClientGrid.jsx'
import Loading from './Loading.jsx'


const CLIENTS = gql`
    query GetHomeContent {
        clients {
            Title,
            Description,
            Gallery{
                formats
            },
            id
        }
        homePageMediaAndContent {
            Title,
            Awards {
                formats
            },
            LandingText
        }
    }
`

export default function Home() {
    const { loading, error, data } = useQuery(CLIENTS)

    if (loading) { return (<Loading/>) }
    if (error) { return (<h3>Error</h3>) }

    return (
        <>
            <section className='landing'>
                <div className="section-inner">
                    <div className='landing-text'>{data.homePageMediaAndContent.LandingText}</div>
                    <div className="awards">
                        {data.homePageMediaAndContent.Awards.map((images, key) => (
                            <Image key={key} src={`${window.currentAddress}${Object.values(images.formats)[0].url}`} alt="" />
                        ))}
                    </div>
                </div>
            </section>
            <section id="clients">
                <div className="section-inner">
                    {data.clients.map((client, key) => (
                        <ClientGrid key={key} client={client} />
                    ))}
                </div>
            </section>
        </>
    )
}
