import { State, ActionType} from "../types/useReducerTypes"


export const initialState: State = {
    bookSearch: '',
    isbnSearch: '',
    authorSearch: '',
    nyBestSellerSearch: '',
    selectedValue: '',
    bookList: [],
    authorList: [],
    isSubmitted: false,

}

export const formReducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case 'SET_SELECTED_VALUE':
            return { ...state, selectedValue: action.payload }
        case 'SET_BOOK_SEARCH':
            return { ...state, bookSearch: action.payload }
        case 'SET_ISBN_SEARCH':
            console.log(action.payload)
            return {...state, isbnSearch: action.payload}
        case 'SET_AUTHOR_SEARCH':
            console.log(action.payload)
            return {...state, authorSearch: action.payload}
        case 'SET_NY_BEST_SELLER_SEARCH':
            return {...state, nyBestSellerSearch: action.payload}
        case 'SET_GOOGLE_BOOKS':
            return {...state, authorList: action.payload}
        case 'SET_BOOK_LIST':
            return {...state, bookList: action.payload}
        case 'SET_SUBMITTED':
            return {...state, submitted: action.payload}
        case 'RESET_STATE':
            return initialState;
        default:
            return state;
    }

}