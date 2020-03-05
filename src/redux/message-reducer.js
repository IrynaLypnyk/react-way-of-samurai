const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

let initialState = {
    messages:
        [
            {
                name: 'Sasha',
                id: 1,
                text: 'Hi!!!!',
            },
            {
                name: 'Serezha',
                id: 2,
                text: 'Hello',
            },
            {
                name: 'Ira',
                id: 3,
                text: "How do you do!?",
            },
            {
                name: 'Tikhon',
                id: 4,
                text: "Bla-bla-bla",
            },
        ],
    newMsgText: '',
};

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MSG:{
            return {
                ...state,
                messages: [...state.messages, {name: 'Natasha', id: 5, text: state.newMsgText}],
                newMsgText: '',
            };
        }
        case UPDATE_NEW_MSG_TEXT:
            return {
                ...state,
                newMsgText: action.text
            };
        default:
            return state;
    }
};

export const AddMsgActionCreator = () => ({type: ADD_MSG});
export const UpdateNewMsgTextActionCreator = (text) => ({type: UPDATE_NEW_MSG_TEXT, text: text});

export default messageReducer;