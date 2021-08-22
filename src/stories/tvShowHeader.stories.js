import React from "react";
import TVShowHeader from "../components/headerTVShow";
import SampleTVShow from "./sampleTVShowData";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Show Details Page/TV Show Header",
  component: TVShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVShowHeader show={SampleTVShow} />;

Basic.storyName = "Default";