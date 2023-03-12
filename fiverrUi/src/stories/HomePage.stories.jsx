import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Home',
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MemoryRouter><Home {...args} /></MemoryRouter>;

export const HomePage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HomePage.args = {
  home: true,
  label: 'Home',
};

