const baseURL = 'https://api.themoviedb.org/3';

export default baseURL;

export const urls = {
    discover: '/discover/movie?page=',
    popular: '/movie/now_playing?page=',
    top: '/discover/movie?with_genres=10770&page=',
    comedies: '/discover/movie?with_genres=35&page=',
    dramas: '/discover/movie?with_genres=18&page=',
    actions: '/discover/movie?with_genres=28&page=',
    adventures: '/discover/movie?with_genres=12&page=',
    animations: '/discover/movie?with_genres=16&page=',
    fantasy: '/discover/movie?with_genres=14&page=',
    family: '/discover/movie?with_genres=10751&page=',
    images: 'https://image.tmdb.org/t/p/w200/'
}
