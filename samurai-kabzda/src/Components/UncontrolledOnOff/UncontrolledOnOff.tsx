import React, {useState} from 'react';

export type OnOffTypeUncontrolled = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: OnOffTypeUncontrolled) => {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)
    const switchButton = (on: boolean) => {
        setOn(on)
        props.onChange(on)
    }
    const onClicked = () => {
        switchButton(true)
    }
    const offClicked = () => {
        switchButton(false)
    }

    const onStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'limegreen' : 'white'
    }
    const offStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: !on ? 'red' : 'white'
    }
    const SwitchStyle = {
        height: '20px',
        width: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'limegreen' : 'red'
    }

    return (
      <div>
          <div style={onStyle} onClick={onClicked}>On</div>
          <div style={offStyle} onClick={offClicked}>Off</div>
          <div style={SwitchStyle}></div>
      </div>
    )
}




