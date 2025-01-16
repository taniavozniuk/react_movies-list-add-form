import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

export const App = () => {
  function getImageById(imdbID: string): string | null {
    return moviesFromServer.find(movie => movie.imdbId === imdbID) || null;
  }

  const initialPosts: Post[] = moviesFromServer.map(movie => ({
    ...movie,
    imdb: getImageById(movie.imdbId),
  }));

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={initialPosts} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={movie => {}} />
      </div>
    </div>
  );
};
