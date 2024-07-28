import { useMemo } from "react";
import { IPost } from "../components/Post";

interface IFavPosts {
  (posts: IPost[] | undefined, favoritePosts: number[]): IPost[]
}

export const useFavPosts:IFavPosts = (posts, favoritePosts) => {
  const favPosts = useMemo(() => {
    if (posts === undefined) return []
    return favoritePosts.map((id) => posts[id-1])   
  }, [posts, favoritePosts])

  return favPosts
}