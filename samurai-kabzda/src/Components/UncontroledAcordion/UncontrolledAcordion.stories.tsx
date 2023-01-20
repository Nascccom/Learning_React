import {Story} from '@storybook/react';
import React from 'react';
import {UncontrolledAccordion, UncontrolledAccordionPropsType} from './UncontrolledAcordion';

export default {
    title: 'Accordions/Uncontrolled Accordion',
    component: UncontrolledAccordion,
}


const Template: Story<UncontrolledAccordionPropsType> = (args) =>
  <UncontrolledAccordion {...args}/>

export const UncontrolledAccordion1 = Template.bind({})
UncontrolledAccordion1.args ={
    titleValue: 'Menu'
}
