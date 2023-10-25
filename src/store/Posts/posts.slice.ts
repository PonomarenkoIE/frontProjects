import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../../components/Post";

interface IpostsInitialState {
  favoritePosts: IPost[];
}

interface IremovePostPayload {
  type: string;
  value: string; 
}

const initialState: IpostsInitialState = {favoritePosts: []}

//posts, selected by user 
export const favoritePostsSlice = createSlice({
  name: 'favoritePosts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<IPost>) {
      state.favoritePosts.push(action.payload)
    },

    removePost(state, action: PayloadAction<IremovePostPayload>) {
      state.favoritePosts = state.favoritePosts.filter((p) => 
        p[action.payload.type] !== p[action.payload.value]
      )
    }
  }
})

export const favoritePostsActions = favoritePostsSlice.actions
export const favoritePostsReducer = favoritePostsSlice.reducer