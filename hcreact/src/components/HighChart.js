import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 


class HighChart extends Component {


  render() {
    const options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: "My Chart"
      },
      series: [
        {
          data: [
            0,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 1, 3, 3, 1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 4
          ]
        }
      ]
    }
    return (
      <div>
        <HighchartsReact 
          highcharts={Highcharts} 
          options={options}
          // constructorType={'stockChart'}
      />
      </div>
    )
  }
}

export default HighChart;
