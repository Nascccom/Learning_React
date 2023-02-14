import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallBack'
}


export const LikeToCallBack = () => {
    console.log('LikeToCallBack')
    const [books, setBooks] = useState(['React', 'React Native', 'Css', 'SQL'])
    const [counter, setCounter] = useState(0)

    const newArr = useMemo(()=> {
        return books.filter(book => book.toLowerCase().indexOf('a') > -1)
    }, [books])


    const memoizedAddBook = useMemo(()=> {
        return () => {
            const newBook = [...books, 'AngularL' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {

        const newBook = [...books, 'AngularL' + new Date().getTime()]
        setBooks(newBook)
    }, [books])

    return (
      <>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          {counter}
          <Book books={newArr} addBook={memoizedAddBook2 }/>
      </>
    )
}


const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('Books secret')
    return (
      <div>
          {props.books.map((book, i) => <div key={i}>{book}</div>)}
          <button onClick={props.addBook}>+</button>
      </div>)
}

const Book = React.memo(BooksSecret)