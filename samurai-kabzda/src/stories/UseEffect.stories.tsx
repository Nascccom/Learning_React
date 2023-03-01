import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleExample1 = () => {
    console.log('SimpleExample1')
    const [counter, setCounter] = useState(1)
    useEffect(() => {
        document.title = counter.toString()
        //side-effects:
        // api.getUsers().then('')
        // setInterval
        // indexedDB  - it's a work with local database
        // document.getElementById
    },)
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

    useEffect(() => {
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
          Hello, {counter} {fake}
          <button onClick={() => setFake(fake + 1)}>+</button>

      </>
    )
}
export const SimpleExample3 = () => {
    console.log('SimpleExample3')
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(2)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (ComponentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect with first render and a dependence')
        document.title = counter.toString()
    }, [counter])

    return (
      <>
          Hello, {counter} {fake}
          <button onClick={() => setFake(fake + 1)}>+</button>
          <button onClick={() => setCounter(counter + 1)}>+</button>

      </>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        // setTimeout(()=> {
        //     console.log('setTimeout')
        //     setCounter(counter + 1)
        // }, 5000)

        // setInterval(()=> {
        //     console.log('setInterval')
        //     setCounter((state) => state + 1)
        // }, 3000)
    }, [counter])

    return (
      <>
          Hello, counter: {counter} --- fake: {fake}
          <button onClick={() => setFake(fake + 1)}>+</button>
      </>
    )
}

export const SetClock = () => {
    console.log('SetClock')

    const [clock, setClock] = useState(new Date())

      useEffect(() => {
          console.log('useEffect')
          setInterval(()=> {
              return setClock(new Date);
          }, 1000)
      }, [])

    let currentDate = `${clock.getHours()} : ${clock.getMinutes()} : ${clock.getSeconds()}`

    return (
      <>
          {currentDate}
      </>
    )
}

