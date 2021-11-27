import React,{useState,useEffect} from 'react';
import api from "../../services/api"
import Loading from "../../assets/loading.gif"
import './styles.css'



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
     setTimeout(() => {
      setIsLoading(false)
     }, 1500);
   }

}
useEffect(()=>{
  getJoke()
},[])

if(isLoading){
return(
  <div className="loader">
    <img src={Loading} alt="loging gif" />
  </div>
)
}

  return(
    <div className="home_container">
      <div className="joke_container">
        <img src={response?.icon_url} alt={response?.value}/>
        <h1>
          {response?.value}
        </h1>
      </div>
      <button onClick={getJoke}>
        i want a new joke
      </button>
    </div>
  );
}

export default Home;