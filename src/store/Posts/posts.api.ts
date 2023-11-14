import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../components/Post';
import { IComment } from '../../components/Comment';

export const postsApi = createApi({
  reducerPath: 'posts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getPosts: build.query<IPost[], void>({
      query: () => '/',
    }),
    getPostComments: build.query<IComment[], number>({
      query: (id: number) => ({
        url: `/${id}/comments`,
      })
    })
  })
})

export const {
  useGetPostsQuery, 
  useGetPostCommentsQuery
} = postsApi