import UserInfo from '../components/UserInfo'
import PostComponent from '../components/PostComponent'
import { useAppSelector } from '../store/hooks'
import { commentsLoadingSelector, commentsSelector } from '../store/comments/selectors'
import CommentsComponent from '../components/Comment'
import Loader from '../components/Loader'
import { userByIdSelector, userLoadingSelector } from '../store/users/selectors'
import { loadingSelector, postSelector } from '../store/posts/selectors'

export const PostContainer: React.FC = () => {
    const isLoading = useAppSelector(loadingSelector)
    const isCommentsLoading = useAppSelector(commentsLoadingSelector)
    const comments = useAppSelector(commentsSelector)
    const post = useAppSelector(postSelector)
    const user = useAppSelector(userByIdSelector)
    const isUserLoading = useAppSelector(userLoadingSelector)

    return (
        <>
            {!isLoading ? (
                <>
                    <PostComponent post={post} user={user} isLoading={isLoading} />
                    <UserInfo user={user} isUserLoading={isUserLoading} />
                    <CommentsComponent comments={comments} isCommentsLoading={isCommentsLoading} />
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default PostContainer
