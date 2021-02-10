import React from 'react'
import { Section } from '../../components/Utils/Utils'
import './Intro.css'

function Intro() {
    return (
        <div>
            <div className='Proj-intro'>
                <Section>
                    <h1 className='Proj-name'>Start small</h1>
                        <ul className='Proj-details h4'>
                            <li>Pick a classroom project for your friends to support.</li>
                            <li>Let us know of classroom projects that you think needs help</li>
                            <li>Make a big difference!</li>
                        </ul>
                </Section>
            </div>
            <div>
                <p className='Proj-demo lead'>Demo: Username: admin Password: admin</p>
            </div>
        </div>
    )
}

export default Intro