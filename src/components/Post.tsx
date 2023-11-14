import React, { useState } from 'react'
import '../style/css/Post.css';
import { useDispatch } from 'react-redux';
import { favoritePostsActions } from '../store/Posts/posts.slice';
import { useAppSelector } from '../hooks/redux';
import { Link } from 'react-router-dom';

export interface IPost {
  [index: string]: number | string;
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Post({userId, id, title, body}: IPost) {
  const {favoritePosts} = useAppSelector(state => state.favoritePosts)
  const {addPost, removePost} = favoritePostsActions
  const dispatch = useDispatch()
  const [isFav, setIsFav] = useState(favoritePosts.includes(id))
  
  const clickCommentsHandler = () => {
    
  }

  const clickFavHandler = () => {
    switch (isFav) {
      case false: {
        setIsFav(prev => !prev)
        dispatch(addPost(id))
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
      <Link to={`comments/${id}`}>Комментарии</Link>
      <button 
        className="post__fav"
        onClick={clickFavHandler}
      >{isFav ? 'Убрать' : 'Добавить'}</button>      
    </div>
  )
}
