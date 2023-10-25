import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './Posts/posts.api'
import { postsReducer } from './Posts/posts.slice'

const storePosts = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts: postsReducer
  }
})

export default storePosts