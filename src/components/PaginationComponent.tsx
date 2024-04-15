import Pagination from '@mui/material/Pagination'
import { useAppDispatch } from '../store/hooks'
import { fetchPosts } from '../store/posts/actions'

interface CurrentPage {
    currentPage: number | undefined
}

const PaginationComponent: React.FC<CurrentPage> = ({ currentPage }) => {
    const dispatch = useAppDispatch()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(
            fetchPosts({
                page: value,
                pageSize: 20
            })
        )
    }
    return (
        <Pagination
            className="flex justify-center my-6 items-center"
            count={5}
            page={currentPage} 
            color="primary"
            onChange={handleChange}
        />
    )
}

export default PaginationComponent
