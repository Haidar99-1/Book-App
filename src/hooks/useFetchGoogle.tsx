import { ActionType, DispatchType } from '../types/useReducerTypes';
import { Response  } from '../types/authorNameResponse';

export const useFetchGoogle = () => {

    function googleApiCall(url: string, actionType: DispatchType, dispatch: React.Dispatch<ActionType>){
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with the status ${response.status}`)
                }
                return response.json()
            })
            .then((responseData: Response) => {
                const payload = responseData.items.flatMap((item) => item.volumeInfo);
                dispatch({ type: actionType , payload: payload})
            })
            .catch((error) => {
                console.error("Error Fetching data ", error.message);

            })
    }
    return { googleApiCall }

}
