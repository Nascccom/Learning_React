import React from 'react';
import {Story} from '@storybook/react';
import {ControlledRating, RatingPropsType} from './ControlledRaiting';

export default {
    title: 'Rating/ ControlledRating',
    component: ControlledRating,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<RatingPropsType> = (args) => <ControlledRating {...args} />;

export const RatingValue1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RatingValue1.args = {
    value: 1,
    onClick: () => {
    }
};

export const RatingValue2 = Template.bind({});
RatingValue2.args = {
    value: 2,
    onClick: () => {
    }
};

export const RatingValue3 = Template.bind({});
RatingValue3.args = {
    value: 3,
    onClick: () => {
    }
};

export const RatingValue4 = Template.bind({});
RatingValue4.args = {
    value: 4,
    onClick: () => {
    }
};
export const RatingValue5 = Template.bind({});
RatingValue5.args = {
    value: 5,
    onClick: () => {
    }
};
