import React from "react";
import { MemoryRouter } from "react-router-dom";
import CatCard from "../components/catCard/CatCard";
import Slide from "../components/slide/Slide";
import { cards } from "../../data";
import "../app.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Slide",
  component: Slide,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <Slide {...args}>
      {cards.map((card) => (
        <CatCard item={card} key={card.id} />
      ))}
    </Slide>
  </MemoryRouter>
);

export const SlidComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SlidComp.args = {
  slidesToShow: 5,
  arrowsScroll: 5,
};
