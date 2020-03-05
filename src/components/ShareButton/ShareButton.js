import React from 'react'
import fbShare from '../../img/fb-share-icon.jpg'
import './ShareButton.css'

function ShareButton() {
    return(
        <section>
            <div 
                class="fb-share-button" 
                data-href="https://startsmall.now.sh/" 
                data-layout="button" data-size="large">
                <a target="_blank" 
                rel="noopener noreferrer"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstartsmall.now.sh%2F&amp;src=sdkpreparse" 
                class="fb-xfbml-parse-ignore"><img style={{paddingTop: '5px', width: '10%'}} alt='facebook share button' src={fbShare} /></a></div>
        </section>
    )
}

export default ShareButton