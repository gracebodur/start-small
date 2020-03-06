import React from 'react'
import fbShare from '../../img/fb-share.png'
import './ShareButton.css'

function ShareButton() {
    return(
        <section>
            <div 
                className="fb-share-button" 
                data-href="https://start-small.now.sh/" 
                data-layout="button" data-size="large">
                <a target="_blank" 
                rel="noopener noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstartsmall.now.sh%2F&amp;src=sdkpreparse" 
                className="fb-xfbml-parse-ignore"><img className='Facebook__share' style={{paddingTop: '5px', width: '15%'}} alt='facebook share button' src={fbShare} /></a></div>
        </section>
    )
}

export default ShareButton