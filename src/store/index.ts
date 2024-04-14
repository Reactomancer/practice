import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import postsSlice from './posts/postsSlice'
import usersSlice from './users/usersSlice'
import commentsSlice from './comments/commentsSlice'

export const store = configureStore({
    reducer: { posts: postsSlice, users: usersSlice, commetns: commentsSlice }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
