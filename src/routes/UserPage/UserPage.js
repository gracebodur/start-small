import React, {Component} from 'react'
// import User from '../../components/User/User'
import './UserPage.css'

class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: []
        }
    }
    
    componentDidMount() {
        fetch(`http://localhost:8000/api/users/:user_id`)
            .then(res => res.json())
            .then(users => {
                // const userData = Object.keys(userData)
                // .map(key => users[key].item[1])
                // console.log(userData)
            console.log(users)
             })
        .catch(err => console.log(err))
    }
        // , {
        //     method: "GET",
        //     headers: {
        //         "content-type": "application/json"
        //     }
        // })
         

   
    render() {
        return (
            <section>
               {/* {currentUser} */}
            </section>
        )
    }
    
}

           
export default UserPage

// const currentUser = userData.map(username => <User key={username.user_id} username={currentUser}/>)

// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import ProjectDetails from '../../components/ProjectDetails/ProjectDetails'
// import './UserPage.css'

// class AccountPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             userData: {
//                 user_name: '',
//                 password: ''
//             }
//     }
// }

//     componentDidMount() {
//         fetch('./data.json')
//           .then(res => res.json())
//           .then(data => {
//             const newData = data.map(item => {
//                 return item
//             })
//             this.setState({
//                 userData : newData
//           })
//         })
//     }
   
//     render() {
//         return (
//             <div>
//                  <nav className='Nav dim underline-hover'>
//                     <Link to='/'>
//                         <p 
//                         onClick={this.props.handleLogoutClick}
//                         className='logout-link' 
//                         id='logout'>
//                         Log out
//                         </p>
//                     </Link>
//                     <ProjectDetails />
//                 </nav>
//             </div>
//         )
//     }
    
// }

           
// export default AccountPage

   