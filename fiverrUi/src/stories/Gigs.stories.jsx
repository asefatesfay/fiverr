import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Gigs from '../pages/gigs/Gigs';
import '../app.scss';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Gigs',
  component: Gigs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MemoryRouter><Gigs {...args} /></MemoryRouter>;

export const GigsPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GigsPage.args = {
  home: true,
  label: 'Home',
};

