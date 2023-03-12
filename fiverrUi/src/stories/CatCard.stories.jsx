import React from "react";
import { MemoryRouter } from "react-router-dom";
import CatCard from "../components/catCard/CatCard";
import "../app.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/CatCard",
  component: CatCard,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <CatCard {...args} />
  </MemoryRouter>
);

export const CatCardComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CatCardComp.args = {
  item: {
    id: 1,
    title: "AI Artists",
    desc: "Add talent to AI",
    img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
};
