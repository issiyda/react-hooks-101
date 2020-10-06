import React, {useState, useReducer} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'

const App = props => {
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = (e) => {
        e.preventDefault()
        console.log(title,body);
        dispatch({
            type: 'CREATE_EVENT',
            title,
            body
        })

        setTitle('');
        setBody('');

    }


    return (
        <div className="container-fluid">
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input id="formEventTitle" className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea className="form-control" name="" id="formEventBody" cols="30" rows="10" value={body} onChange={e => setBody(e.target.value)}></textarea>
                </div>

                <button className="btn btn-primary" onClick={addEvent}>イベント作成</button>
                <button className="btn btn-danger">全てのイベントを削除する</button>
                <button className="btn btn-danger">全ての操作ログをを削除する</button>
            </form>

            <h4>イベント一覧</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>ボディー</th>
                    <th></th>
                </tr>
                </thead>
            </table>
        </div>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
