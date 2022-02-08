import axiosService from "./axios.service";
import {urls} from "../configs/urls";

const movieService = {
    getAllMovie: (pageId) => axiosService.get(`${urls.discover}${pageId}`).then(value => value.data).then(value => value.results),
    getPopular: (pageId) => axiosService.get(`${urls.popular}${pageId}`).then(value => value.data).then(value => value.results),
    getTop: (pageId) => axiosService.get(`${urls.top}${pageId}`).then(value => value.data).then(value => value.results),
    getComedies: (pageId) => axiosService.get(`${urls.comedies}${pageId}`).then(value => value.data).then(value => value.results),
    getDramas: (pageId) => axiosService.get(`${urls.dramas}${pageId}`).then(value => value.data).then(value => value.results),
    getAction: (pageId) => axiosService.get(`${urls.actions}${pageId}`).then(value => value.data).then(value => value.results),
    getAdventure: (pageId) => axiosService.get(`${urls.adventures}${pageId}`).then(value => value.data).then(value => value.results),
    getAnimations: (pageId) => axiosService.get(`${urls.animations}${pageId}`).then(value => value.data).then(value => value.results),
    getFantasy: (pageId) => axiosService.get(`${urls.fantasy}${pageId}`).then(value => value.data).then(value => value.results),
    getFamily: (pageId) => axiosService.get(`${urls.family}${pageId}`).then(value => value.data).then(value => value.results),

}

export default movieService