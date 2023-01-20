import React, {KeyboardEvent, useEffect, useState} from 'react';
import {SelectPropsType} from './Select';
import s from './Select.module.css'

export const Select2 = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElementValue)

    useEffect(()=> {
        setHoveredElementValue(props.value)
    }, [props.value] )

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentEl = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        setHoveredElementValue(pretendentEl.value)
                        return;
                    }
                }
            }
            props.onChange(props.items[0].value)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
      <div className={s.select}
           onClick={toggleItems}
           onKeyUp={onKeyUp}
           tabIndex={0}>
          <span className={s.main}>
              {selectedItem && selectedItem.title}
          </span>
          <div className={s.items}>
              {
                active &&
                props.items.map(i => <div onMouseEnter={() => setHoveredElementValue(i.value)}
                                          className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                          onClick={() => onItemClick(i.value)}
                                          key={i.value}>{i.title}</div>)
              }
          </div>
      </div>
    );
};
