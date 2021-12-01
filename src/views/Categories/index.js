import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
import api from "../../services/api"
import Loading from "../../assets/loading.gif"
import {Button,Image} from '@chakra-ui/react'
import './styles.css'



function Categories() {
  const [response,setResponse]=useState({})
  const [isLoading,setIsLoading]=useState(false)
  const {category} =useParams()

  const  getJoke = async ()=>{
    setIsLoading(true)
     try {
      const {data} = await api.get(`random?category=${category}`)
      setResponse(data)
     } catch (error) {
      console.log(error)
     }finally{
        setIsLoading(false)
  
     }
  
  }
  useEffect(()=>{
    getJoke()
  },[category])

  if(isLoading){
    return(
      <div className="loader">
        <Image  src={Loading} alt="loading gif" />
      </div>
    )
    }

  return(
  <div className="home_container">
      <h1>This Joke is about: {category}</h1>
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

export default Categories;