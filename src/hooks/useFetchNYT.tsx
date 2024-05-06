import { ActionType} from '../types/useReducerTypes'
import { Response } from '../types/newYorkTimesApiResponse'

export const useFetchNYT = () => {

    function nytApiCall(url: string, dispatch: React.Dispatch<ActionType>) {
        fetch(url, {
            method: 'GET',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with the status ${response.status}`)
                }
                return response.json()
            })
            .then((responseData: Response) => {
                dispatch({ type: 'SET_BOOK_LIST', payload: responseData.results.lists.flatMap((list) => list.books) })
            })
            .catch((error) => {
                console.error("Error Fetching data ", error.message);
    
            })

    }
    return { nytApiCall }
}

export default useFetchNYT;






