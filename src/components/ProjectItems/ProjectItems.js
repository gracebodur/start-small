/* eslint-disable */
import React from 'react'

function ProjectItems(props) {
    return(
        <div className='feature'>
            <section className='Feature01'>
                <h2 className='center'>{props.schoolName}</h2>
                <h3 className='center'>{props.city}</h3>
                <h3 className='center'>{props.state}</h3>
                <p className='center'>&#42;{props.fundingStatus}</p>
                <p className='center'>{props.fulfillmentTrailer}</p>
                <p>&#8212;{props.teacherName}</p>
                <img 
                    className='center'
                    src={props.imageURL}
                    alt='feature classroom'>
                </img>
            </section>
        <div>
                <a 
                    href={props.fundURL}
                    target='_blank'
                    rel='noreferer'
                    className='center'>
                    Funding page link
                </a>
            </div>
        </div>
    )
}

export default ProjectItems