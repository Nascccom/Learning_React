import React, {useCallback, useState} from "react";
import {Select} from "./Select";
import {Story} from "@storybook/react";
import {SelectPropsType} from "../Select/Select";


export default {
    title: 'Select / useMemoAndReactMemoForSelect',
    component: Select
}

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const MySelect = Template.bind({})
MySelect.args = {
    value: '6',
    items: [
        {value: '1', city: 'Moscow', population: 17000000},
        {value: '2', city: 'Minsk', population: 700000},
        {value: '3', city: 'Ryzan', population: 570000},
        {value: '4', city: 'Moscow', population: 200000},
        {value: '5', city: 'Yakutsk', population: 1000000},
        {value: '6', city: 'Lobnya', population: 700000},
        {value: '7', city: 'Kiev', population: 57000},
        {value: '8', city: 'Novosibirsk', population: 2080000},
    ]
}

export const MyNewSelect = () => {
    const [value, setValue] = useState('1')
    const [data, setData] = useState([
        {value: '1', city: 'Moscow', population: 17000000},
        {value: '2', city: 'Minsk', population: 700000},
        {value: '3', city: 'Ryzan', population: 570000},
        {value: '4', city: 'Karaganda', population: 200000},
        {value: '5', city: 'Yakutsk', population: 1000000},
        {value: '6', city: 'Lobnya', population: 700000},
        {value: '7', city: 'Kiev', population: 57000},
        {value: '8', city: 'Novosibirsk', population: 2080000},
    ])
    return (
      <>
          <Select value={value}
                  onChange={setValue}
                  items={data}/>
      </>
    )
}

export const Filtered1Select = () => {
    console.log('Filtered1Select')
    const [value, setValue] = useState('6')
    const [data, setData] = useState([
        {value: '1', city: 'Moscow', population: 17000000},
        {value: '2', city: 'Minsk', population: 700000},
        {value: '3', city: 'Ryzan', population: 570000},
        {value: '4', city: 'Karaganda', population: 200000},
        {value: '5', city: 'Yakutsk', population: 1000000},
        {value: '6', city: 'Lobnya', population: 700000},
        {value: '7', city: 'Kiev', population: 57000},
        {value: '8', city: 'Koreya', population: 700000},
        {value: '9', city: 'Japan', population: 57000},
        {value: '10', city: 'Kaluga', population: 2080000},
    ])


    const onClickChangeFilter = () => {
        console.log('K')
        const newData = data.filter(el => el.city.toLowerCase()[0] === 'k')
        setData(newData)
    }

    const onClickChangeFilterAll = () => {
        console.log('all')
        setData([
            {value: '1', city: 'Moscow', population: 17000000},
            {value: '2', city: 'Minsk', population: 700000},
            {value: '3', city: 'Ryzan', population: 570000},
            {value: '4', city: 'Karaganda', population: 200000},
            {value: '5', city: 'Yakutsk', population: 1000000},
            {value: '6', city: 'Lobnya', population: 700000},
            {value: '7', city: 'Kiev', population: 57000},
            {value: '8', city: 'Koreya', population: 700000},
            {value: '9', city: 'Japan', population: 57000},
            {value: '10', city: 'Kaluga', population: 2080000},
        ])
    }


    const onClickChangeFilterPopulation = () => {
        console.log('Population')
        setData(data.filter(el => el.population > 700000))
    }

    return (
      <>
          <Select value={value}
                  onChange={setValue}
                  items={data}/>
          <div>
              <button onClick={onClickChangeFilter}>Filter'K'</button>
              <button onClick={onClickChangeFilterAll}>All</button>
              <button onClick={onClickChangeFilterPopulation}>PopulationMore700000</button>
          </div>
      </>
    )
}

