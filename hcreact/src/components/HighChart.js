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
        text: "My Charty"
      },
      series: [
        {
          data: [1, 2, 1, 6, 3, 7]
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
