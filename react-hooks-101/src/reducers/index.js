
action = {
    type: 'CREATE_EVENT',
    title: '東京オリンピック',
    body: '2020年に東京オリンピックが開催されます。'
};

state = [];

state = [
    {id:1, title: 'タイトル1', body: 'ボディー1'},
    {id:2, title: 'タイトル2', body: 'ボディー2'},
    {id:3, title: 'タイトル3', body: 'ボディー3'},
]

const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body}
            const length = state.length;
            const id = length === 0 ? 1: state[ length - 1].id+1
            return [...state, { id, ...event}]
        case 'DELETE_EVENT':
            return state;
        case 'DELETE_ALL_EVENT':
            return [];
        default:
            return state
    }
}


export default events