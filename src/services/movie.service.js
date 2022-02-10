import axiosService from "./axios.service";
import {movieUrls} from "../configs/movieUrls";

const movieService = {
    getPopular: (pageId) => axiosService.get(`${movieUrls.popular}${pageId}`).then(value => value.data).then(value => value),
    getMovie :(genresId,pageId)=>axiosService.get(`${movieUrls.movie}${genresId}&page=${pageId}`).then(value => value.data).then(value => value)
}

export default movieService