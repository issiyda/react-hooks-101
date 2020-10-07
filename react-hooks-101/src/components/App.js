import React, {useState, useReducer} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from "../contexts/AppContext";


import reducer from '../reducers'



const App = props => {
   const initialState =  {
        events: [],
       operationLogs:[]
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            <div className="container-fluid">
                <EventForm/>
                <Events/>
            </div>
        </AppContext.Provider>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
