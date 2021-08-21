import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterTVShowsCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TVShowList from "../tvShowList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function TVShowListPageTemplate({ shows, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");

  let displayedTVShows = shows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <TVShowList action={action} shows={displayedTVShows}></TVShowList>
      </Grid>
    </Grid>
  );
}
export default TVShowListPageTemplate;