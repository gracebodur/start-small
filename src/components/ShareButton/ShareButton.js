import React from 'react'

function ShareButton() {
    return(
        <section>
            <iframe 
                title='facebook'
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=77&height=28&appId" 
                width="77" 
                height="28" 
                style={{border:'none'}} 
                scrolling="no" 
                frameBorder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
                data-href="https://startsmall.now.sh/" >
            </iframe>
        </section>
    )
}

export default ShareButton