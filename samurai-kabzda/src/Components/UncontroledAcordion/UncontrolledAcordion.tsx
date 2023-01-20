import React, {useState} from 'react';


export type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
      <div>
          <AccordionTitle title={props.titleValue}
                         callBackForAccordionTitle={() => setCollapsed(!collapsed)}/>
          {!collapsed && <AccordionBody/>}
      </div>);

}

type AccordionTitlePropsType = {
    title: string
    callBackForAccordionTitle : () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
      <h3 onClick={props.callBackForAccordionTitle}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>);
}

