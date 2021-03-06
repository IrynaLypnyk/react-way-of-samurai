const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
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
    profile: null,

};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoyaVeIY17eBrD1SPcizRToZayBCL9dAAbrIdhCPFMqGedlaP0", alt: 'snow', msg: state.newPostText, likeCounts: 10,}],
                newPostText: "",
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.text,
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile,
            };
        }
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});

export default profileReducer;