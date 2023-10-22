import React, {useState } from 'react';
import Posts from './Posts';
import { IPost } from './Post';
import '../style/css/App.css';
import axios from 'axios';
import Form from './Form';
import { SearchedPosts } from '../scripts/postsFilter';

const testPosts: IPost[] = [
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
]

function App() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [showPosts, setShowPosts] = useState(false)
  const [selector, setSelector] = useState('none')
  const [value, setValue] = useState('')
  const searchedPostsValue = SearchedPosts(posts, selector, value)

  const queryHandler = async (url: string = 'https://jsonplaceholder.typicode.com/posts') => {
    let responce = await axios.get(url)
    setPosts(responce.data)
  }
  
  const showHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    queryHandler()
    setShowPosts(true)
  }

  return (
    <div className='app'>
      <Form handler={showHandler} value={value} setValue={setValue} selector={selector} setSelector={setSelector}/>
      {showPosts && <Posts title='Posts' posts={searchedPostsValue} />}
    </div>
  );
}

export default App;
