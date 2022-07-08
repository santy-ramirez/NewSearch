function Article({articles}){
    return(
        <ul>
       {
        articles.map(a => (

            <article key={a.url} >
                <h2> {a.title} </h2>
             
                
                <p> {a.content} </p>
                <span> {a.author} </span>
            </article>
            
        ))
       }
        </ul>
    )
}
export default Article;