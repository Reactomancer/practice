import { createSlice } from '@reduxjs/toolkit'
import { fetchPostById, fetchPosts, fetchPostsByText } from './actions'

export interface PostsState {
    posts?: { userId: number; id: number; title: string; body: string }[]
    post?: {
        userId: number
        id: number
        title: string
        body: string
    }
    pagination: {
        page: number
        pageSize: number
    }
    currentPage: number
    loading: boolean
    error: string | null
}

const initialState: PostsState = {
    pagination: {
        page: 1,
        pageSize: 20
    },
    currentPage: 1,
    loading: false,
    error: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        resetPost: (state) => {
            delete state.post
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
                state.currentPage = action.meta.arg.page ?? state.currentPage
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = false
                state.error = 'Failed to fetch posts'
            })
            .addCase(fetchPostsByText.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPostsByText.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(fetchPostById.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.loading = false
                state.post = action.payload
            })
            .addCase(fetchPostById.rejected, (state) => {
                state.loading = false
                state.error = 'Failed to fetch post'
            })
    }
})

export default postsSlice.reducer
