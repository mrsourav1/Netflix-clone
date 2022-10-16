const API_KEY = "877d4c8b2252522e63151ce58369d705";

const requests = {
    fetchTrnding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,

};

export default requests;


// https://image.tmdb.org/t/p/original/discover/tv?api_key=877d4c8b2252522e63151ce58369d705&with_genres=99