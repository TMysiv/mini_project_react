import axiosService from "./axios.service";
import {cardUrls} from "../configs/cardUrls";

const cardService = {
    getMovieDyId: (movieId) => axiosService.get(`${cardUrls.movieId}/${movieId}`).then(value => value.data),
    getActors: (movieId) => axiosService.get(`${cardUrls.actors}/${movieId}/credits?`).then(value => value.data)

}

export default cardService