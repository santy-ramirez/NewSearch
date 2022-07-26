/* eslint-disable react/jsx-key */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ArticleComponent(props) {
  const { data } = props;

  return (
    <>
      {data.map((a) => (
        <a className="article__link" href={a.url}>
          <Container>
            <Row
              className="justify-content-md-center article__container"
              key={a.url}
            >
              <Col lg="8">
                <h1 className="article__title">{a.title}</h1>
                <p className="article__parrafo">{a.content}</p>
                <span> escrito por:{a.author} </span>
              </Col>
              <Col lg="4">
                <img className="article__image" src={a.urlToImage} />
              </Col>
            </Row>
          </Container>
        </a>
      ))}
    </>
  );
}

export default ArticleComponent;
