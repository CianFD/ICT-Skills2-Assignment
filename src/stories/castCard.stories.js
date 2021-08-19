import React from "react";
import CastCard from "../components/castCard";
import SampleCast from "./sampleCastData";
import { MemoryRouter } from "react-router";

export default {
  title: "Movie/Movie Details/Cast Card",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      star={SampleCast}
    />
  );
};
Basic.storyName = "Default";