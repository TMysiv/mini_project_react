const baseURL = 'https://api.themoviedb.org/3';

export default baseURL;

export const movieUrls = {
    popular: '/movie/now_playing?page=',
    top: '/discover/movie?with_genres=10770&page=',
    genres:'/genre/movie/list?',
}
