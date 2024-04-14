import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from './actions'

export interface UsersState {
    user?: {
        id: null | number
        name: string
        username: string
        email: string
        address: {
            street: string
            suite: string
            city: string
            zipcode: string
            geo: {
                lat: string
                lng: string
            }
        }
        phone: string
        website: string
        company: {
            name: string
            catchPhrase: string
            bs: string
        }
    }
    loading: boolean
    error: string | null
}

const initialState: UsersState = {
    loading: false,
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(fetchUserById.rejected, (state) => {
                state.loading = false
                state.error = 'Failed to fetch user'
            })
    }
})

export const {} = usersSlice.actions

export default usersSlice.reducer
