import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Loader from '../asstest/loader/tenor.gif'
import renderHTML from 'react-render-html'
import Moment from 'react-moment'
import { Link } from '@reach/router'
import clientConfig from '../client-config'
import '../App.css'

class Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }

    createMarkup = (data) => ({
        __html: data
    })

    componentDidMount()
    {
        const wordPressSiteUrl = clientConfig.siteUrl

        this.setState({ loading: true }, () =>
        {
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
                .then(res =>
                {
                    if (200 === res.status)
                    {
                        if (res.data.length)
                        {
                            this.setState({ loading: false, posts: res.data })
                        } else
                        {
                            this.setState({ loading: false, error: 'No Posts Found' })
                        }
                    }
                })
                .catch(err =>
                {
                    this.setState({ loading: false, error: err })
                })
        })
    }

    render()
    {
        const { posts, loading, error } = this.state

        return (
            <React.Fragment>
                <Navbar />
                {error && <div className="alert alert-danger" dangerouslySetInnerHTML={this.createMarkup(error)} />}
                {posts.length ? (
                    <div className="mt-5 post-container">
                        {posts.map(post =>
                        {
                            return (

                                <div key={post.id} className="card border-dark mb-3">
                                    {/* Title */}
                                    <div className="card-header">
                                        <Link to={`/post${post.id}`} className="text-secondary font-weight-bold post-title">
                                            {renderHTML(post.title.rendered)}
                                        </Link>
                                    </div>
                                    {/* Body */}
                                    <div className="card-body">
                                        <div className="card-text post-content">
                                            {renderHTML(post.excerpt.rendered)}
                                        </div>
                                    </div>
                                    {/* Footer */}
                                    <div className="card-footer">
                                        <Moment fromNow>{post.date}</Moment>
                                        <Link to={`/post/${post.id}`} className="btn btn-secondary float-right">Read More</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : ''}
                {loading && <img className="loader" src={Loader} alt="Loader" />}
            </React.Fragment>
        )
    }
}

export default Home