import React, {Component} from 'react'
import './SearchForm.css'

class SearchForm extends Component {
    render() {
        return (
            <section className='Search-field'>
	            <form className="Search" action="">
		        <div>
		        <input 
			        type="Search"
			        placeholder="Search for a school project" 
			        name="project"/>
		        <input 
			        type="search"
			        placeholder="city or state" 
			        name="location"/>
		        <button 
			        type="submit">
			        Search
		        </button>
                </div>
                </form>
            </section>
        )
    }
}

export default SearchForm