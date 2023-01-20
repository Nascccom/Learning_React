import {OnOffTypeUncontrolled, UncontrolledOnOff} from './UncontrolledOnOff';
import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';


export default {
    title: 'Switch OnOff/Uncontrolled OnOff',
    component: UncontrolledOnOff
}

const callback = action('changing Mode')

const Template: Story<OnOffTypeUncontrolled> = (args)=>
  <UncontrolledOnOff {...args}/>

export const OnOff1 = Template.bind({})
OnOff1.args = {
    defaultOn: true,
    onChange: callback
}
export const OnOff2 = Template.bind({})
OnOff2.args = {
    defaultOn: false,
    onChange: callback
}

export const DefaultInputValue = () => {
    let [value, setValue] = useState('')

    const onChange =(e: ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value)
        callback()
    }

    return(
      <input defaultValue={value} onChange={onChange}/>
    )
}
