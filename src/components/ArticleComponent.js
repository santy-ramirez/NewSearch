import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';


function ArticleComponent(props){
const {data} = props;

const [currentItems, setCurrentItems] = useState([]);
const [pageCount, setPageCount] = useState(0);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage= 6;

useEffect(() => {

const endOffset = itemOffset + itemsPerPage;
setCurrentItems(data.slice(itemOffset, endOffset));
setPageCount(Math.ceil(data.length / itemsPerPage));
}, [itemOffset, itemsPerPage,data]);


const handlePageClick = (event) => {
const newOffset = (event.selected * itemsPerPage) % data.length;
setItemOffset(newOffset);
};

return (
<>
  {
  currentItems.map(a => (

    <Container>
<Row >
                   
   <Card className='mx-auto my-4' style={{ width: '50rem' }} key={a.url}>
  
   <Col md="6">   <Card.Img variant="top" src={a.urlToImage} /> </Col>
      <Col md="12">     
       <Card.Body>
        <Card.Title>{a.title}</Card.Title>
        <Card.Text>
        {a.content} .
        </Card.Text>
       
      </Card.Body>
      </Col>

    </Card>

    </Row>

   
  </Container>

 




  ))
  }

  <ReactPaginate breakLabel="..." 
  nextLabel="next >" 
  onPageChange={handlePageClick} 
  pageRangeDisplayed={3}
    pageCount={pageCount} 
    previousLabel="< previous" 
    renderOnZeroPageCount={null} 
    containerClassName="pagination"
    pageLinkClassName="page-num" 
    previousLinkClassName="page-num"
    nextLinkClassName="page-num"
    activeLinkClassName="active" />
</>
);


}
export default ArticleComponent