import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styles from "./components/NavBar/index.module.css";
import {NavLink} from "react-router-dom";
import PostItem from "./components/Profile/MyPosts/PostItem";

const state = {
    navData: [
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
    postItemData: [
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
            msg: "Yo",
            likeCounts: 7,
        }
    ],
    messagesData:
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
                text: "Yo",
            },
        ],

}

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
