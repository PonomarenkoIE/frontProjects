import { useMemo } from "react";
import { IPost } from "../components/Post";

interface ISearchedPosts {
  (posts: IPost[] | undefined, selector: string, value: string): IPost[]
} 

export const SearchedPosts:ISearchedPosts = (posts, selector, value) => {
  const searchedPosts = useMemo(() => {
    if (typeof(posts) == 'undefined') {return []}
    if (selector === 'userId' || selector === 'id') {
      return posts.filter(post => String(post[selector]).toLowerCase().includes(value.toLowerCase()))
    }
    else if (selector === 'title' || selector === 'body') {
      return posts.filter(post => post[selector].toLowerCase().includes(value.toLowerCase()))
    }
    return posts
  }, [posts, selector, value])

  return searchedPosts
}