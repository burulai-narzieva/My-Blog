import {
    ADD_POST,
    LOG_IN,
    LOG_OUT,
    REGISTER_USER
} from "../actions";

const local = JSON.parse(localStorage.getItem('users'))

const initialState = {
    localUsers: local ? local.localUsers : [],
    currentUser: local ?
        local.currentUser : {
            firstName: '',
            lastName: '',
            userEmail: '',
            userPassword: '',
            id: '',
            photo: '',
            bio: ''
        },
    postId: 0,
    succes: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            let isLogin = state.localUsers.findIndex(
                (el) => el.userEmail === action.user.userEmail,
            )
            if (isLogin === -1) {
                return {
                    ...state,
                    localUsers: [...state.localUsers, action.user],
                    currentUser: action.user,
                    succes: true,
                }
            } else {
                return state
            }
            case LOG_IN:
                let getUser = state.localUsers.find(
                    (el) =>
                    el.userEmail === action.obj.inEmail &&
                    el.userPassword === action.obj.inPassword,
                )
                if (getUser) {
                    return {
                        ...state,
                        currentUser: getUser,
                        succes: true,
                    }
                } else {
                    return state
                }
                case ADD_POST:
                    return {
                        ...state,
                        currentUser: {
                                ...state.currentUser,
                                posts: [
                                    ...state.currentUser.posts,
                                    {
                                        title: action.obj.title,
                                        img: action.obj.img,
                                        content: action.obj.content,
                                        idPost: state.postId++,
                                    }
                                ]
                            },
                            postId: state.postId++,
                            localUsers: state.localUsers.map((el, id) => {
                                return el.userEmail === state.currentUser.userEmail
                                    ?
                                    {
                                        ...state.currentUser,
                                        posts: [
                                            ...state.currentUser.posts,
                                            {
                                                title: action.obj.title,
                                                img: action.obj.img,
                                                content: action.obj.content,
                                                idPost: state.postId++,
                                            }
                                        ]
                                    } :
                                    el
                            })
                    }
                    case LOG_OUT:
                        return {
                            ...state,
                            currentUser: {
                                    firstName: '',
                                    lastName: '',
                                    userEmail: '',
                                    userPassword: '',
                                    id: '',
                                },
                                succes: false,
                        }
                        default:
                            return state;
    }
}