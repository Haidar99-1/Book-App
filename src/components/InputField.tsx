import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import {Action, DispatchType} from "../constants"

interface Props {
    id: string,
    label: string,
    value: string,
    dispatchType: DispatchType,
    dispatch: (value: Action) => void,
    placeholder: string
}

const InputField: React.FC<Props> = ({ id, label, value, dispatchType,dispatch, placeholder }) => {
    return (
        <div>
            <TextField 
            variant="standard"
            id={id}
            placeholder={placeholder}
            label={label}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: dispatchType, payload: e.target.value })}
            />
        </div>
    )
}

export default InputField