import React, {Component } from 'react'
import ProjectList from '../../components/ProjectList/ProjectList';
import './SearchPage.css'

class SearchPage extends Component {
    constructor(props){
		super(props)
		this.state = {
            results: [],
            projectsData: [],
            searchTerms: '',
            city: '',
            state: '',
            touched: false 
		}
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/projects`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
          .then(res => res.json())
          .then(result => {
          const projects = result.map(item => {
            return item
          })
          this.setState({
            projectsData: projects
        })
      })
    }


    handleSearchSubmit = (searchTerms, city,state) => {
        let resultsData = this.state.projectsData.filter(
        res => res.schoolName === searchTerms || res.city === city ||  res.state === state)
        this.setState({
            results: resultsData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { searchTerms, city, state } = this.state

        this.handleSearchSubmit(searchTerms, city);
       
        this.setState({
            searchTerms: searchTerms,
            city: city,
            state: state
        })

        e.target.searchTerms ='';
        e.target.city ='';
        e.target.state ='';
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

    render() {
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
                            <ProjectList results={this.state.results} />
                        </div>
                    </section>
            </div>
        )
    }
}


export default SearchPage


