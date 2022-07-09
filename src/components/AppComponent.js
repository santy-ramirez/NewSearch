
import { useState,useEffect, useRef } from "react";
import SearchComponent from "./SearchComponent";
import HomeComponent from "./HomeComponent";






import axios from "axios";
import api from "../api"
import ArticleComponent from "./ArticleComponent";

function AppComponent(){
  const list = []
    const [search, setSearch] = useState("");
    const inputRef  = useRef(null);
    const [inputButoon, setInputButoon]  = useState(true);
    const [Londing, setLonding] = useState(false);
    const [articulos, setArticulos] = useState(list);




    console.log("soy el search:"+search)
   
    useEffect(() => {
        const fetchData = async () => {
            try {
              setLonding(true)
                const datas = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api}&page=1&pageSize=30&language=es`)
                setArticulos(datas.data.articles)
            } catch (error) {
                console.error(error)
            }
            setLonding(false)

        }

        fetchData()
    }, [search]);
   
      const heandleChange = (e)=> {
     let esa = inputRef.current.value

     console.log(esa)

     if(esa.length > 2){
        setInputButoon(false);
     }else{
        setInputButoon(true)
     }
      }     
      const  heandleSutmit = (e)=> {
      
        e.preventDefault()
        

       
setSearch(inputRef.current.value)



       
      }

      const searchEnter = (e) =>{
        if (e.key === 'Enter') {
          setSearch(inputRef.current.value)  
        }
      }
        
 
    return(
        <>
      
        <div>
        
        <SearchComponent
        search ={search}
        inputRef={inputRef}
        inputButoon = {inputButoon }
        searchChange = {heandleChange}
        searchSubmit = {heandleSutmit}
        searchEnter = {searchEnter}
        />
     <b>{ !search ? <HomeComponent/> : "" } </b> 
     <h1>{ Londing? "cargando": "" } </h1> 
    
       

      <ArticleComponent data={articulos} />
      </div> 

        </>
    )
}






export default AppComponent;