import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import '../App.css'
import renderHTML from 'react-render-html'
import Moment from 'react-moment'
import Loader from '../asstest/loader/tenor.gif'

class SinglePost extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            loading: false,
            post: {},
            error: ''
        }
    }

    createMarkup = (data) => ({
        __html: data
    })

    componentDidMount()
    {
        const wordPressSiteUrl = 'http://18.184.167.248/wordpress'
        this.setState({ loading: true }, () =>
        {
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts/${this.props.id}`)
                .then(res =>
                {
                    this.setState({ loading: false, post: res.data })
                })
                .catch(error =>
                {
                    this.setState({ loading: false, error: error.response.data.message })
                })
        })
    }

    render()
    {

        const { post, error, loading } = this.state

        return (
            <div>
                <Navbar />
                {error && <div className="alert alert-danger">{error}</div>}
                {Object.keys(post).length ? (
                    <div className="mt-5 post-container">

                        <div key={post.id} className="card border-dark mb-3">
                            {/* Title */}
                            <div className="card-header">
                                {post.title.rendered}
                            </div>
                            {/* Body */}
                            <div className="card-body">
                                <div className="card-text post-content">
                                    {renderHTML(post.content.rendered)}
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="card-footer">
                                <Moment fromNow>{post.date}</Moment>
                            </div>
                        </div>
                    </div>
                ) : ''}
                {loading && <img className="loader" src={Loader} alt="Loader" />}
            </div>
        )
    }
}

export default SinglePost