import { RootState } from '..'

export const commentsSelector = (state: RootState) => state.comments.comments
export const commentsLoadingSelector = (state: RootState) => state.comments.loading
export const commentsErrorSelector = (state: RootState) => state.comments.error
