import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { dropDownTypes } from '../constants';
import InputField from "./InputField";
import { State, ActionType } from "../types/useReducerTypes";
import { Button } from '@mui/material';
import { useFetchNYT } from '../hooks/useFetchNYT';
import { useFetchGoogle } from '../hooks/useFetchGoogle';
import Box from '@mui/material/Box';
import "../App.css";

type Props = {
    state: State,
    dispatch: React.Dispatch<ActionType>
}

const DropDownForm: React.FC<Props> = ({ state, dispatch }) => {
    const generateUrl = (base: string, query: string) => `http://localhost:3001/${base}?${query}`
    
    const urls: { [key: string]: string } = {
        'Author': generateUrl('authorSearch', `authorName=${state.authorSearch}`),
        'ISBN': generateUrl('isbnSearch', `isbn=${state.isbnSearch}`),
        'book': generateUrl('bookSearch', `book=${state.bookSearch}`),
        'NY Best seller Search': generateUrl('bestSeller', `date=${state.nyBestSellerSearch}`)
    };

    const { nytApiCall } = useFetchNYT();
    const { googleApiCall } = useFetchGoogle();

    const handleChange = (event: SelectChangeEvent<string>) => {
        dispatch({ type: 'SET_SELECTED_VALUE', payload: event.target.value });
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (state.selectedValue !== 'NY Best seller Search') {
            googleApiCall(urls[state.selectedValue], 'SET_GOOGLE_BOOKS', dispatch);
        } else {
            nytApiCall(urls[state.selectedValue], dispatch);
        }
        dispatch({ type: 'RESET_STATE', payload: null})
    }

    return (
        <Box>
            <form className='drop-down-container' onSubmit={handleSubmit}>
                <FormControl sx={{ width: 350 }}>
                    <InputLabel id="demo-simple-select-standard-label">Search</InputLabel>
                    <Select

                        value={state.selectedValue}
                        onChange={handleChange}
                    >

                        {dropDownTypes.map((dropDown, index) => (
                            <MenuItem key={index} value={dropDown.value}>{dropDown.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {state.selectedValue === 'book' && (
                    <InputField
                        id="book-input"
                        label="Book Search"
                        value={state.bookSearch}
                        dispatchType='SET_BOOK_SEARCH'
                        dispatch={dispatch}
                        placeholder='Book Name'
                    />
                )}
                {state.selectedValue === 'ISBN' && (
                    <InputField
                        id="ISBN-input"
                        label="ISBN Search"
                        dispatchType='SET_ISBN_SEARCH'
                        value={state.isbnSearch}
                        dispatch={dispatch}
                        placeholder='ISBN Number'
                    />

                )}
                {state.selectedValue === 'Author' && (
                    <InputField
                        id="Author-input"
                        label="Author Search"
                        dispatchType='SET_AUTHOR_SEARCH'
                        value={state.authorSearch}
                        dispatch={dispatch}
                        placeholder='Author Name'
                    />
                )}
                {state.selectedValue === 'NY Best seller Search' && (
                    <InputField
                        id="NY-Best-Seller-input"
                        label="NY Best seller"
                        dispatchType='SET_NY_BEST_SELLER_SEARCH'
                        value={state.nyBestSellerSearch}
                        dispatch={dispatch} 
                        placeholder="YYYY-MM-DD"
                        
                    />
                )}
                <Button type="submit" variant='contained'>Submit</Button>
            </form>
        </Box>
    )
}

export default DropDownForm;