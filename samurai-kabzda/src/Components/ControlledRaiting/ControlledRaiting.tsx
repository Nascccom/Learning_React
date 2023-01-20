import React from 'react';

export type RatingValuesType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValuesType
    onClick: (value: RatingValuesType) => void

}

export type RatingProps = {
    value: RatingPropsType
    onClick: () => void
}

const Star = React.memo(StarComponent)

export function ControlledRating(props: RatingPropsType) {
    return (
      <div>
          <Star selected={props.value > 0 } onClick={props.onClick} value={1}/>
          <Star selected={props.value > 1 } onClick={props.onClick} value={2}/>
          <Star selected={props.value > 2 } onClick={props.onClick} value={3}/>
          <Star selected={props.value > 3 } onClick={props.onClick} value={4}/>
          <Star selected={props.value > 4 } onClick={props.onClick} value={5}/>
      </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValuesType)=> void
    value: RatingValuesType
}


function StarComponent(props: StarPropsType) {
    console.log('Star rendered')
return(
  <span onClick={()=>props.onClick(props.value)}>
       {props.selected ? <><b> I am Star </b></>: <> I am Star</>}
  </span>
)}



