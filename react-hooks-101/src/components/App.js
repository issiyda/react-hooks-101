import React, {useState, useReducer} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'

import Event from './Event';

import reducer from '../reducers'

const App = props => {
    const [state, dispatch] = useReducer(reducer, []);
    console.log('app')

    return (
        <div className="container-fluid">

            <EventForm state={state} dispatch={dispatch}/>
            <Events state={state} dispatch={dispatch}/>
        </div>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
