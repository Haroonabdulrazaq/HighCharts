import {useState, useEffect} from 'react';

const useFetch = (url) => {

  let [data, setData] = useState([]);
  let [isLoading, setIsLOading] = useState(true);

  const fetchData = async()=> {
    let response = await fetch(url, {  // Making API call
      "method": "GET",
      "headers": {
        "x-rapidapi-key": '5fbec538d7msh9e5378e39f8e570p164c8ajsnf8c7f46f4df4', //Remember to hide API key
        "x-rapidapi-host": "coronavirus-map.p.rapidapi.com"
      }
    })
    let data = await response.json()

    setData(data)
    setIsLOading(false)
  }
  useEffect(() => {
    fetchData()
  })


  return {isLoading, data}
 
}

export default useFetch; 