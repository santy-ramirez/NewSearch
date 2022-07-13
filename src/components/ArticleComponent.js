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
        <Container>
          <Row className="justify-content-md-center" key={a.url}>
            <Col>
              <h1>{a.title}</h1>
              <p>{a.content}</p>
              <span> escrito por:{a.author} </span>
            </Col>
            <Col md="3">
              <img className="article__image" src={a.urlToImage} />
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
}

export default ArticleComponent;
