import React, {Component } from 'react'
import ProjectList from '../../components/ProjectList/ProjectList';
import './SearchPage.css'

class SearchPage extends Component {
    constructor(props){
		super(props)
		this.state = {
            searchTerms: '',
            city: '',
            state: '',
            touched: false
		}
    }

    updateSearchTerm = (term) => {
        this.setState({
          searchTerms: term,
          touched: true,
        })
    }

    updateCity = (city) => {
        this.setState({
          city: city,
          touched: true,
        })
    }

    updateState = (state) => {
        this.setState({
          state: state,
          touched: true,
        })
    }

	handleSubmit = (e) => {
        e.preventDefault()

        const { searchTerms, city, state } = this.state

        this.props.handleSearchSubmit(searchTerms, city);
       
        this.setState({
            searchTerms: searchTerms,
            city: city,
            state: state
        })

        e.target.searchTerms ='';
        e.target.city ='';
        e.target.state ='';
    }

    render() {
        // console.log('search page', this.state.resultData)
        // const searchResults = this.props.results
        return (
            <div>
                <section className='Search-field'>
                    <form className="Search" onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                id="searchTerms"
                                type="text"
                                placeholder="Name of school" 
                                name="searchTerms"
                                value={this.state.searchTerms}
                                onChange={(e)=> this.updateSearchTerm(e.target.value)}
                                />
                            <input 
                                id="city"
                                type="text"
                                placeholder="city" 
                                name="city"
                                value={this.state.city}
                                onChange={(e)=> this.updateCity(e.target.value)}
                                />
                            <input 
                                id="state" 
                                type="text"
                                placeholder="state" 
                                name="state"
                                value={this.state.state}
                                onChange={(e)=> this.updateState(e.target.value)}
                                />
                            <button
                                type="submit">
                                Search
                            </button>
                            </div>
                        </form>
                        <div>
                            <ProjectList 
                                results={this.props.results} 
                                addProject={this.props.addProject} 
                                deleteProject={this.props.deleteProject}/>
                        </div>
                    </section>
                    
            </div>
        )
    }
}


export default SearchPage


