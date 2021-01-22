import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

let options ={
  // chart:{
  //   type: 'spline'
  // },
  title: {
    text: 'my Chart'
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
      <HighchartsReact 
          highcharts={Highcharts} 
          options={options}
          constructorType={'stockChart'}
      />
    </div>
  )
}


render( <App/> , document.getElementById("root"));

