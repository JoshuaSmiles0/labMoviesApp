import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps} from "../types/interfaces";
import { getUpcoming } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch';
import { DiscoverMovies } from "../types/interfaces";


// Implemented Caching excercise Three as part of exercise One

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
          return <AddToMustWatchIcon {...movie} />
        }}
    />
  );
};
export default UpcomingPage;
