import React from 'react';
import {UncontrolledRating, UncontrolledRatingProps} from './UncontrolledRaiting';
import {Story} from '@storybook/react';

export default {
    title: 'Rating/ UncontrolledRating',
    component: UncontrolledRating
}

 const Template: Story<UncontrolledRatingProps> =(args) => <UncontrolledRating {...args}/>

export const  UncontrolledRating1 = Template.bind({})
UncontrolledRating1.args = {
    defaultValue: 5,
}