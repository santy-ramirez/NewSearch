
import { useState,useEffect, useRef } from "react";
import SearchComponent from "./SearchComponent";
import HomeComponent from "./HomeComponent";
import LondingComponent from "./LondingComponent"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




import axios from "axios";
import api from "../api"
import ArticleComponent from "./ArticleComponent";
import HeaderComponent from "./HeaderComponent";

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
      
       
        
       
     
     

    
    
       

      <HeaderComponent/>
     

      <Container>
    
      <Row className="justify-content-center">
        <Col md="auto">
        <SearchComponent
        search ={search}
        inputRef={inputRef}
        inputButoon = {inputButoon }
        searchChange = {heandleChange}
        searchSubmit = {heandleSutmit}
        searchEnter = {searchEnter}
        />
        </Col>
        <Col md="auto">

        <b>{ !search ? <HomeComponent/> : "" } </b>
        </Col>
        <Col  md="auto">
        <div>{ Londing? <LondingComponent/>: "" } </div> 
        </Col>
        <Col  md="auto">
        <ArticleComponent data={articulos} />
        </Col>
      </Row>
      
    </Container>

        </>
    )
}






export default AppComponent;