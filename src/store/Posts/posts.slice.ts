import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../components/Post";

interface IInitialState {
  favoritePosts: IPost[];
}

const initialState: IInitialState = {
  favoritePosts: []
}

//posts, selected by user 
export const favoritePostsSlice = createSlice({
  name: 'favoritePosts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<IPost>) {
      state.favoritePosts.push(action.payload)
    },

    removePost(state, action) {
      state.favoritePosts = state.favoritePosts.filter((p) => 
        p['id'] !== action.payload
      )
    }
  }
})

export const favoritePostsActions = favoritePostsSlice.actions
export const favoritePostsReducer = favoritePostsSlice.reducer