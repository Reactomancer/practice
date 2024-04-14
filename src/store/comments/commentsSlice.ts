import { createSlice } from '@reduxjs/toolkit'
import { fetchComments } from './actions'

export interface CommentsState {
    comments?: {
        postId: number
        id: number
        name: string
        email: string
        body: string
    }[]
    loading: boolean
    error: string | null
}

const initialState: CommentsState = {
    loading: false,
    error: null
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        resetComments: (state) => {
            delete state.comments
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false
                state.comments = action.payload
            })
            .addCase(fetchComments.rejected, (state) => {
                state.loading = false
                state.error = 'Failed to fetch comments'
            })
    }
})

export default commentsSlice.reducer
