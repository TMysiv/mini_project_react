import axiosService from "./axios.service";
import {movieUrls} from "../configs/movieUrls";

const genresService ={
    getGenres:()=>axiosService.get(movieUrls.genres).then(value => value.data).then(value => value.genres)
}

export default genresService