import React, {Component} from 'react'
import './SearchField.css'

class SearchField extends Component {
	constructor(props){
		super(props)
		this.state = {
			projects: [],
			searchTerms: '',
			city: '',
			state: ''
		}
	}

	handleSearchChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})

	}

	handleSubmit = (e) => {
		e.preventDefault()
		// const {searchTerms, city, state} = e.target
	}


    render() {
        return (
            <section className='Search-field'>
	            <form className="Search" onSubmit={this.handleSubmit}>
		        <div>
		        <input 
			        type="search"
			        placeholder="Name of school" 
			        name="searchTerms"
					value={this.state.searchTerms}
					onChange={this.handleSearchChange}/>
		        <input 
			        type="search"
			        placeholder="city" 
			        name="city"
					value={this.state.city}
					onChange={this.handleSearchChange}/>
				<input 
			        type="search"
			        placeholder="state" 
			        name="state"
					value={this.state.state}
					onChange={this.handleSearchChange}/>
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

export default SearchField