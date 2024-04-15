import { useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { fetchPostsByText } from '../store/posts/actions'

const SearchInput: React.FC = () => {
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState('')
    const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value)
    }
    const handleSearchClick = () => {
        dispatch(
            fetchPostsByText({
                searchText: inputValue
            })
        )
    }

    return (
        <div className="mt-12">
            <div className="flex w-full flex-wrap justify-center ">
                <TextField label="Поиск" variant="outlined" value={inputValue} onChange={handleSearch} />
                <Button variant="contained" onClick={handleSearchClick}>
                    <img src="../images/search.svg" alt="search Icon" />
                </Button>
            </div>
        </div>
    )
}

export default SearchInput
