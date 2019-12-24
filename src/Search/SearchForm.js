import React from 'react'
import './searchform.css'

function SearchForm() {
    return(
        <section className='search'>
           <div id="cover">
            <form method="get" action="">
              <div className="tb">
              <div className="td"><input type="text" placeholder="Search for a classroom" required /></div>
              <div className="td" id="s-cover">
              <button type="submit">
              <div id="s-circle"></div>
              <span></span>
              </button>
              </div>
              </div>
              </form>
            </div>
          </section>
    )
}

export default SearchForm