/* eslint-disable */
import React, {Component} from 'react'
import { Link } from 'react-router-dom' 
import './ProjectDetails.css'

class ProjectDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
        checked: false,
        }
    }

    onHeartClick = () => {
        this.setState({ 
            checked: !this.state.checked,
        });
      }

    render() {
        const { checked } = this.state;
        return(
        <>
            <div>
                <Link to='/account'>
            <div>
            <input 
                id="heart" 
                type="checkbox"
                checked={checked} 
                onClick={this.onHeartClick} />
            <label for="heart">❤</label>
            </div>
                </Link>
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
