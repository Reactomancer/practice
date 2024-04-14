import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { fetchPostsByText } from '../store/posts/actions'
import { useAppDispatch } from '../store/hooks'

const SearchInput: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleHome = () => {
        dispatch(
            fetchPostsByText({
                searchText: ''
            })
        )
        navigate('/')
    }

    return (
        <div className="flex flex-col gap-14">
            <span className="text-3xl font-bold text-center mt-6">No Results Found</span>
            <Button onClick={handleHome}>Home</Button>
        </div>
    )
}

export default SearchInput
