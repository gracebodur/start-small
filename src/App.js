import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Lilita+One|Rosario&display=swap');
        </style>
        <h1>START small</h1>
        <h3>A charitable platform that aims to help improve every child's education </h3>
      </header>
      
      <section className='search'>
           <div id="cover">
            <form method="get" action="">
              <div className="tb">
              <div className="td"><input type="text" placeholder="Find schools" required /></div>
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

      <div className='classroom1'>
        <section>
          classroom1 
        </section>
      </div>

      <div className='classroom2'>
      <section>
        classroom2
      </section>
      </div>

      <div className= 'scholarship'>
      <section>
        scholarship
      </section>
      </div>

      <div className='donation'>
      <section>
        donation
      </section>
      </div>

      <div className= 'signup'>
      <section>
        START TO CHANGE A KID'S WORLD
      </section>
      </div>

      <div className = 'footer'>
      <section>
        made with <svg class="heart" viewBox="0 0 32 29.6">
                  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                  </svg> mgb2019
      </section>
      </div>

    </div>
  );
}

export default App;
