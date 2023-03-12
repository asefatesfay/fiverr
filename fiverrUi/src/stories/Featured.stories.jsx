import React from "react";
import { MemoryRouter } from "react-router-dom";
import Featured from "../components/featured/Featured";
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Featured",
  component: Featured
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <Featured {...args} />
  </MemoryRouter>
);

export const FeaturedComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FeaturedComp.args = {
  featured: true,
  label: "Featured",
};
