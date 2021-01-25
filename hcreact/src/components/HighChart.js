import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import useFetch  from './useFetch';
 


const HighChart =(props)=>{
 
 
  let url = 'https://coronavirus-map.p.rapidapi.com/v1/spots/region?region=china';

  const {isLoading, data} = useFetch(url)
  if(isLoading){
    console.log("isloading")
  }

  console.log(data)
 


 
    const options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: "My Chart"
      },
      legend:{enabled: true},
      series: [
        {
          name: 'Total cases',
          data: [
            0,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 1, 3, 3, 1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,
            1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 6,1, 2, 1, 4, 3, 4
          ]
        },
        {
          type: 'line',
          name: 'Critical cases',
          data: [
            1,2,4,7,9,3,5,0,1,4,6,8,7,3,7,
            12,45,7,23,55,78,1,4,45,4,8,8,2,44,5,7,1,21,5,4,
            12,45,7,23,55,78,1,4,45,4,8,8,2,44,5,7,1,21,5,4,
            12,45,7,23,55,78,1,4,45,4,8,8,2,44,5,7,1,21,5,4,
            12,45,7,23,55,78,1,4,45,4,8,8,2,44,5,7,1,21,5,4,
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
 

export default HighChart;
