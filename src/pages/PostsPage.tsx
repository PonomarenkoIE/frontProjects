import React, { useState } from 'react'
import { useGetPostsQuery } from '../store/Posts/posts.api'
import { useSearchedPosts } from '../hooks/useSearchedPosts'
import Form from '../components/Form'
import Posts from '../components/Posts'

/*const testPosts: IPost[] = [
  {
    "userId": 2,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    "userId": 2,
    "id": 16,
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    "userId": 2,
    "id": 17,
    "title": "fugit voluptas sed molestias voluptatem provident",
    "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
]*/

export default function PostsPage() {
  const [selector, setSelector] = useState('none')
  const [value, setValue] = useState('')
  const {isLoading, isError, data: posts} = useGetPostsQuery()
  const [show, setShow] = useState(false)
  const searchedPostsValue = useSearchedPosts(posts, selector, value)

  return (
    <>
      <Form setShow={setShow} value={value} setValue={setValue} selector={selector} setSelector={setSelector}/>
      {isError && <h2 style={{textAlign: 'center', color: 'red'}}> request error!</h2> }
      {show && <Posts title='Posts' posts={searchedPostsValue} />}
    </>
  )
}
