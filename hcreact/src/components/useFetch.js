import {useState, useEffect} from 'react';
require('dotenv').config()

const useFetch = (url) => {

  let [total, setTotal] = useState([]);
  let [death, setDeath] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const fetchData = async()=> {
    try{
      let response = await fetch(url, {  // Making API call
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY, //Remember to hide API key
          "x-rapidapi-host": "coronavirus-map.p.rapidapi.com"
        }
      }) 
      
      if(response.status >= 200 || response.staus <=299){  // Treating Data for Bar, Area and Line Chart, 
        response = await response.json()
         let data = response["data"] 
         let dataArray =[]
         let totalcases =[]
         let deathcases =[]
         dataArray = Object.keys(data)

          for(let i=0; i < dataArray.length; i++ ){ 
            if(data.hasOwnProperty(dataArray[i])){
                totalcases.unshift( Number(data[dataArray[i]]["total_cases"]) ) 
                deathcases.unshift( Number(data[dataArray[i]]["total_cases"]) ) 
            }
          }

         setTotal(totalcases)
         setDeath(deathcases)
         setIsLoading(false)

     }else{
        setIsLoading(true)
       throw new Error("Error Bad request, Please try again")
     }
    }catch(error){
      console.error(error)
    }

    
  }

  useEffect(() => {
    fetchData()
  },[url])


  return {isLoading, death, total}
}
export default useFetch; 