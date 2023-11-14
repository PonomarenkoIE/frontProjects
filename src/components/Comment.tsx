import React from 'react'
import '../style/css/Post.css'

export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export default function Comment({postId, id, name, email, body} : IComment) {
    return (
    <div className='post'>
      <div className='post__info post__item'>
        post id: {postId}
        <br />
        comment id: {id}
      </div>
      <div className='post__title post__item'>Name: {name}</div>
      <div className='post__body post__item'>Email: {email}</div>
      <div className='post__body post__item'>{body}</div>
    </div>
  )
}