import axios from 'axios'
import { createAppAsyncThunk } from '../hooks'

export interface FetchCommentsParams {
    postId: number
}

export const fetchComments = createAppAsyncThunk('post/fetchComments', async (params: FetchCommentsParams, { getState }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
    return response.data
})
