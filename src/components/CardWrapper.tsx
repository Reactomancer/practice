import { PostCard } from './Card'

interface Post {
    userId: number
    id: number
    title: string
    body: string
}
interface PostsProps {
    posts: Post[] | undefined
}

const CardWrapper: React.FC<PostsProps> = ({ posts }) => {
    return (
        <div className="my-8 flex flex-col mx-8 gap-8 sm:flex-row flex-wrap justify-center">
            {posts?.map((post) => <PostCard id={post?.id} title={post.title} key={post?.id} />)}
        </div>
    )
}

export default CardWrapper
