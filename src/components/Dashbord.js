import React from 'react'
import Navbar from './Navbar'

class Dashboard extends React.Component
{

    render()
    {
        const username = this.props.userName
        return (
            <div>
                <Navbar />
                <h2>Welcome {username}</h2>
            </div>
        )
    }
}

export default Dashboard