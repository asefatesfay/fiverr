import React from "react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Footer",
  component: Footer
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <MemoryRouter>
    <Footer {...args} />
  </MemoryRouter>
);

export const FooterComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FooterComp.args = {
  footer: true,
  label: "Footer",
};
