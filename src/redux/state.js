const ADD_MSG = 'ADD-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const store = {
        _state : {
            navBar: {
                navLinks:[
                    {to: "/profile",
                        name: "Profile"
                    },
                    {to: "/messages",
                        name: "Messages"
                    },
                    {to: "/news",
                        name: "News"
                    },
                    {to: "/music",
                        name: "Music"
                    },
                    {to: "/settings",
                        name: "Settings"
                    },
                ],
            },
            profilePage:{
                posts: [
                    {
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyaVeIY17eBrD1SPcizRToZayBCL9dAAbrIdhCPFMqGedlaP0",
                        alt: 'snow',
                        msg: "Hi! How are you?",
                        likeCounts: 10,
                    },
                    {
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyaVeIY17eBrD1SPcizRToZayBCL9dAAbrIdhCPFMqGedlaP0",
                        alt: 'snow',
                        msg: "Hello, WORLD!",
                        likeCounts: 3,
                    },
                    {
                        img: "https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/andrew.messenger/76b950d0-71a0-4d63-bc36-8510390faa00.jpg/r0_376_4032_2643_w1200_h678_fmax.jpg",
                        alt: 'snow',
                        msg: "Yooo!!!",
                        likeCounts: 7,
                    },
                ],
                newPostText: 'newPostText test',
            },
            messagesPage:{
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
            },
        },
        _callSubscriber(){
            console.log(" changed");
        },
        subscribe (observer) {
            this._callSubscriber = observer;
        },
        getState(){
            return this._state;
        },
        dispatch(action) {
            if (action.type === ADD_MSG) {
                let messages = this._state.messagesPage.messages;
                let newMsg = ({
                    name: 'Natasha',
                    id: 5,
                    text: this._state.messagesPage.newMsgText,
                });
                messages.push(newMsg);
                this._callSubscriber(this._state);
                this._state.messagesPage.newMsgText = '';
            }
            if (action.type === UPDATE_NEW_MSG_TEXT) {
                this._state.messagesPage.newMsgText = action.text;
                this._callSubscriber(this._state);
            }
            if(action.type === ADD_POST){
                let posts = this._state.profilePage.posts;
                let newPost =  {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyaVeIY17eBrD1SPcizRToZayBCL9dAAbrIdhCPFMqGedlaP0",
                    alt: 'snow',
                    msg: this._state.profilePage.newPostText,
                    likeCounts: 10,
                };
                posts.push(newPost);
                this._callSubscriber(this._state);
                this._state.profilePage.newPostText='';
            }
            if(action.type === UPDATE_NEW_POST_TEXT){
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
            }
        },
};


export const AddMsgActionCreator = () => ({type: ADD_MSG});
export const AddPostActionCreator = () => ({type: ADD_POST});
export const UpdateNewMsgTextActionCreator = (text) => ({type: UPDATE_NEW_MSG_TEXT, text: text});
export const UpdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

window.store = store;




export default store;