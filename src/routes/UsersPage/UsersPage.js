import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import ProjectList from '../../components/ProjectList/ProjectList'

function UsersPage() {
    return(
        <div>
            <nav className='Nav dim underline-hover'>
                <Link to='/'>
                    <p className='logout-link' id='logout'>Log out</p>
                </Link>
            </nav>
            <section>
                <SearchForm />
                <ProjectList />
            </section>
        </div>
    )
}

export default UsersPage