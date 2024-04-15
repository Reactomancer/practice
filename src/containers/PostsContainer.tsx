import CardWrapper from '../components/CardWrapper'
import { currentPageSelector, loadingSelector, postsSelector } from '../store/posts/selectors'
import { useAppSelector } from '../store/hooks'
import Loader from '../components/Loader'
import PaginationComponent from '../components/PaginationComponent'
import SearchInput from '../components/SearchInput'
import NotFoundComponent from '../components/NotFoundComponent'

const PostsContainer: React.FC = () => {
    const posts = useAppSelector(postsSelector)
    const isLoading = useAppSelector(loadingSelector)
    const currentPage = useAppSelector(currentPageSelector)

    return (
        <div>
            <SearchInput />
            {!isLoading ? (
                <div>
                    {posts?.length ? <CardWrapper posts={posts} /> : <NotFoundComponent />}
                    {posts != null && posts.length > 10 && <PaginationComponent currentPage={currentPage} />}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default PostsContainer
