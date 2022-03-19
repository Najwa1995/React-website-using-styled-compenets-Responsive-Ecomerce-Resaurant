import { Fragment } from 'react';

import './App.css';
import Home from './compenent/Home.js/Home';
import Navs from './compenent/Home.js/Navs/Navs';


function App() {
  return (
    <Fragment>
      <Navs/>
      <Home/>
    </Fragment>
    
  );
}

export default App;


