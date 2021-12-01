import React,{useState,useEffect} from 'react';
import api from "../../services/api"
import Loading from "../../assets/loading.gif"
import './styles.css'
import {Button,Image} from '@chakra-ui/react'


function Home() {
const [response,setResponse]=useState({})
const [isLoading,setIsLoading]=useState(false)

 const  getJoke = async ()=>{
  setIsLoading(true)
   try {
    const {data} = await api.get("random")
    setResponse(data)
   } catch (error) {
    console.log(error)
   }finally{
      setIsLoading(false)

   }

}
useEffect(()=>{
  getJoke()
},[])

if(isLoading){
return(
  <div className="loader">
    <Image  src={Loading} alt="loading gif" />
  </div>
)
}

  return(
    <div className="home_container">
      <div className="joke_container">
        <Image src={response?.icon_url} alt={response?.value}/>
        <h1>
          {response?.value}
        </h1>
      </div>
      <Button onClick={getJoke}>
        i want a new joke
      </Button>
    </div>
  );
}

export default Home;