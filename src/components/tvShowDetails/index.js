import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const TVShowDetails = ({ show }) => {
    const classes = useStyles();

    return (
        <>
        <Typography variant="h5" component="h3">
            Overview
        </Typography>

        <Typography variant="h6" component="p">
            {show.overview}
        </Typography>

        <Paper component="ul" className={classes.root}>
            <li>
            <Chip label="Genres" className={classes.chip} color="primary" />
            </li>
            {show.genres.map((g) => (
            <li key={g.name}>
                <Chip label={g.name} className={classes.chip} />
            </li>
            ))}
        </Paper>
        <Paper component="ul" className={classes.root}>
            <Chip icon={<AccessTimeIcon />} label={`${show.episode_run_time} min.`} />
            <Chip
            icon={<StarRate />}
            label={`${show.vote_average} (${show.vote_count}`}
            />
            <Chip label={`First Aired: ${show.first_air_date}`} />
        </Paper>
        <Paper component="ul" className={classes.root}>
            <li>
            <Chip label="Production Companies" className={classes.chip} color="primary" />
            </li>
            {show.production_companies.map((g) => (
            <li key={g.name}>
                <Chip label={g.name} className={classes.chip} />
            </li>
            ))}
        </Paper>
        <Paper component="ul" className={classes.root}>
            <li>
            <Chip label="Networks" className={classes.chip} color="primary" />
            </li>
            {show.networks.map((g) => (
            <li key={g.name}>
                <Chip label={g.name} className={classes.chip} />
            </li>
            ))}
        </Paper>
        <Paper component="ul" className={classes.root}>
            <li>
            <Chip label="Seasons" className={classes.chip} color="primary" />
            </li>
            {show.seasons.map((g) => (
            <li key={g.name}>
                <Chip label={g.name} className={classes.chip} />
            </li>
            ))}
        </Paper>
    </>
  );
};

export default  TVShowDetails ;