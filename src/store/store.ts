import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './Posts/posts.api'
import { favoritePostsReducer } from './Posts/posts.slice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    favoritePosts: favoritePostsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>