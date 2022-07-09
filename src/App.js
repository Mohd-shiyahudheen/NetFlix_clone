import React from 'react';
import './App.css';
import Banner from './componetns/Banner/Banner';
import NavBar from './componetns/NavBar/NavBar';
import RowPost from './componetns/RowPost/RowPost';
import {orginals,actions} from './urls'


function App() {
  return(
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Action Movies' isSmall/>
    </div>
  ) 
}

export default App;
