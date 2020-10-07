import React from 'react'
import Navbar from './Navbar'
import '../App.css'
import axios from 'axios'
import { Redirect } from '@reach/router'
import Loader from '../asstest/loader/tenor.gif'
import clientConfig from '../client-config'

class Login extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            username: '',
            password: '',
            userNiceName: '',
            userEmail: '',
            loggedIn: false,
            loading: false,
            error: ''
        }
    }

    createMarkup = (data) => ({
        __html: data
    })

    onFormSubmit = (event) =>
    {
        event.preventDefault()

        const siteUtl = clientConfig.siteUrl

        const loginData = {
            username: this.state.username,
            password: this.state.password,
        }

        this.setState({ loading: true }, () =>
        {
            axios.post(`${siteUtl}/wp-json/jwt-auth/v1/token`, loginData)
                .then(res =>
                {
                    //console.log(res.data);
                    if (undefined === res.data.token)
                    {
                        this.setState({ error: res.data.message, loading: false })
                        return
                    }

                    const { token, user_nicename, user_email } = res.data

                    localStorage.setItem('token', token)
                    localStorage.setItem('username', user_nicename)

                    this.setState({
                        loading: false,
                        token: token,
                        userNiceName: user_nicename,
                        userEmail: user_email,
                        loggedIn: true
                    })
                })
                .catch(err =>
                {
                    this.setState({
                        error: err.response.data.message, loading: false
                    })
                })
        })
    }

    handleOnChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render()
    {

        const { username, password, userNiceName, loggedIn, error, loading } = this.state

        const user = userNiceName ? userNiceName : localStorage.getItem('userName')

        if (loggedIn || localStorage.getItem('token'))
        {
            return (
                <Redirect to={`/dashboard/${user}`} noThrow />
            )
        } else
        {
            return (
                <React.Fragment>
                    <Navbar />

                    <div className="login-container">
                        <h4 className="mb-4">Login</h4>
                        {error && <div className="alert alert-danger" dangerouslySetInnerHTML={this.createMarkup(error)} />}
                        <form className="login-form" onSubmit={this.onFormSubmit}>
                            <label className="form-group">
                                Username:
                            <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={this.handleOnChange}
                                />
                            </label>
                            <br />
                            <label className="form-group">
                                Password:
                            <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={this.handleOnChange}
                                />
                            </label>
                            <br />
                            <button className="btn btn-primary mb-3" type="submit">Login</button>
                            {loading && <img className="loader" src={Loader} alt="Loader" />}
                        </form>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default Login