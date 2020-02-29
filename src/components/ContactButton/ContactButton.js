import React from 'react'
import './ContactButton.css'

function ContactButton() {
    return(
        <div >
            <a 
            href='mailto:startsmall-contact@gmail.com'
            subject='recommend classroom'
            target='_blank'
            rel='noopener noreferrer'
            ><button className='Btn center'>Contact Us</button></a>
        </div>
    )
}

export default ContactButton