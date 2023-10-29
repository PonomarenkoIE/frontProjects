import React, { useState } from 'react'
import '../style/css/Post.css';
import { useDispatch } from 'react-redux';
import { favoritePostsActions } from '../store/Posts/posts.slice';

export interface IPost {
  [index: string]: number | string | boolean | undefined;
  userId: number;
  id: number;
  title: string;
  body: string;
  isFavInitial?: boolean;
}

export default function Post({userId, id, title, body, isFavInitial}: IPost) {
  const {addPost, removePost} = favoritePostsActions
  const dispatch = useDispatch()
  const [isFav, setIsFav] = useState(isFavInitial === undefined ? false : true)
  
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (isFav) {
      case false: {
        setIsFav(prev => !prev)
        dispatch(addPost({userId, id, title, body, isFav}))
        break;
      } 

      case true: {
        setIsFav(prev => !prev)
        dispatch(removePost(id))
        break;
      }
    }
  }

  return (
    <div className='post'>
      <div className='post__info post__item'>
        user id: {userId}
        <br />
        post id: {id}
      </div>
      <div className='post__title post__item'>{title}</div>
      <div className='post__body post__item'>{body}</div>
      <button 
        className="post__link"
        onClick={clickHandler}
        >{isFav ? 'Убрать' : 'Добавить'}</button>
    </div>
  )
}
