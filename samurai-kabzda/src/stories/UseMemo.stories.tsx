import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=> {
        let localResult = 1
        for (let i = 1; i <= a; i++) {
            let fake =0;
            while(fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            localResult = localResult * i
        }
        return localResult
    }, [a])

    for (let i = 1; i <= b; i++) {
       resultB = resultB * i
    }

    return (
      <>
          <input value={a}
                 onChange={(e) => setA(+e.currentTarget.value)}/>
          <input value={b}
                 onChange={(e) => setB(+e.currentTarget.value)}/>

          <div>
              Result for a: {resultA}
          </div>
          <div>
              Result for b: {resultB}
          </div>
      </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret')
    return (
      <div>
          {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>)
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemoExample = () => {
    console.log('Example1')
    const [users, setUsers] = useState(['Nastya', 'Viktor', 'Igor', 'Katya'])
    const [counter, setCounter] = useState(0)

    const newArr = useMemo(()=> {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }

    return (
      <>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={addUser}>+</button>
          {counter}
          <Users users={newArr}/>
      </>
    )

}