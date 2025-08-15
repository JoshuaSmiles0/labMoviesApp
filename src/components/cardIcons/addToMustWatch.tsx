import { IconButton } from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import { BaseMovieProps } from "../../types/interfaces";

const AddToMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {


    return (

       < IconButton aria-label="Add To Must Watch">
        <PlaylistAdd color="primary" fontSize="large" />
        </IconButton>
    )
};

export default AddToMustWatchIcon;