import { Book } from './newYorkTimesApiResponse'
import { AuthorNameResponse } from './authorNameResponse'

export type DispatchType = "SET_BOOK_SEARCH" | "SET_SUBMITTED" | "SET_ISBN_SEARCH" | "SET_AUTHOR_SEARCH" | "SET_NY_BEST_SELLER_SEARCH" | "SET_SELECTED_VALUE" | "SET_BOOK_LIST" | "SET_GOOGLE_BOOKS" | "RESET_STATE"

export type Action =
    | { type: 'SET_BOOK_SEARCH', payload: string }
    | { type: 'SET_ISBN_SEARCH', payload: string }
    | { type: 'SET_AUTHOR_SEARCH', payload: string}
    | { type: 'SET_NY_BEST_SELLER_SEARCH', payload: string }
    | { type: 'SET_SELECTED_VALUE', payload: string }
    | { type: 'SET_BOOK_LIST', payload: Book[] }
    | { type: 'SET_SUBMITTED', payload: boolean }
    | { type: 'SET_GOOGLE_BOOKS', payload: AuthorNameResponse[] }
    | { type: 'RESET_STATE' }

export type State = {
    bookSearch: string,
    isbnSearch: string,
    authorSearch: string,
    nyBestSellerSearch: string
    selectedValue: string
    bookList: Book[]
    authorList: AuthorNameResponse[]
    isSubmitted: boolean
}


export type ActionType = 
    { type: DispatchType, payload:any }