/* eslint-disable */
import React, {Component} from 'react'
import './ProjectList.css'

class ProjectList extends Component {
    render() {
        return (
            <section>
		        <div className='feature'>
			        <div className='feature-1'>
				        <p>School name</p>
			        </div>
			        <div className='feature-1'>
				        <p>fullfillment description from classroom teachers</p>
			        </div>
			        <div className='feature-1'>
				    <img 
				        className='feature-img'
				        src="https://bhmsmiles.com/wp-content/uploads/2016/12/grey-box-placeholder.jpg" 
				        alt="children playing" />
			        </div>
			        <div>
				    <a 
				        href="https://secure.donorschoose.org/donors/givingCart.html?proposalid=4592693&donationAmount=45&utm_source=api&utm_medium=feed&utm_content=fundlink&utm_campaign=DONORSCHOOSE"
                        target='_blank'
                        rel='noreferer' >
				        Funding page link
				    </a>
			    </div>
		    </div>
	</section>
        )
    }
}

export default ProjectList