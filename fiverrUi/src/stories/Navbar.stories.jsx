import React from "react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Navbar",
  component: Navbar
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <Navbar {...args} />
  </MemoryRouter>
);

export const NavbarComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavbarComp.args = {
  navbar: true,
  label: "Navbar",
};
