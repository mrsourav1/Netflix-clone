import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({title, fetchUrl, isLargeRow =false}) => {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchUrl])

    const handelClick=()=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movies?.name || "")
            .then((url) =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error)=>console.log(error))
        }
    }

    const opts = {
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };

    // console.log(movies);

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(
                (movie) =>
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.poster_path)) && (
            <img onClick={()=>handelClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${base_url}${
                isLargeRow? movie.poster_path : movie.backdrop_path
            }`} 
            alt={movie.name} />
            )
        )}  
        </div> 
        {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts}/>}
    </div>
  );
}

export default Row