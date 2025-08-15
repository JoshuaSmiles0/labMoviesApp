import { IconButton } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { BaseMovieProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";
import { MouseEvent, useContext } from "react";

const AddToMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {

    const context = useContext(MoviesContext);

     const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        context.addToMustWatch(movie);
        console.log(context.mustWatch);
      };


    return (

       < IconButton aria-label="Add To Must Watch" onClick={onUserSelect}>
        <PlaylistAdd color="primary" fontSize="large" />
        </IconButton>
    )
};

export default AddToMustWatchIcon;