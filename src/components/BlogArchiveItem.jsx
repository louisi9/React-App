import {props} from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default function BlogArchiveItem(props) {

    var postTime = new Date(props.post.created_at)

    return (
        <Link to={`/blog/${props.post.id}`}>
            <div className='blog-item'>
                <div className="post-date">
                    {console.log(props)}
                    <span className='month'>{months[postTime.getMonth()]}</span>
                    <span className='date'>{postTime.getDate()}</span>
                </div>
                <div className='post-content'>
                    <div className="post-image">
                        <Image src={`${window.currentAddress}${Object.values(props.post.FeaturedImage.formats)[1].url}`} />
                    </div>
                        <h1>{props.post.Title}</h1>
                </div>
            </div>
        </Link>
    )
}