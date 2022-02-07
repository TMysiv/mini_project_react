import React, {useEffect, useState} from 'react';
import discoverService from "../../services/discover.service";

const MovieList = () => {

let [movies,setMovies] = useState([]);

    useEffect(()=>{
        discoverService.getAll().then(value => {
            console.log(value.results)
            setMovies(value.results)
        })
    },[])

    return (
        <div>
            {movies.map(movie=><MovieList key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MovieList;