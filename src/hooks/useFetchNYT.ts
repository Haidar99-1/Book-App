import { ActionType} from '../types/useReducerTypes'
import { Response } from '../types/newYorkTimesApiResponse'
//don't use tsx for a custom hook, use ts instead
export const useFetchNYT = () => {
    // think about caching =>   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
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






