import {ACTIONS} from './App'
import './App.css';

export default function OperationButton({dispatch,operation}){
    return (
    <button className='operator' 
    onClick={
        () => dispatch({type: ACTIONS.CHOOSE_OPERATOR,payload:{operation}})
    }>
    {operation}
    </button>
    )
}