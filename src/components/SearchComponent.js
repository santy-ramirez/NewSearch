function SearchComponent({
    search,
    searchChange,
    searchSubmit,
    inputRef,
    inputButoon,
    searchEnter
}) {
    return ( <
        div >
        <
        input type = "search"
        placeholder = "type search some max 3 work"
        className = "search"
        onKeyDown = {
            searchEnter
        }
        onChange = {
            searchChange
        }
        ref = {
            inputRef
        }
        /> <
        button onClick = {
            searchSubmit
        }
        disabled = {
            inputButoon
        }
        className = "search__button"
        type = "submit" >
        buscar < /button> <
        /div>
    )
}

export default SearchComponent;