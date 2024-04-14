import axios from "axios"
import { createAppAsyncThunk } from "../hooks"

export interface FetchUserByIdParams {
  userId: number
}

export const fetchUserById = createAppAsyncThunk('post/fetchUserById', async (params: FetchUserByIdParams, { getState }) => {
  const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.userId}`
  )
  return response.data
})