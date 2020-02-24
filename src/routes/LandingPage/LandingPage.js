import React, { Component } from 'react'
import Intro from '../../components/Intro/Intro'
import SearchButton from '../../components/SearchButton/SearchButton'
import './LandingPage.css'

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            isLoggedIn: false,
            isLoggedOut: false,
        }
      }
    
      componentDidMount() {
        fetch(`http://localhost:8000/api/projects`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
          .then(res => res.json())
          .then(result => {
          const projects = result.map(item => {
            return item
          })
          this.setState({
            projects: projects
        })
      })
    }

    render() {
        return(
            <>
             <div>
                <Intro />
                <SearchButton />
             </div>
             <div>
                <div className='row '>
                    <div className='column'>
                        <div className='card'>
                            {this.state.projects.map(item => (
                                <div key={item.project_id}>
                                    <section>
                                        <h3 className='landing-link'>{item.schoolname}</h3>
                                        <h3>{item.city}</h3>
                                        <h3>{item.state}</h3>
                                    <div>
                                        <img 
                                            src={item.imageurl}
                                            alt='feature classroom'>
                                        </img>
                                    </div>
                                        <p >{item.fulfillmenttrailer}</p>
                                        <p>&#8212;{item.teachername}</p>
                                    </section>                     
                                    <div>
                                        <a 
                                         href={item.fundurl}
                                         target='_blank'
                                         rel="noopener noreferrer">
                                         Funding page link
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </>
        )

    }
   
}

export default LandingPage
