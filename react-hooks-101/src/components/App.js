import React, {useEffect,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = props => {
    const [state, setState] = useState(props);



    return (
        <div className="container-fluid">
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input id="formEventTitle" className="form-control" type="text"/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="formEventBody">ボディー</label>
                    <textarea className="form-control" name="" id="formEventBody" cols="30" rows="10"></textarea>
                </div>

                <button className="btn btn-primary">イベント作成</button>
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
