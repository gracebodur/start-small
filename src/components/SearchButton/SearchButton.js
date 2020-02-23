import React from 'react'
import {Link} from 'react-router-dom'
import './SearchButton.css'

function SearchButton() {
    return(
        <div >
            <Link to='/:project_id'><button className='Btn center'>Find a classroom to support</button></Link>
        </div>
    )
}

export default SearchButton