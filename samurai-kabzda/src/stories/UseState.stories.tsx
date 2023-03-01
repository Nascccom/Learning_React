import React, {useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log('generateData')
    return 29837298
}

export const Example1 = () => {
    console.log('Example1')
    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    return (
      <>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          {counter}
      </>
    )

}

export const Example2 = () => {
    console.log('Example2')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1
    return (
      <>
          <button onClick={() => setCounter(changer)}>+</button>
          {counter}
      </>
    )

}