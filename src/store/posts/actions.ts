import axios from 'axios'
import { createAppAsyncThunk } from '../hooks'
import { paginationSelector } from './selectors'

export interface FetchPostsParams {
    page?: number
    pageSize?: number
}

export interface FetchPostsByTextParams {
    searchText?: string
}

export interface FetchPostByIdParams {
  postId: number
}

export const fetchPosts = createAppAsyncThunk('posts/fetchPosts', async (params: FetchPostsParams, { getState }) => {
    const pagination = paginationSelector(getState())
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${params?.page ?? pagination.page}&_limit=${params?.pageSize ?? pagination.pageSize}`
    )
    return response.data
})

export const fetchPostsByText = createAppAsyncThunk('posts/fetchPostsByText', async (params: FetchPostsByTextParams, { getState }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?title_like=${params.searchText}`)
    return response.data
})

export const fetchPostById = createAppAsyncThunk('posts/fetchPostById', async (params: FetchPostByIdParams, { getState }) => {
  const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  )
  return response.data
})

