import React, {KeyboardEvent, useEffect, useState} from 'react';
import {SelectPropsType} from "../Select/Select";
import s from './Select.module.css'

export const Select = (props: SelectPropsType) => {
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)
    const [collapsed, setCollapsed] = useState(false)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredItemValue)

    useEffect(()=> {
        setHoveredItemValue(props.value)
    }, [props.value] )

    const toggleItems = () => setCollapsed(!collapsed)
    const onClickChooseItem = (value: string) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const pretendentEl = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        setHoveredItemValue(pretendentEl.value)
                        return;
                    }
                }
            }
            props.onChange(props.items[0].value)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(false)
        }
    }


    return (
      <div className={s.select}
           onClick={toggleItems}
           tabIndex={0}
           onKeyUp={onKeyUp}>
        <span className={s.span}>
            {selectedItem && selectedItem.city}
        </span>
          <div className={s.items}>
              {
                collapsed &&
                props.items.map(i => <div key={i.value}
                                          className={s.item + ' ' + (
                                            hoveredItem === i
                                            ? s.selected
                                              : selectedItem === i
                                                ? s.hovered : '')}
                                          onClick={() => onClickChooseItem(i.value)}
                                          onMouseEnter={() => setHoveredItemValue(i.value)}
                >{i.city}</div>)
              }
          </div>
      </div>
    );
};

