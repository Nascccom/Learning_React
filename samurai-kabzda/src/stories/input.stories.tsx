import {Story} from '@storybook/react';
import React, {ChangeEvent, useRef, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

export default {
    title: 'input',
    // component: ControlledAccordion
}

const Template: Story<typeof input> = (args) => <input {...args}/>
export const UncontrolledInput = Template.bind({})
UncontrolledInput.args = {}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
      <>
          <input onChange={onChangeHandler}/>
          {value}
      </>
    )
}
export const GetValueOfUncontrolledInputByOnKeyPress = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const onClickHandler = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
      <>
          <input ref={inputRef}/>
          <button onClick={onClickHandler}>press</button>
          actual value - {value}
      </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.value)
        // action('I want to change' + e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeInput}/>
}
export const ControlledCheckbox = () => {
    const [checkboxValue, setCheckboxValue] = useState(false)
    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }
    return <><input type={'checkbox'} checked={checkboxValue} onChange={onChangeCheckbox}/>Papa</>
}
export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>('2')
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }
    return (
      <select value={selectValue} onChange={onChangeSelect}>
          <option>none</option>
          <option value={'1'}>Moscow</option>
          <option value={'2'}>Minsk</option>
          <option value={'3'}>London</option>
          <option value={'4'}>Venecia</option>
      </select>
    )
}

export const ControlledInputWithFixedValue = Template.bind({})
ControlledInputWithFixedValue.args = {
    value: 'it-incubator.ru'
}