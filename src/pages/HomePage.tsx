import React, { useEffect } from 'react'
import { currentPageSelector } from '../store/posts/selectors'
import { fetchPosts } from '../store/posts/actions'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import PostsContainer from '../containers/PostsContainer'

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const currentPage = useAppSelector(currentPageSelector)

    useEffect(() => {
        dispatch(
            fetchPosts({
                page: currentPage,
                pageSize: 20
            })
        )
    }, [dispatch])

    return <PostsContainer />
}

export default HomePage
