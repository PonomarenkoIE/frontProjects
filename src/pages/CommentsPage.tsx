import React from 'react'
import { useGetPostCommentsQuery } from '../store/Posts/posts.api';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';

export default function CommentsPage() {
  const {id} = useParams()
  const {isLoading, isError, data: comments} = useGetPostCommentsQuery(Number(id))

  return (
  <section className="comments">
    <h2 className="comments__title">Комментарии к посту {id}</h2>
    {!isLoading ? <Comments comments={comments}/> : 'Загрузка...'}
    {isError && <h2 style={{textAlign: 'center'}}>Ошибка!</h2>}
  </section> 
  )
}
