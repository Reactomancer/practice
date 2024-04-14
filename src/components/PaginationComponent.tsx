import Pagination from '@mui/material/Pagination'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { currentPageSelector } from '../store/posts/selectors'
import { fetchPosts } from '../store/posts/actions'

const PaginationComponent: React.FC = () => {
    const currentPage = useAppSelector(currentPageSelector)
    const dispatch = useAppDispatch()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(
            fetchPosts({
                page: value,
                pageSize: 20
            })
        )
    }
    return <Pagination className="flex justify-center my-6 items-center" count={5} page={currentPage} color="primary" onChange={handleChange} />
}

export default PaginationComponent
