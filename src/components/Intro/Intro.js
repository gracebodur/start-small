import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
import './Intro.css'

function Intro() {
    return (
        <div>
            <div className='Intro'>
                <section>
                    <h1 className='proj-name'>Start small</h1>
                        <ul>
                            <li>Pick a classroom project for your friends to support.</li>
                            <li>Let us know of classroom projects that you think needs help</li>
                            <li>Make a big difference!</li>
                        </ul>
                </section>
            </div>
            <div>
                <ContactButton />
                <p className='demo'>Demo: Username: admin Password: admin</p>
            </div>
        </div>
    )
}

export default Intro