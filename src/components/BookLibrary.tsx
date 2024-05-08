import BookCard from "./BookCard"
import { State } from "../types/useReducerTypes"
import { Alert, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
const uuid = require('uuid');
const uuid4 = uuid.v4()
type Props = {
    state: State
}

const BookLibrary: React.FC<Props> = ({ state }) => {
    const [ loading, setLoading ] = useState(false);

    // use one type of style, either in-line styling, sheet styling 
    const cardsContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '50px',
        justifyContent: 'center',
    }
    // init, loading, error, empty
    // change the return statement by decide whats the current state, if we have data in bookList and authorList
    // then return a BookCard
    return (
        <>
            <div style={cardsContainerStyle}>
                {state.bookList ?
                    state.bookList.map((bookObj) => {
                        return (
                            <BookCard
                                key={uuid4}
                                image={bookObj.book_image}
                                authorName={bookObj.author}
                                description={bookObj.description}
                                link={bookObj.amazon_product_url}
                            />
                        );
                    })
                    :
                    state.authorList.length > 0 ?
                        state.authorList.map((authorBook, key) => {
                            return (
                                <BookCard 
                                key={key} 
                                authorName={authorBook.authors[0]}
                                description={authorBook.description}
                                image={authorBook.imageLinks.thumbnail}
                                link={authorBook.canonicalVolumeLink}
                                />
                            )
                             
                        })
                        : 
                        <Alert severity="info">No books found</Alert>
                        // <CircularProgress/>
                }

            </div>
        </>
    )
}

export default BookLibrary