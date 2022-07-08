
import { useEffect,useState, useRef } from "react";
import SearchComponent from "./SearchComponent";

import ArticleComponent from "./ArticleComponent";

import axios from "axios";
import api from "../api"

function AppComponent(){
  
    const [search, setSearch] = useState("");
    const inputRef  = useRef(null);
    const [inputButoon, setInputButoon]  = useState(true);
    const [articulos, setArticulos] = useState([]);



    console.log("soy el search:"+search)
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const datas = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${api}&page=1&pageSize=20&language=es`)
                setArticulos(datas.data.articles)
            } catch (error) {
                console.error(error)
            }
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

        console.log("soy set sutmit:"+inputRef.current.value)
setSearch(inputRef.current.value)
       
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
        />
     <b>{ !search ? "Escibe alguna nocticia que quieras buscar": "" } </b> 
       <ArticleComponent
       articles={articulos}
       ></ArticleComponent>
        </div> 

        


        </>
    )
}

export default AppComponent;