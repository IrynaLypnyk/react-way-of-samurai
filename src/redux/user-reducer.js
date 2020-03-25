const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_IS_FETCHING = "SET_IS_FETCHING"

let initialState = {
    users: [],
    usersPerPage: 20,
    usersCount: 0,
    selectedPage: 1,
    isFetching: false,
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
                users: action.users
            };
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                selectedPage: action.currentPage
            };
        }
        case SET_USERS_COUNT:{
            return {
                ...state,
                usersCount: action.usersCount
            };
        }
        case SET_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export default usersReducer;
