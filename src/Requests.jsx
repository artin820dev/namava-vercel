const key = "4d78205350df3165c837243e12636438";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16&page=1`,
  requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=18&page=1`,
  requestWar: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10752&page=1`,
  requestFamily: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10751&page=1`,
  tvComedy: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=35&page=1`,
  tvNews: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10763&page=1`,
  tvTalk: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10767&page=1`,
  tvReality: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10764&page=1`,
  tvFantasy: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10765&page=1`,
  tvWestern: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=37&page=1`,
  tvPolitics: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=10768&page=1`,
  tvAnimation: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=16&page=1`,
};

export default requests;
