import React from "react";
import TVShowList from "../components/tvShowList";
import SampleTVShow from "./sampleTVShowData";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

export default {
  title: "TV Shows/TVShowList",
  component: TVShowList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  const shows = [
    { ...SampleTVShow, id: 1 },
    { ...SampleTVShow, id: 2 },
    { ...SampleTVShow, id: 3 },
    { ...SampleTVShow, id: 4 },
    { ...SampleTVShow, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVShowList
        shows={shows}
      />
    </Grid>
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleTVShow, poster_path: undefined };
    const shows = [
        { ...sampleNoPoster, id: 1 },
        { ...SampleTVShow, id: 2 },
        { ...sampleNoPoster, id: 3 },
        { ...SampleTVShow, id: 4 },
      ];
      return (
        <Grid container spacing={5}>
          <TVShowList
            shows={shows}
          />
        </Grid>
      );
  };
Exceptional.storyName = "exception";