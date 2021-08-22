import React from "react";
import TVShowDetails from "../components/tvShowDetails";
import SampleTVShow from "./sampleTVShowData";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Show Details Page/TV Show Details",
  component: TVShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVShowDetails show={SampleTVShow} />;

Basic.storyName = "Default";