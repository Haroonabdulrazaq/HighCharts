import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import useFetch  from './useFetch';
 


const HighChart =(props)=>{
 
 
  let url = 'https://coronavirus-map.p.rapidapi.com/v1/spots/region?region=china';

  const {isLoading, death, total} = useFetch(url)
  

    const options = {
      chart: {
        type: 'column'
      },
      title: {
        text: "My Chart"
      },
      legend:{enabled: true},
      series: [
        {
          name: 'Total cases',
          data: [...total]
        },
        {
          type: 'column',
          name: 'Death cases',
          data: [...death]
        }
      ]
    }
    if(isLoading){
      return <div>
        <h2>Loading...</h2>
        </div>
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
