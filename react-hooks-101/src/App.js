import React, {useEffect,useState} from 'react';


const App = props => {
    const [state, setState] = useState(props);

    const { name, price} = state;

    useEffect(() => {
        console.log('useEffect is invoked');
    });

    useEffect(() => {
        console.log('this is like componentDidMount');
    },[]);

     //特定の値が変化したsurroundingsキオだけ読まれる
    useEffect(() => {
        console.log(('this callback is for name only.'))
    },[name])

    return (
        <div>
            <p>現在の{name}は、{price}円です</p>
            <button onClick={() => setState({...state, price: price + 1 })}>+1</button>
            <button onClick={() => setState({ ...state, price: price - 1})}>-1</button>
            <button onClick={() => setState(props)}>Reset</button>
            <input value={name} onChange={e => setState({...state, name: e.target.value})} />
        </div>
    );
}

App.defaultProps = {
    name: '',
    price: 1000
}

export default App;
