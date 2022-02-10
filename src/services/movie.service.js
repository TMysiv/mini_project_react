import axiosService from "./axios.service";
import {movieUrls} from "../configs/movieUrls";

const movieService = {
    getPopular: (pageId) => axiosService.get(`${movieUrls.popular}${pageId}`).then(value => value.data).then(value => value.results),
    getMovie :(genresId,pageId)=>axiosService.get(`/discover/movie?with_genres=${genresId}&page=${pageId}`).then(value => value.data).then(value => value.results)
}

export default movieService