import { useState, useEffect, useRef } from "react";
import SearchComponent from "./SearchComponent";
import HomeComponent from "./HomeComponent";
import LondingComponent from "./LondingComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import axios from "axios";
import api from "../api";
import ArticleComponent from "./PaginationComponent";
import HeaderComponent from "./HeaderComponent";

function MainComponent() {
  const list = [];
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const [resultado, setResultados] = useState(0);
  const [inputButoon, setInputButoon] = useState(true);
  const [Londing, setLonding] = useState(false);
  const [articulos, setArticulos] = useState(list);

  console.log("soy el search:" + search);
  console.log(resultado.totalResults);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLonding(true);
        const datas = await axios.get(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${api}&page=1&pageSize=60&language=es`
        );

        setArticulos(datas.data.articles);
        setResultados(datas.data);
      } catch (error) {
        console.error(error);
      }
      setLonding(false);
    };

    fetchData();
  }, [search]);

  const heandleChange = () => {
    let esa = inputRef.current.value;

    console.log(esa);

    if (esa.length > 2) {
      setInputButoon(false);
    } else {
      setInputButoon(true);
    }
  };
  const heandleSutmit = (e) => {
    e.preventDefault();

    setSearch(inputRef.current.value);
  };

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(inputRef.current.value);
    }
  };

  return (
    <>
      <HeaderComponent />

      <Container>
        <Row className="justify-content-md-center">
          <SearchComponent
            inputRef={inputRef}
            inputButoon={inputButoon}
            searchChange={heandleChange}
            searchSubmit={heandleSutmit}
            searchEnter={searchEnter}
          />
        </Row>

        <Row className="justify-content-md-center">
          <b>{!search ? <HomeComponent /> : ""} </b>
        </Row>
        <Col md="auto">
          <div>{Londing ? <LondingComponent /> : ""} </div>
        </Col>
        <Col md="auto">
          <p>se encontraron: {resultado.totalResults} Resultados</p>
          <ArticleComponent data={articulos} />
        </Col>
      </Container>
    </>
  );
}

export default MainComponent;
