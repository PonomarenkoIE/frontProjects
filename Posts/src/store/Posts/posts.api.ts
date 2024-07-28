import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../components/Post';

export const postsApi = createApi({
  reducerPath: 'posts/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    getPosts: build.query<IPost[], void>({
      query: () => 'posts/',
    }),
    getPostComments: build.query<IPost[], string>({
      query: (id: string) => ({
        url: `${id}/comments`,
      })
    })
  })
})

export const {
  useGetPostsQuery, 
  useGetPostCommentsQuery
} = postsApi