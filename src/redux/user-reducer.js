import Settings from "../components/Settings";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRr7s7phdifPkZIF17TcMfyLQGhzz-UjqCFULo7Jx5xzt0a5Ck',
            followed: false,
            fullName: 'Nick',
            status: "I am a boss...",
            location: {
                city: "Minsk", country: "Belarus",
            },
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyaVeIY17eBrD1SPcizRToZayBCL9dAAbrIdhCPFMqGedlaP0',
            followed: true,
            fullName: 'Alex',
            status: "I am the best...",
            location: {
                city: "Kyiv", country: "Ukraine",
            },
        },
        {
            id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRr7s7phdifPkZIF17TcMfyLQGhzz-UjqCFULo7Jx5xzt0a5Ck',
            followed: false,
            fullName: 'Nata',
            status: "I love the Sun...",
            location: {
                city: "Warsaw", country: "Poland",
            },
        },
        {
            id: 4,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyaVeIY17eBrD1SPcizRToZayBCL9dAAbrIdhCPFMqGedlaP0',
            followed: false,
            fullName: 'Dima',
            status: "I am super...",
            location: {
                city: "Moscow", country: "Russia",
            },
        },
    ],

};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                       return {...u, followed: true}
                    }
                    return u
                })
            };
        }
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        }
        case SET_USERS:{
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;