import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading,setLoading]=useState(false);
  const[tours,setTour]=useState([]);

  const fetchTours=async()=>{

    setLoading(true)
    try {
      const response = await fetch(url);
      const mtours=await response.json();
      setTour(mtours)
      console.log(tours);
      setLoading(false)
      
    } catch (error) {
      
      console.log(error);
    }
      
    
    }

    // const fetchTours = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(url);
    //     const mtours = await response.json();
    //     setTour(mtours);
    //     setLoading(false); // Set loading to false after data is loaded
    //   } catch (error) {
    //     setLoading(false);
    //     console.log(error);
    //   }
    // };

useEffect(()=>{
fetchTours();
console.log(tours);
  
},[])

// const fetchData=()=>{



if(loading){
  return(
    <main>
    <Loading/>
  </main>
  )

}
  return <>

  <main>
    <Tours tours={tours}/>
  </main>
  
  </>
}

export default App
