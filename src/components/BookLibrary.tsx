import BookCard from "./BookCard"
import { State } from "../types/useReducerTypes"
import { Alert, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

type Props = {
    state: State
}

const BookLibrary: React.FC<Props> = ({ state }) => {
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        
    }, [])
    const cardsContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '50px',
        justifyContent: 'center',
    }
    return (
        <>
            <div style={cardsContainerStyle}>
                {state.bookList.length > 0  ?
                    state.bookList.map((bookObj, index) => {
                        return (
                            <BookCard
                                key={index}
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
                        : <Alert severity="info">No books found</Alert>
                        // <CircularProgress/>
                }

            </div>
        </>
    )
}


export default BookLibrary
