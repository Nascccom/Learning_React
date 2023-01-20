import {SelectPropsType, SelectTeam} from './Select';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import React from 'react';

export default {
    title: 'Select / Select',
    component: SelectTeam
}

const Template: Story<SelectPropsType> = (args) => <SelectTeam {...args} />
const onChangeValue = action('click')
export const OneSelect = Template.bind({})
OneSelect.args = {
    value: '1',
    items: [
        {title: 'Twenty', value: '1'},
        {title: 'Twenty one', value: '2'},
        {title: 'Twenty one and a half', value: '3'},
        {title: 'Twenty three', value: '4'}
    ],
    onChange: onChangeValue
}
