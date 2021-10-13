import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import Image from '../components/Image.jsx'
import ClientGrid from '../components/ClientGrid.jsx'
import Loading from './Loading.jsx'
import BlogArchiveItem from '../components/BlogArchiveItem.jsx'
import {props} from 'react'


const BLOGPOSTS = gql`
    query BlogPosts {
        blogPageMedia{
            TopText
        },
        blogPosts {
            created_at,
            Title,
            Content,
            FeaturedImage{
                formats
            },
            id
        }
    }
`

export default function BlogArchive() {
    const { loading, error, data } = useQuery(BLOGPOSTS)

    if (loading) { return (<Loading/>) }
    if (error) { return (<h3>Error</h3>) }

    return (
        <>
            {/* {console.log(data)} */}
            <section className='landing'>
                <div className="section-inner">
                    <div className='landing-text'>{data.blogPageMedia.TopText}</div>
                </div>
            </section>
            <section id="blog-posts">
                <div className="section-inner">
                    <div className="blog-list">
                        {data.blogPosts.map((post, key)=>(
                            <BlogArchiveItem key={key} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
