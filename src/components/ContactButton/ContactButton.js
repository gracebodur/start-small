import React from 'react'
import './ContactButton.css'

function ContactButton() {
    return(
        <div >
            <button className='Btn center'>
                <a 
                href='mailto:startsmall-contact@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                >
                Contact Us
                </a>
            </button>
        </div>
    )
}

export default ContactButton