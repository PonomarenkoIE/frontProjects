import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../components/Post";

interface postsInitialState {
  posts: IPost[];
}

const initialState: postsInitialState = {posts: []}

//posts, selected by user 
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload)
    },

    //TODO make types of type
    removePost(state, type, action) {
      state.posts = state.posts.filter((p) => p[type] !== p[action.payload])
    }
  }
})

export const postsActions = postsSlice.actions
export const postsReducer = postsSlice.reducer