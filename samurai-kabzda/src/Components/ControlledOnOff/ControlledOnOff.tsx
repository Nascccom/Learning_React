import React  from 'react';

export type OnOffType = {
    status: boolean
    onChange: (on: boolean) => void
    onClick: () => void
}

export const ControlledOnOff = (props: OnOffType) => {

    const onStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.status ? 'limegreen' : 'white'
    }
    const offStyle = {
        height: '20px',
        width: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        backgroundColor: !props.status ? 'red' : 'white'
    }
    const SwitchStyle = {
        height: '20px',
        width: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.status ? 'limegreen' : 'red'
    }

    return (
      <div>
          <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
          <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
          <div style={SwitchStyle}></div>
      </div>
    )
}