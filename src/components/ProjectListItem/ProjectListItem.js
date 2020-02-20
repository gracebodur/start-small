import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectListItem extends Component {
    render() {
        return(
            <div>
            <Link to='/project'>
                <div>
                    {this.props.projectsData.map(item => (
                        <div key={item.id}>
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
                    </div>
                    </Link>
                </div>

        )
    }
}

export default ProjectListItem