import { useState } from "react"

export default function Movie ({details}) {

    const [likes, setLikes] = useState(0);
 
    return (
        <section className="movie" >
           <h3>{details.title} </h3>
           <p>Rating: {details.rating}</p>
           <h3>Numbers of likes: {likes}</h3>
           <button onClick={()=> {setLikes(prevValue => prevValue + 1)}}>Like this movie</button>
        </section>
    )
}