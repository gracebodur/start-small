/* eslint-disable */
import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeartCheckbox from 'react-heart-checkbox';

import './ProjectDetails.css'


class ProjectDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
        checked: false,
        deleted: false
        }
    }

    onHeartClick = (e, props) => {
        this.setState({ 
            checked: !this.state.checked,
        });
      }
    
    onDeleteClick = (e, props) => {
        this.setState({
            deleted: !this.state.deleted
        })
    }

    render() {
        const { checked } = this.state;
        console.log('checked', this.state.checked)
        const { deleted } = this.state;
        console.log('deleted', this.state.deleted)
        return(
            <>
            <div>
            <div>
                <HeartCheckbox className='heart' checked={checked} onClick={this.onHeartClick}/>
            </div>
            <div>
                <FontAwesomeIcon className='delete' deleted={deleted} onDeleteClick={this.onDeleteClick} className='delete' icon='trash-alt'/>
            </div>
            </div>
            <div className='feature'>
                <section className='Feature01'>
                    <h2 className='center'>{this.props.schoolName}</h2>
                    <h3 className='center'>{this.props.city}</h3>
                    <h3 className='center'>{this.props.state}</h3>
                    <p className='center'>&#42;{this.props.fundingStatus}</p>
                    <p className='center'>{this.props.fulfillmentTrailer}</p>
                    <p>&#8212;{this.props.teacherName}</p>
                    <img 
                        className='center'
                        src={this.props.imageURL} 
                    >
                    </img>
                </section>
            <div>
                    <a 
                        href={this.props.fundURL}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='center'>
                        Funding page link
                    </a>
                    <div>
                    <div>
				        <span>Share this project: </span>
                            <div 
                                className="fb-share-button" 
                                data-href="https://developers.facebook.com/docs/plugins/" 
                                data-layout="button" 
                                data-size="small">
                                <a target="_blank" 
                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" 
                                className="fb-xfbml-parse-ignore">
                                Share
                                </a>
                            </div>
			            </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
   
}

export default ProjectDetails

// function ProjectDetails({...props}) {
//     return(
//         <>
//         <div className='icons'>
//         {/* <HeartCheckbox checked={this.props.checked} onClick={this.props.onClick}/> */}
//         <FontAwesomeIcon className='add' icon='plus'/>
//         </div>
//         <div className='feature'>
//             <section className='Feature01'>
//                 <h2 className='center'>{props.schoolName}</h2>
//                 <h3 className='center'>{props.city}</h3>
//                 <h3 className='center'>{props.state}</h3>
//                 <p className='center'>&#42;{props.fundingStatus}</p>
//                 <p className='center'>{props.fulfillmentTrailer}</p>
//                 <p>&#8212;{props.teacherName}</p>
//                 <img 
//                     className='center'
//                     src={props.imageURL}
//                     alt='feature classroom'>
//                 </img>
//             </section>
//         <div>
//                 <a 
//                     href={props.fundURL}
//                     target='_blank'
//                     rel="noopener noreferrer"
//                     className='center'>
//                     Funding page link
//                 </a>
//             </div>
//         </div>
//         </>
//     )
// }
