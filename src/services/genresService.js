import axiosService from "./axios.service";
import {genresUrls} from "../configs/genresUrls";

const genresService ={
    getGenres:()=>axiosService.get(genresUrls.genres).then(value => value.data).then(value => value.genres)
}

export default genresService