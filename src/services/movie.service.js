import axiosService from "./axios.service";
import {movieUrls} from "../configs/movieUrls";

const movieService = {
    getAllMovie: (pageId) => axiosService.get(`${movieUrls.discover}${pageId}`).then(value => value.data).then(value => value.results),
    getPopular: (pageId) => axiosService.get(`${movieUrls.popular}${pageId}`).then(value => value.data).then(value => value.results),
    getTop: (pageId) => axiosService.get(`${movieUrls.top}${pageId}`).then(value => value.data).then(value => value.results),
    getComedies: (pageId) => axiosService.get(`${movieUrls.comedies}${pageId}`).then(value => value.data).then(value => value.results),
    getDramas: (pageId) => axiosService.get(`${movieUrls.dramas}${pageId}`).then(value => value.data).then(value => value.results),
    getAction: (pageId) => axiosService.get(`${movieUrls.actions}${pageId}`).then(value => value.data).then(value => value.results),
    getAdventure: (pageId) => axiosService.get(`${movieUrls.adventures}${pageId}`).then(value => value.data).then(value => value.results),
    getAnimations: (pageId) => axiosService.get(`${movieUrls.animations}${pageId}`).then(value => value.data).then(value => value.results),
    getFantasy: (pageId) => axiosService.get(`${movieUrls.fantasy}${pageId}`).then(value => value.data).then(value => value.results),
    getFamily: (pageId) => axiosService.get(`${movieUrls.family}${pageId}`).then(value => value.data).then(value => value.results),

}

export default movieService