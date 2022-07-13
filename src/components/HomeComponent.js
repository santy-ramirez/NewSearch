import {React} from "react";
import home  from "./home.jpg";

function HomeComponent(){
    
    return(

        <div>
            <img width="300px" className="home__image" src={home}/>
        </div>
    )
}

export default HomeComponent;