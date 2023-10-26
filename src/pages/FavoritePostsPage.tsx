import React from 'react'
import { useAppSelector } from '../hooks/redux'

export default function FavoritePostsPage() {
  const favoritePosts = useAppSelector((state) => state.favoritePosts)
  
  return (
    <div>FavoritePostsPage</div>
  )
}
