import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps} from "../types/interfaces";
import { getUpcoming } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { DiscoverMovies } from "../types/interfaces";


const UpcomingPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("upcoming", getUpcoming);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

   const movies = data ? data.results : [];

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
       action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />
        }}
    />
  );
};
export default UpcomingPage;
