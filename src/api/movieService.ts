import { API_KEY, LANGUAGE } from './constants';
import { MovieResponse } from './movies';
import tmdb from './themoviedb';

export const getPopularMovies = async (): Promise<MovieResponse> => {
  const response = await tmdb.get(`/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: LANGUAGE,
    },
  });
  return response.data;
};
