import {ControlledAccordion, ControlledAccordionPropsType} from './ControlledAcordion'
import React from 'react';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordions/Controlled Accordion',
    component: ControlledAccordion
}
const callback = action('accordion mode change event fired')
const onClickCallback = action('click')

const Template: Story<ControlledAccordionPropsType> = (args) => <ControlledAccordion {...args} />

const callBacksArgs = {
    onClick: onClickCallback,
    onChange: callback,
    items: [
        {title: 'Nastya', value: 1},
        {title: 'Nasty', value: 2},
        {title: 'Nast', value: 3},
        {title: 'Nas', value: 4}
    ],
}
export const MenuCollapsed = Template.bind({})
MenuCollapsed.args = {
    ...callBacksArgs,
    titleValue: 'Menu',
    collapsed: true,
}

export const UsersUnCollapsed = Template.bind({})
UsersUnCollapsed.args = {
    ...callBacksArgs,
    titleValue: 'Users',
    collapsed: false,
}




