import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
const [countryInput,setCountryInput]=useState('');
const [countryData,setCountryData]=useState([]);
console.log(countryInput);
useEffect(() => {
   try {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all").then((req)=>{
      const data=req.data;
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name.common);
        
        
      }
      
    }).catch((err)=>{
   console.log(err);
   
    })
    
   } catch (error) {
    console.log(error);
    
   }
}, [countryInput])

  return (
    <div>
     find countries {" "} 
     <input type="text" value={countryInput} onChange={(e)=>setCountryInput(e.target.value)}/>
     
    </div>
  )
}

export default App;