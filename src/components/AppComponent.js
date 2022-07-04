
import { useEffect,useState } from "react";
import SearchComponent from "./SearchComponent";
import axios from "axios";
import api from "../api"

function AppComponent(){
  
    const [search, setSearch] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const datas = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=`+api)
                console.log(datas.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])
   
           
        
        
    function heandleChange()  {
setSearch()
    }
    return(
        <>
        <SearchComponent/>
        <div onClick={heandleChange}> {search} </div>
        </>
    )
}

export default AppComponent;