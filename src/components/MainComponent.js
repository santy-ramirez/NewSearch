import { useState, useEffect, useRef } from "react";
import SearchComponent from "./SearchComponent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import LondingComponent from "./LondingComponent";

import axios from "axios";
//import api from "../api";
import ArticleComponent from "./PaginationComponent";
import HeaderComponent from "./HeaderComponent";
const api = process.env.REACT_APP_NEW_API_KEY;

function MainComponent() {
  const list = [];
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const [resultado, setResultados] = useState(0);
  const [inputButoon, setInputButoon] = useState(true);
  const [Londing, setLonding] = useState(false);
  const [articulos, setArticulos] = useState(list);
  const [error, setError] = useState("");
  console.log(api);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLonding(true);
        const datas = await axios.get(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=${api}&page=1&pageSize=60&language=es`
        );
        let stados = datas.status;
        console.log(stados);

        setArticulos(datas.data.articles);
        setResultados(datas.data);

        setLonding(false);
      } catch (error) {
        // eslint-disable-next-line no-constant-condition
        if (error.response.status === 400) {
          setError(
            "tipea algo correcto,una palabra mayor a 3 caracteres por favor"
          );
        }
        // eslint-disable-next-line no-constant-condition
        if (error.response.status === 426) {
          setError("ha ocurrido un error comunicate con soporte");
        }
        if (error.response.status === 429) {
          setError(
            "ya no puedes hacer peticiones con el plan free,lo sentimos!!"
          );
        } else {
          setError("");
        }
      }
    };

    fetchData();
  }, [search, error]);

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
    setLonding(true);
    setSearch(inputRef.current.value);
    setLonding(false);
  };

  const searchEnter = (e) => {
    const conter = e.target.value;
    if (conter.length > 3 && e.key === "Enter") {
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
          <div>{!Londing ? <LondingComponent /> : ""} </div>
          <div> {error ? error : ""} </div>
        </Row>
        <Col md="auto"></Col>
        <Col md="auto">
          <b>
            {resultado.totalResults
              ? "los resultado encontrados son:" + resultado.totalResults
              : ""}
          </b>
          <ArticleComponent data={articulos} />
        </Col>
      </Container>
    </>
  );
}

export default MainComponent;
