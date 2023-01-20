import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

type ItemType = {
    title?: string
    value: string
    city?: string
    population?: number
}

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function SelectTeam(props: SelectPropsType) {
    const [age, setAge] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
      <FormControl sx={{m: 1, minWidth: 80}}>
          <InputLabel id="demo-simple-select-autowidth-label">
              Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
              <MenuItem value={props.value}>
                  <em>None</em>
              </MenuItem>

              {props.items.map(el => {
                  return (
                    <MenuItem value={el.value}>{el.title}</MenuItem>
                  )
              })}
          </Select>
      </FormControl>
    );
}