import React from 'react'
import './ContactButton.css'

function ContactButton() {
	return (
		<button className='cta-btn'>
			<a
				className='btn-inner'
				href='mailto:startsmall.contact@gmail.com'
				target='_blank'
				rel='noopener noreferrer'>
				Contact Us
			</a>
		</button>
	)
}

export default ContactButton
