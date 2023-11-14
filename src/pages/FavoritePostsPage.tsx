import React from 'react'
import { useAppSelector } from '../hooks/redux'
import Posts from '../components/Posts'
import { useGetPostsQuery } from '../store/Posts/posts.api'
import { useFavPosts } from '../hooks/useFavPosts'

export default function FavoritePostsPage() {
  const {data: posts} = useGetPostsQuery()
  const {favoritePosts} = useAppSelector((state) => state.favoritePosts)
  const favPosts = useFavPosts(posts, favoritePosts)

  return (
    <section className="fav">
      <Posts title='Избранные посты' posts={favPosts}/>
    </section>
  )
}
