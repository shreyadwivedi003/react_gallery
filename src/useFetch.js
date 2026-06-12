import React, { useState,useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {
  const [userData, setuserData] = useState([]);
  const [loading,setLoading]=useState(true);
  const [error, seterror] = useState(null)
  
  useEffect(()=>{
    const getData= async ()=>{
        setLoading(true);
        seterror(null)
        try{
            const response=await axios.get(url);
            setuserData(response.data);
        }
        catch(error){
            console.error("Error in fetching data",error);
            seterror(error.message)
        }
        finally{
            setLoading(false);
        }
    };
    getData();
  },[url]);
  return{userData,loading, error };
};

export default useFetch