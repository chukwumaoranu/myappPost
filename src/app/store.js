import { configureStore } from "@reduxjs/toolkit"
import postsReducer from '../features/posts/postsSlice'
import usernameReducer from '../features/users/usersSlice'


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        username : usernameReducer
    }
})