import React, { useEffect } from 'react'

const Store = () => {
  const isLoading = true;

let API = "http://hn.algolia.com/api/v1/search?query=html";
   const fetchApiData = async (url)=>{
    try {
      const response = await fetch(url);
      const data = await response . json();
      console.log(data)
      
    } catch (error) {
      console.log(error);
      
    }
       
   }

      useEffect(()=>{

        fetchApiData(API);


      },[])
      if(isLoading)
        {
          return<>

           <h2>Loading ......</h2>
          </>
        }

  return (
    <>
      <h2>tech post</h2>

    </>
  )
}

export default Store
