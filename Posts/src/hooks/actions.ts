import { useDispatch } from "react-redux";
import { favoritePostsActions } from "../store/Posts/posts.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...favoritePostsActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}