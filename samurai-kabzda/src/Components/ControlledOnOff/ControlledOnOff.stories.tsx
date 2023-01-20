import {ControlledOnOff, OnOffType} from './ControlledOnOff';
import {Story} from '@storybook/react';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Switch OnOff/ControlledOnOff',
    component: ControlledOnOff,

}
const callback = () =>  action('On')

const Template: Story <OnOffType> = (args) => <ControlledOnOff {...args}/>

export const ToggleOn = Template.bind({})
ToggleOn.args = {
    status: true,
}

export const ToggleOff = Template.bind({})
ToggleOff.args = {
    status: false,
}
export const OnOff2: Story <OnOffType> = (args) => {
    let [toggle, setToggle] = useState(true)
    return(
      <ControlledOnOff {...args} status={toggle} onChange={setToggle}/>
    )
}
OnOff2.args= {
    onClick: callback
}
