import React from 'react'
import { fromPromise, gql, useQuery } from '@apollo/client'
import Loading from '../screens/Loading'
import {Link} from 'react-router-dom'
import menuItems from '../assets/menu.json'

const FOOTERINFO = gql`
    query FooterInfo {
        contactinformation {
            Address,
            PhoneNumbers,
            Email
        },
        blogPosts {
            Title,
            Content,
            FeaturedImage{
                formats
            },
            id
        }
    }
`

export default function Footer() {
    const { loading, error, data } = useQuery(FOOTERINFO)

    if (loading) { return (<Loading />) }
    if (error) { return (<div>Error</div>) }

    if (data) {
        const Address = data.contactinformation.Address.replace('\n', `
    `)
    console.log(data)
    }


    return (
        <footer>
            <section className='upper-footer'>
                <div className="section-inner">
                    <div className="footer-col">
                        <p className='footer-title'>Contact Us</p>
                        <p>T: <a href={`tel:${data.contactinformation.PhoneNumbers}`}>{data.contactinformation.PhoneNumbers}</a></p>
                        <p>E: <a href={`mailto:${data.contactinformation.Email}`}>{data.contactinformation.Email}</a></p>
                        <p dangerouslySetInnerHTML={{__html: data.contactinformation.Address.replaceAll('\n', '<br>')}}></p>
                    </div>
                    <div className="footer-col">
                        <p className='footer-title'>Blog Posts</p>
                        {data.blogPosts.slice(0,4).map((post, key)=>(
                            <Link key={key} className='footer-blog-title' to={`/blog/${post.id}`}>{post.Title}</Link>
                        ))}
                    </div>
                    <div className="footer-col">
                        <p className='footer-title'>Useful Links</p>
                        <ul className='footer-menu'>
                            {menuItems.map((item, key)=>(
                                <Link key={key} to={item.Link}>
                                    <li>{item.Name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                    </div>
                </div>
            </section>
            <section className='lower-footer'>
                <div className="section-inner">
                    <p>© Dash Media UK LTD All rights reserved</p>
                    <div className="socials"></div>
                </div>
            </section>
        </footer>
    )
}
