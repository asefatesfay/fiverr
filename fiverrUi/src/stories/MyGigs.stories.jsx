import React from "react";
import { MemoryRouter } from "react-router-dom";
import MyGigs from "../pages/myGigs/MyGigs";
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/MyGigs",
  component: MyGigs
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <MyGigs {...args} />
  </MemoryRouter>
);

export const MyGigsPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MyGigsPage.args = {
  gig: true,
  label: "My Gigs",
};
