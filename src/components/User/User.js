import React from 'react'

function User(props) {
    return(
        <div>
            <h3>Welcome back, {props.users.user_name}!</h3>
            <p>Here are the list of your favorite classroom projects</p>
        </div>
    )
}

export default User