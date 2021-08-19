import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import img from '../../images/film-poster-placeholder.png';

const useStyles = makeStyles({
    card: { maxWidth: 345 },
  });
  
  export default function CastCard({ c }) {
      const classes = useStyles();
      const [stars, setStars] = useState([]);
      useEffect(() => {
            getMovieCast(movie.id).then((castAndCrew) => {
            setStars(castAndCrew.cast);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },
    []);
    console.log(stars)

    let castCards = stars.map((s) => (
      <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Cast key={s.id} star={s} />
      </Grid>
    ));
    return (
      <>
      {stars.length > 0 ?
         castCards :
         <p>Waiting for cast details</p>
         }
      </>
    );
  }