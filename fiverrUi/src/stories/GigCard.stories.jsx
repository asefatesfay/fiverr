import React from "react";
import { MemoryRouter } from "react-router-dom";
import GigCard from "../components/gigCard/GigCard";
import "../app.scss";

export default {
  title: "Components/GigCard",
  component: GigCard,
};

const Template = (args) => (
  <MemoryRouter>
    <GigCard {...args} />
  </MemoryRouter>
);

export const GigCardComp = Template.bind({});
GigCardComp.args = {
  item: {
    id: 2,
      img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
      pp: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "I will create ultra high quality character art with ai",
      price: 79,
      star: 5,
      username: "Lannie Coleman",
  },
};
