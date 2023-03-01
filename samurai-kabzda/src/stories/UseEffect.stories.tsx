import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample1 = () => {
    console.log('SimpleExample1')
    const [counter, setCounter] = useState(1)
    useEffect(()=> {
        document.title = counter.toString()
        //side-effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB  - it's a work with local database
        // document.getElementById
    }, )
    return (
      <>
          Hello, {counter}
          <button onClick={() => setCounter(counter + 1)}>+</button>

      </>
    )
}


export const SimpleExample2 = () => {
    console.log('SimpleExample2')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(()=> {
        console.log(' useEffect')
        document.title = counter.toString()
        //side-effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB  - it's a work with local database
        // document.getElementById
    }, [counter])
    return (
      <>
          Hello, {counter}   { fake}
          <button onClick={() => setFake(fake + 1)}>+</button>

      </>
    )
}

