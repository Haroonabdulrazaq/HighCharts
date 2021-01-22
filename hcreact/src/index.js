import React from 'react';
import { render } from 'react-dom';
import HighChart from './components/HighChart';
import HighStock from './components/HighStock';



const App = () => {
  return (
    <div>
      <HighChart />
      <HighStock />
    </div>
  )
}


render( <App/> , document.getElementById("root"));

