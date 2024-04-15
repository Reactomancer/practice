import UserInfo from '../components/UserInfo'
import PostComponent from '../components/PostComponent'
import { useAppSelector } from '../store/hooks'
import { loadingSelector } from '../store/posts/selectors'
import { commentsLoadingSelector, commentsSelector } from '../store/comments/selectors'
import CommentsComponent from '../components/Comment'
import Loader from '../components/Loader'

export const PostContainer: React.FC = () => {
    const isLoading = useAppSelector(loadingSelector)
    const isCommentsLoading = useAppSelector(commentsLoadingSelector)
    const comments = useAppSelector(commentsSelector)
    return (
        <>
            {!isLoading ? (
                <>
                    <PostComponent />
                    <UserInfo />
                    <CommentsComponent comments={comments} isCommentsLoading={isCommentsLoading} />
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default PostContainer
