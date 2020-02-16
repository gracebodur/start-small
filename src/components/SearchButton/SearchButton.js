import React from 'react'
import {Link} from 'react-router-dom'
import './SearchButton.css'

function SearchButton() {
    return(
        <div >
            <Link to='/search'><button className='Btn center'>Find a classroom to support</button></Link>
        </div>
    )
}

export default SearchButton