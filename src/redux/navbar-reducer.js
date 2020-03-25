import messageReducer from "./message-reducer";

let initialState = {
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
        {to: "/users",
            name: "Users"
        },
    ],
};

const navBarReducer = (state = initialState, action) => {
    return {
        ...state
    };
};

export default navBarReducer;
