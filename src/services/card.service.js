import axiosService from "./axios.service";
import {cardUrls} from "../configs/cardUrls";

const cardService = {
    getMovieById: (movieId) => axiosService.get(`${cardUrls.movieId}/${movieId}`).then(value => value.data),
    getActorsById: (movieId) => axiosService.get(`${cardUrls.actors}/${movieId}/credits?`).then(value => value.data),
    getVideosById:(movieId)=>axiosService.get(`/movie/${movieId}/videos?append_to_response=videos`).then(value => value.data)
}

export default cardService