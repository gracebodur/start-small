import React, {Component} from 'react'
import SearchButton from '../../components/SearchButton/SearchButton'

import './LandingPage.css'

class LandingPage extends Component {
    render() {
        // const listProjects = this.props.projectsData.map(item => (
        //     <div>{item.schoolName}</div>
        // ))
        return(
            <>
            <div>
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
                <div className='feature'>
                    {this.props.projectsData.map(item => (
                        <div>
                        <section className='Feature01 tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                            <h2 className='center'>{item.schoolName}</h2>
                            <h3 className='center'>{item.city}</h3>
                            <h3 className='center'>{item.state}</h3>
                            <p className='center'>&#42;{item.fundingStatus}</p>
                            <p className='center'>{item.fulfillmentTrailer}</p>
                            <p>&#8212;{item.teacherName}</p>
                        <div>
                            <img 
                                className='center'
                                src={item.imageURL}
                                alt='feature classroom'>
                            </img>
                        </div>
                        </section>
                       
                        <div>
                            <a 
                                href={item.fundURL}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='center'>
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

