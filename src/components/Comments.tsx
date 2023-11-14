import React from 'react'
import Comment, { IComment } from './Comment'

interface CommentsProps {
  comments?: IComment[]
}

export default function Comments({comments} : CommentsProps) {
  return (
    <>
      {comments?.map((comment) => 
        <Comment 
          postId={comment.postId}
          id={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      )}
    </>
  )
}
