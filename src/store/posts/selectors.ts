import { RootState } from "..";

export const postsSelector = (state: RootState) => state.posts.posts
export const postSelector = (state: RootState) => state.posts.post
export const currentPageSelector = (state: RootState) => state.posts.currentPage
export const paginationSelector = (state: RootState) => state.posts.pagination
export const loadingSelector = (state: RootState) => state.posts.loading
export const errorSelector = (state: RootState) => state.posts.error