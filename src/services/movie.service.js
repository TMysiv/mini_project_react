import axiosService from "./axios.service";
import {urls} from "../configs/urls";

const movieService = {
    getAll: (pageId) => axiosService.get(`${urls.discover}${pageId}`).then(value => value.data).then(value => value.results)
}


export default movieService