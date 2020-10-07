import React, {useState, useReducer} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from "../contexts/AppContext";


import reducer from '../reducers'



const App = props => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <AppContext.Provider value={'Hello, Iam a Provider'}>
            <div className="container-fluid">
                <EventForm state={state} dispatch={dispatch}/>
                <Events state={state} dispatch={dispatch}/>
            </div>
        </AppContext.Provider>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
