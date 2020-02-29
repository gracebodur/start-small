import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
import './Intro.css'

function Intro() {
    return (
        <div className='Intro'>
            <header className="App-header">
                <h1>Start small</h1>
            </header>
            <section>
                <ul>
                    <li>Pick a classroom project for your friends to support.</li>
                    <li>Let us know of classroom projects that you think needs help</li>
                    <li>Make a big difference!</li>
                </ul>
                <ContactButton />
            </section>
        </div>
    )
}

export default Intro