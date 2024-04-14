import UserInfo from '../components/UserInfo'
import PostComponent from '../components/PostComponent'
import { useAppSelector } from '../store/hooks'
import { loadingSelector } from '../store/posts/selectors'

import CommentsComponent from '../components/Comment'
import Loader from '../components/Loader'

export const PostContainer: React.FC = () => {
    const isLoading = useAppSelector(loadingSelector)
    return (
        <>
            {!isLoading ? (
                <>
                    <PostComponent />
                    <UserInfo />
                    <CommentsComponent />
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default PostContainer
