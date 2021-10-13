import {gql, useQuery} from '@apollo/client'
import { useParams } from 'react-router'
import Loading from './Loading'


const POST = gql`
    query Post($id: ID!) {
        blogPost(id:$id) {
            Title,
            Content,
            FeaturedImage {
                formats
            }
        }
    }
`


export default function BlogPage() {
    const {id} = useParams()
    const {loading, error, data} = useQuery(POST, {variables: {
        id: id
    }})

    if (loading){return <Loading/>}
    if (error){return <h1>Error</h1>}

    return (
        <>
            <section className="title">
                <div className="section-inner">
                    <h1>
                        {data.blogPost.Title}
                    </h1>
                </div>
            </section>
            <section>
                <div dangerouslySetInnerHTML={{__html: data.blogPost.Content}} className="section-inner">
                </div>
            </section>
        </>
    )
}
