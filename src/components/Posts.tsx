import React from 'react'
import Post, { IPost } from './Post';
import '../style/css/Posts.css';

interface PostsProps {
  title: string;
  posts: IPost[];
}

export default function Posts({title, posts}: PostsProps) {
  return (
    <section className="posts">
      <h2 className="posts__title">{title}</h2>
      {posts.map((post) => 
        <Post
          userId={post.userId} 
          id={post.id} 
          title={post.title} 
          body={post.body}
          isFavInitial={post.isFavInitial}
          key={post.id} 
        />
      )}
    </section>
  )
}
