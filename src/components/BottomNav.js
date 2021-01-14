import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <BottomNavigationAction label="Previous" icon={<ArrowBackIosIcon />} />
      <a href={`users/91f5d0b2-28f3-4754-beaf-c13af3f12ff2/favoriteJobs`}>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </a>
      <BottomNavigationAction label="Previous" icon={<ArrowForwardIosIcon />} />
    </div>
  );
}
