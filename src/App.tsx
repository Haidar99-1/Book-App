import { useReducer } from 'react';
import DropDownForm from './components/DropDownForm';
import { formReducer, initialState } from './hooks/formReducer';
import BookLibrary from './components/BookLibrary';
import "./App.css"

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <DropDownForm state={state} dispatch={dispatch}/>
      <BookLibrary state={state}/>
    </div>
  );
}

export default App;
