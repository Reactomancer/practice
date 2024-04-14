import * as React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const PostCard: React.FC<{ title: string; id: number | null }> = (post) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(`/post/${post.id}`)
    return (
        <div className="border border-[#1976d2] p-6 rounded flex flex-col w-full sm:w-1/2 md:w-1/2 xl:w-1/4 justify-between items-center gap-2">
            <p>{post.id}</p>
            <p>{post.title}</p>
            <Button size="medium" onClick={handleClick}>
                Learn More
            </Button>
        </div>
    )
}
