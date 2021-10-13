import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Image from '../components/Image.jsx'
import Loading from './Loading.jsx'


const CLIENTS = gql`
    query GetWhoAreContent {
        whoWeAre {
            TopContent,
            MainCopy,
            Images {
                formats 
            },
            id
        }
    }
`

export default function Home() {
    const { loading, error, data } = useQuery(CLIENTS)

    if (loading) { return (<Loading />) }
    if (error) { return (<h3>Error</h3>) }

    

    return (
        <>
            {/* {console.log(data)} */}
            <section className='landing'>
                <div className="section-inner">
                    <div className='landing-text'>{data.whoWeAre.TopContent}</div>
                </div>
            </section>
            <section className="who-we-are">
                <div className="section-inner">
                    <div style={{backgroundImage: `url(${window.currentAddress}${data.whoWeAre.Images[0].formats.medium.url})`}} className='who-we-are-images' >
                    </div>
                    <div className="who-we-are-content">
                        <h2 className="who-we-are-title">Who we are</h2>
                        <div className='who-we-are-body' dangerouslySetInnerHTML={{__html: data.whoWeAre.MainCopy.replace('\n', '<br><br>')}}></div>
                        <Link class="button" to='/our-work/'>View our Work</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
