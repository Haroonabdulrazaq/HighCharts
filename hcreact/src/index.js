import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

let options ={
  chart:{
    type: 'spline'
  },
  title: {
    text: 'my Charta'
  },
  series: [
   { 
     data: [1, 2, 1, 4, 3, 6]
  }
  ]
};
// ,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
// 1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 160 

const App = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}


render( <App/> , document.getElementById("root"));

