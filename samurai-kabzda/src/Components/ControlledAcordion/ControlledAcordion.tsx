import React from 'react';

export type ItemType = {
    title: string
    value: number
}

export type ControlledAccordionPropsType = {
    /**
     * List header
     */
    titleValue: string
    /**
     * Element when clicked on which the list collapses and expands
     */
    collapsed: boolean
    items: ItemType[]
    onChange: () => void
    /**
     * Callback that is called when clicking on item
     * @param value is value clicked item
     */
    onClick: (value: any)=> void
}
const AccordionTitle = React.memo(AccordionTitleMemo)
const AccordionBody= React.memo(AccordionBodyMemo)


export function ControlledAccordion(props: ControlledAccordionPropsType) {
    return (
      <div>
          <AccordionTitle title={props.titleValue}
                          onChange={props.onChange}

          />
          {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
      </div>);

}

export type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitleMemo(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onChange}>{props.title}</h3>;
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any)=> void
}

export function AccordionBodyMemo(props: AccordionBodyType) {
    return (
      <ul>
          {props.items.map((i, index)=>
            <li key={index} onClick={()=> props.onClick(i)}>{i.title}</li>)}
      </ul>);
}


