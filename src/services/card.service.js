import axiosService from "./axios.service";
import {cardUrls} from "../configs/cardUrls";

const cardService = {
    getMovieById: (movieId) => axiosService.get(`${cardUrls.movieId}/${movieId}`).then(value => value.data),
    getActorsById: (movieId) => axiosService.get(`${cardUrls.actors}/${movieId}/credits?`).then(value => value.data)

}

export default cardService