import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

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
            this._state.messagesPage = messageReducer ( this._state.messagesPage, action);
            this._state.profilePage = profileReducer ( this._state.profilePage, action);
            this._state.navBar = navbarReducer ( this._state.navBar, action);
            this._callSubscriber(this._state);
        },
};

window.store = store;

export default store;