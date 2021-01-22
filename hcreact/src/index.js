import React from 'react';
import { render } from 'react-dom';
// import Highcharts from 'highcharts/highstock';
// import HighchartsReact from 'highcharts-react-official';
import HighChart from './components/HighChart';

// ,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 160 

const App = () => {
  return (
    <div>
      <HighChart />
    </div>
  )
}


render( <App/> , document.getElementById("root"));

