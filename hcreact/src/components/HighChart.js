import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import useFetch  from './useFetch';
 


const HighChart =(props)=>{
 
 
  let url = 'https://coronavirus-map.p.rapidapi.com/v1/spots/region?region=china';

  const {isLoading, death, total, labelArray} = useFetch(url)

   let xValue =[]
   for(let i=0; i < labelArray.length; i++){
      xValue.push(labelArray[i])
   }
  
    const options = {
      chart: {
        // type: 'column'
      },
      title: {
        text: "Corona Virus cases in China",
      },
      subtitle: {
        text:  "Data for total and death cases"
      },
      yAxis: {
        title:{
          text: "Amount of cases"
        }
      },  
      xAxis: {
        categories: xValue
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      legend:{
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      }, 
      series: [
        {
          type: 'area',
          name: 'Total cases',
          data: [...total]
          // data: [1,2,4,6,2,3,4,7,9,6,10,8]
        },
        {
          type: 'area',
          name: 'Death cases',
          data: [...death], 
          // data: [7,1,3,0,6,8,9,1,2,7,8,5],
          color: 'rgba(0,148,16,0.2)'
          // marker:{ enabled: false}
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
