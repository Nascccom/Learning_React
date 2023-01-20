import React, {useState} from 'react';
import {RatingValuesType} from '../ControlledRaiting/ControlledRaiting';

export type UncontrolledRatingProps = {
    defaultValue?: RatingValuesType

}

export function UncontrolledRating(props: UncontrolledRatingProps) {
    let [stars, setStars] = useState<RatingValuesType>(props.defaultValue ? props.defaultValue : 0)
    return (
      <div>
          <Star selected={stars > 0}
                callBack={()=> {setStars(1)}}
                value={1}
                />
          <Star selected={stars > 1}
                callBack={()=> {setStars(2)}}
                value={2}
                />
          <Star selected={stars > 2}
                callBack={()=> {setStars(3)}}
                value={3}
                />
          <Star selected={stars > 3}
                callBack={()=> {setStars(4)}}
                value={4}
               />
          <Star selected={stars > 4}
                callBack={()=> {setStars(5)}}
                value={5}
                />
      </div>
    );
}

export type StarPropsType = {
    selected: boolean
    callBack: (value: RatingValuesType) => void
    value: RatingValuesType
}


export function Star(props: StarPropsType) {

    return (
      <span onClick={() => props.callBack(props.value)} >
              {props.selected ? <><b> I am Star </b></> : <> I am Star</>}
      </span>
    )
}


