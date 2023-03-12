import React from "react";
import { MemoryRouter } from "react-router-dom";
import ProjectCard from "../components/projectCard/ProjectCard";
import "../app.scss";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
};

const Template = (args) => (
  <MemoryRouter>
    <ProjectCard {...args} />
  </MemoryRouter>
);

export const ProjectCardComp = Template.bind({});
ProjectCardComp.args = {
  item: {
    id: 1,
    img: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Web and Mobile Design",
    username: "Anna Bell",
  },
};
