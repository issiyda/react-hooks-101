import React, {useReducer, useState, useContext} from "react";
import reducer from "../reducers";

import { CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS,
} from "../actions";

import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
    const {state , dispatch} = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const addEvent = (e) => {
        e.preventDefault();

        dispatch({
            type: CREATE_EVENT,
            title,
            body
        });

        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'イベントを作成しました',
            operatedAt: timeCurrentIso8601()
        })

        setTitle('');
        setBody('');
    }

    const deleteAllEvents = e => {
        e.preventDefault();
        const result = window.confirm('全てのイベントを本当に削除してもよろしいですか？');
        if (result) {
            dispatch({type: DELETE_ALL_EVENTS});
            dispatch({
                type: ADD_OPERATION_LOG,
                description: '全てのログを削除しました。',
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    const deleteAllOpetrationLogs = e => {
        e.preventDefault();
        const result = window.confirm('全ての操作ログを本当に削除してもよろしいですか？');
        if(result){
            dispatch({type: DELETE_ALL_OPERATION_LOGS});
        }
    }

    const unCreatable = title === '' || body === '';

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div
                    className="form-group">
                    <label
                        htmlFor="formEventTitle"> タイトル </label>
                        <input id="formEventTitle" className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea className="form-control" name="" id="formEventBody" cols="30" rows="10"
                              value={body}
                              onChange={e => setBody(e.target.value)}/>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={addEvent}
                    disabled={unCreatable}> イベント作成
                </button>
                <button className="btn btn-danger" onClick={deleteAllEvents}
                        disabled={state.events.length === 0}>全てのイベントを削除する
                </button>
                <button className="btn btn-danger" onClick={deleteAllOpetrationLogs} disabled={state.operationLogs.length === 0}> 全ての操作ログをを削除する</button>
            </form>
        </>
)}

export default EventForm
