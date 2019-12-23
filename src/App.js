import React from 'react';
import Header from "./Header/Header"
import SearchForm from './Search/SearchForm'
import Classroom1 from './Classroom1/Classroom1'
import Classroom2 from './Classroom2/Classroom2'
import Scholarship from './Scholarship/Scholarship'
import Donation from './Donation/Donation'
import SignUpForm from './SignUp/SignUpForm';
import Footer from './Footer/Footer'

import './App.css';


function App() {
  return (
    <div className="App">
       <style>
          @import url('https://fonts.googleapis.com/css?family=Lilita+One|Rosario&display=swap');
        </style>
        <Header />
        <SearchForm />
        <Classroom1 />
        <Classroom2 />
        <Scholarship />
        <Donation />
        <SignUpForm />
        <Footer />
   </div>
  );
}

export default App;
