import React from 'react';
import { render } from 'react-dom';
import HighChart from './components/HighChart';
import HighStock from './components/HighStock';
import Map from './components/Map';



const App = () => {
  return (
    <div>
      <HighChart />
      <HighStock />
      <Map />
    </div>
  )
}


render( <App/> , document.getElementById("root"));

