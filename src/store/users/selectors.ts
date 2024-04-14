import { RootState } from ".."

export const userByIdSelector = (state: RootState) => state.users.user
export const userLoadingSelector = (state: RootState) => state.users.loading
export const userErrorSelector = (state: RootState) => state.users.error