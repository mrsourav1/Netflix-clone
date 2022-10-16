import axios from './axios';
import React, { useEffect, useState } from 'react';
import "./Banner.css";
import requests from "./Requests"

const Banner = () => {
    const [movie,SetMovie] = useState();
    useEffect(()=>{
         async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            SetMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length-1)
                ]
            );
            return requests;
         }
         fetchData();
    },[]);

    console.log(movie);


    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }

  return (
    <header className='banner'style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.
        backdrop_path}")`,
    }}>
        <div className="banner_contents">
            <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className="banner--fadebutton" />
    </header>
  )
}

export default Banner