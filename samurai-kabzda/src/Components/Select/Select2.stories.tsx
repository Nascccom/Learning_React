import {SelectPropsType} from './Select';
import {Story} from '@storybook/react';
import React, {useState} from 'react';
import {Select2} from './Select2';

export default {
    title: 'Select / Select2',
    component: Select2
}

const Template: Story<SelectPropsType> = (args) => <Select2 {...args} />

export const TwoSelect = Template.bind({})
TwoSelect.args = {
    value: '2',
    items: [
        {title: 'Twenty', value: '1'},
        {title: 'Twenty one', value: '2'},
        {title: 'Twenty one and a half', value: '3'},
        {title: 'Twenty three', value: '4'}
    ],
}
export const UnchangedValueSelect = () => {
    const [value, setValue] = useState(null)

    return (
      <Select2 value={value}
               onChange={setValue}
               items={[
                   {title: 'Bla', value: '1'},
                   {title: 'BlaBla', value: '2'},
                   {title: 'BlaBlaBla', value: '3'},
                   {title: 'BlaBlaBlaBla', value: '4'}
               ]}/>
    )
}

export const UncontrolledSelect = () => {
    const [value, setValue] = useState('1')
    return (
      <Select2 value={value}
               onChange={setValue}
               items={[
                   {title: 'Bla', value: '1'},
                   {title: 'BlaBla', value: '2'},
                   {title: 'BlaBlaBla', value: '3'},
                   {title: 'BlaBlaBlaBla', value: '4'}
               ]}/>
    )
}