import React, {Component} from 'react'
import SearchButton from '../../components/SearchButton/SearchButton'
import './LandingPage.css'

class LandingPage extends Component {
constructor(props) {
    super(props)
    this.state = {
      projectsData: [],
      results: [],
      isLoggedIn: false,
      isLoggedOut: false,
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(result => {
      const projects = result.map(item => {
        return item
      })
      this.setState({
        projectsData: projects
    })
  })
}
    render() {
        return(
            <> 
            <div >
                <header className="App-header">
                    <h1>Start small</h1>
                    <h3>Make a big difference!</h3>
                </header>
                <section>
                    <ul>
                        <li>Pick a classroom project for your friends to support.</li>
                        <li>Add a personal message.</li>
                        <li>See your impact!</li>
                    </ul>
                </section>
            </div>
                <div>
                    {this.state.projectsData.map(item => (
                        <div key={item.id} className='card'>
                        <section>
                            <h3>{item.schoolName}</h3>
                            <h3>{item.city}</h3>
                            <h3>{item.state}</h3>
                            <p >&#42;{item.fundingStatus}</p>
                            <p >{item.fulfillmentTrailer}</p>
                            <p>&#8212;{item.teacherName}</p>
                        <div>
                            <img 
                                src={item.imageURL}
                                alt='feature classroom'>
                            </img>
                        </div>
                        </section>
                       
                        <div>
                            <a 
                                href={item.fundURL}
                                target='_blank'
                                rel="noopener noreferrer">
                                Funding page link
                            </a>
                        </div>
                    </div>
                    ))}
                    <div>
                        <SearchButton />
                    </div>
                </div>
            </>
        )

    }
   
}

export default LandingPage