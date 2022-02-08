import axiosService from "./axios.service";
import {cardUrls} from "../configs/cardUrls";

const cardService = {
    getMovieDyId: (id) => axiosService.get(`${cardUrls.movieId}/${id}`).then(value => value.data)
}

export default cardService