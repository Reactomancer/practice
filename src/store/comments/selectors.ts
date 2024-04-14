import { RootState } from '..'

export const commentsSelector = (state: RootState) => state.commetns.comments
export const commentsLoadingSelector = (state: RootState) => state.posts.loading
export const commentsErrorSelector = (state: RootState) => state.posts.error
