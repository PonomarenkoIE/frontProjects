import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  favoritePosts: number[];
}

const initialState: IInitialState = {
  favoritePosts: []
}

//posts, selected by user 
export const favoritePostsSlice = createSlice({
  name: 'favoritePosts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<number>) {
      state.favoritePosts.push(action.payload)
    },

    removePost(state, action: PayloadAction<number>) {
      state.favoritePosts = state.favoritePosts.filter((p) => 
        p !== action.payload
      )
    }
  }
})

export const favoritePostsActions = favoritePostsSlice.actions
export const favoritePostsReducer = favoritePostsSlice.reducer