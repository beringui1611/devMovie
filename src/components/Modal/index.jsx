import React, { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getMovieVideos } from "../../service/getData";

function Modal({movieId, setShowModal}){

    const [movies, setMovies] = useState()
  
useEffect(() =>{
async function getMovies(){
    setMovies(await getMovieVideos(movieId))

}
getMovies()
}, [])
   

    return (
        <Background onClick={() => setShowModal(false)}>
            {
                movies &&
                <Container>
                <iframe src={`https://www.youtube.com/embed/${movies.key}`} title="Youtube video player" height="500px" width="100%">
      
                </iframe>
              </Container>
            }
        
        </Background>
 
    )
}

export default Modal