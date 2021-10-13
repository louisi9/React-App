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
            Gallery {
                formats
            },
            id
        }
        ourworkmedia {
            landingtext
        }
    }
`

export default function Home() {
    const { loading, error, data } = useQuery(CLIENTS)

    if (loading) { return (<Loading/>) }
    if (error) { return (<h3>Error</h3>) }

    return (
        <>
            {/* {console.log(data)} */}
            <section className='landing'>
                <div className="section-inner">
                    <div className='landing-text'>{data.ourworkmedia.landingtext}</div>
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
