import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

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

  <article className='article__container' key={a.url}>
    <div>
      <h2 className='article__title'> {a.title} </h2>


      <p className='article__parrafo'> {a.content} </p>
      <span className='article__author'>Escrito por: {a.author} </span>
    </div>
    <img className='article__image' src={a.urlToImage} />
  </article>




  ))
  }

  <ReactPaginate breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageRangeDisplayed={3}
    pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null} containerClassName="pagination"
    pageLinkClassName="page-num" previousLinkClassName="page-num" nextLinkClassName="page-num"
    activeLinkClassName="active" />
</>
);


}
export default ArticleComponent