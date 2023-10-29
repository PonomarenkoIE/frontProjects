import React from 'react'
import { useAppSelector } from '../hooks/redux'
import Posts from '../components/Posts'

export default function FavoritePostsPage() {
  const {favoritePosts} = useAppSelector((state) => state.favoritePosts)

  return (
    <section className="fav">
      <Posts title='Избранные посты' posts={favoritePosts}/>
    </section>
  )
}
