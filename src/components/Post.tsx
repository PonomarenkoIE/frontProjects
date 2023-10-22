import React from 'react'
import '../style/css/Post.css';

export interface IPost {
  [index: string]: number | string;
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Post({userId, id, title, body}: IPost) {
  return (
    <div className='post'>
      <div className='post__info post__item'>
        user id: {userId}
        <br />
        post id: {id}
      </div>
      <div className='post__title post__item'>{title}</div>
      <div className='post__body post__item'>{body}</div>
    </div>
  )
}
