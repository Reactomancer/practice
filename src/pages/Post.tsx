import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostContainer from '../containers/PostContainer'
import { useAppDispatch } from '../store/hooks'
import { fetchPostById } from '../store/posts/actions'
import { postsSlice } from '../store/posts/postsSlice'
import { fetchUserById } from '../store/users/actions'
import { fetchComments } from '../store/comments/actions'
import { commentsSlice } from '../store/comments/commentsSlice'

export const Post: React.FC = () => {
    const dispatch = useAppDispatch()
    const { postId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postData = await dispatch(fetchPostById({ postId: Number(postId) })).unwrap()
                await dispatch(fetchUserById({ userId: Number(postData.userId) }))
                await dispatch(fetchComments({ postId: Number(postId) }))
            } catch (error) {
                console.error('Failed to fetch data:', error)
            }
        }

        fetchData()

        return () => {
            dispatch(postsSlice.actions.resetPost())
            dispatch(commentsSlice.actions.resetComments())
        }
    }, [dispatch, postId])

    return <PostContainer />
}

export default Post
