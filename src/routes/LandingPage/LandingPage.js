import React from 'react'
import SearchButton from '../../components/SearchButton/SearchButton'
import FeatureProject from '../../components/FeatureProject/FeatureProject'
import './LandingPage.css'

function LandingPage() {
    return(
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
            <FeatureProject />
        <div>
            <SearchButton />
        </div>
        </div>
    )
}

export default LandingPage