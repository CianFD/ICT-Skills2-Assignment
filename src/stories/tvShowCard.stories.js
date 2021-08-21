import React from "react";
import TVShowCard from "../components/tvShowCard";
import SampleTVShow from "./sampleTVShowData";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Shows/TVShowCard",
  component: TVShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TVShowCard
      show={SampleTVShow}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTVShow, poster_path: undefined };
  return (
    <TVShowCard
      show={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";
