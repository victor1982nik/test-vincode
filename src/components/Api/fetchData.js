import axios from 'axios';

axios.defaults.baseURL = 'https://vpic.nhtsa.dot.gov/api/';
// axios.defaults.params = {
//   api_key: '368aa8eefea213f2e59844c75600bcb3',
// };




export const fetchVariables = async () => {
  const response = await axios.get(`/vehicles/getvehiclevariablelist?format=json `);
  return response.data.Results;
};

export const fetchQuery = async query => {
  const response = await axios.get(`/vehicles/DecodeVinValues/${query}?format=json`);
  return response.data;
};

// export const fetchTrendingMovies = () => {
//   return axios.get(`/trending/all/day`);
// };

// export const fetchMovieById = id => {
//   return axios.get(`/movie/${id}`);
// };

// export const fetchMovieCastById = id => {
//   return axios.get(`/movie/${id}/credits`);
// };

// export const fetchMovieReviewsById = id => {
//   return axios.get(`/movie/${id}/reviews?`);
// };