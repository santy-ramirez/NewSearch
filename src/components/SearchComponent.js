


function SearchComponent ({search,  searchChange,searchSubmit,inputRef,inputButoon }){
    return(
<div>
    <input
    type="search"
    placeholder="type search some max 3 work"
    className="search"
   
    onChange={searchChange}
    ref={inputRef}
    />
    <button 
    onClick={searchSubmit}
    disabled={inputButoon}
    type="submit"
    >buscar</button>
</div>
)
}

export default SearchComponent;