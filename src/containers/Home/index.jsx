import React, { useState, useEffect } from "react"
import { getImages } from "../../utils/getImages"

import { useNavigate } from "react-router-dom"

import Slider from "../../components/Slider"

import { Container, Info, Poster, ContainerItens } from "./styles"

import Button from "../../components/Button"
import Modal from "../../components/Modal"
import { getMovies, getTopMovies, getTopPersons, getTopSeries } from "../../service/getData"


function Home() {

    const navigate = useNavigate()

    const [movies, setMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topPersons, setTopPersons] = useState()
    const [topTv, setTopTv] = useState()
    const [showModal, setShowModal] = useState(false)




    useEffect(() => {
        async function getAllData() {
console.time('time')
                    Promise.all([
                         getMovies(),
                         getTopMovies(),
                         getTopSeries(),
                         getTopPersons(),
                         setTopTv()
                    ]).then(([movie, topmovie, serie,person,tv]) =>{
                        setMovies(movie)
                        setTopMovies(topmovie)
                        setTopSeries(serie)
                        setTopPersons(person)
                        setTopTv(tv)
                    }).catch(err => console.log(err))

                    console.timeEnd('time')

        }



        getAllData()
    }, [])//coloca a condição


    return (
        <>
            {
                movies && (
                    <Container img={getImages(movies.backdrop_path)}>
                      { showModal &&  <Modal movieId={movies.id}  setShowModal={setShowModal} />}
                        <ContainerItens>
                            <Info>
                                <h1>{movies.title}</h1>
                                <p>{movies.overview}</p>
                                <div>
                                    <Button red={true} onClick={() => navigate(`/details/${movies.id}`)}>Assita Agora</Button>
                                    <Button onClick={() => setShowModal(true)}>Assita o Trailer</Button>
                                </div>
                            </Info>
                            <Poster>
                                <img src={getImages(movies.poster_path)} alt="capa do filme" />
                            </Poster>
                        </ContainerItens>
                    </Container>
                )}


              {topMovies &&  <Slider info={topMovies} title={'Top filmes'}/> } 
              {topSeries &&  <Slider info={topSeries} title={'Top Series'}/>}
              {topPersons &&  <Slider info={topPersons} title={'Top Artistas'}/>}
              {topTv &&  <Slider info={topTv} title={'Top Series Tv'}/>}



        </>

    )
}

export default Home