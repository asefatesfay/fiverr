import React from "react";
import { MemoryRouter } from "react-router-dom";
import Gig from "../pages/gig/Gig";
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/Gig",
  component: Gig
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <Gig {...args} />
  </MemoryRouter>
);

export const GigPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GigPage.args = {
  gig: true,
  label: "Gig",
};
