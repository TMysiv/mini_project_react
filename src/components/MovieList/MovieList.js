import React, {useEffect, useState} from 'react';
import discoverService from "../../services/discover.service";
import MovieListCard from "../MovieListCard/MovieListCard";

const MovieList = () => {

let [movies,setMovies] = useState([]);

    useEffect(()=>{
        discoverService.getAll().then(value => {
            setMovies(value.results)

        })
    },[])

    console.log(movies);
    return (
        <div>
            {movies.map(value => <MovieListCard key={value.id} movie={value}/>)}
        </div>
    );
};

export default MovieList;