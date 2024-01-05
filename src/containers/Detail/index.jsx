import React, { useEffect, useState } from "react";

import { Container, Background } from "./styles";
import { getImages } from "../../utils/getImages";
import { useParams } from "react-router-dom";

import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../service/getData";

function Detalhes() {

    const { id } = useParams()
    console.log(id)

    const [movie, setMovie] = useState()
    const [video, setVideo] = useState()
    const [credits, setCredits] = useState()
    const [similar, setSimilar] = useState()


    useEffect(() => {
        async function getAllData() {
            try {
                const [movies, videos, credit, similars] = await Promise.all([
                    getMovieById(id),
                    getMovieVideos(id),
                    getMovieCredits(id),
                    getMovieSimilar(id),
                ]);
    
                setMovie(movies);
                setVideo(videos);
                setCredits(credit);
                setSimilar(similars);
    
                // Move console.logs here to see the updated state values
                console.log(movies);
                console.log(video);
                console.log(similar);
                console.log(credit);
            } catch (err) {
                console.error(err);
            }
        }
    
        getAllData();
    }, [id]); // Add 'id' as a dependency
    
    // Ensure the rendering part remains as you need it...
    
    return (
        <>

            {movie &&

                (
                    <>
                        <Background image={getImages(movie.backdrop_path)} />
                        <Container>
                            <h1>ola</h1>
                        </Container>
                    </>
                )}
        </>
    )
}

export default Detalhes