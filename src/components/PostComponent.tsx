import Loader from './Loader'
interface Post {
    userId: number
    id: number
    title: string
    body: string
}
interface User {
    id: null | number
    name: string
    username: string
    email: string
}
interface PostProps {
    user: User | undefined
    post: Post | undefined
    isLoading: boolean
}

export const PostComponent: React.FC<PostProps> = ({ post, user, isLoading }) => {
    return (
        <>
            {!isLoading ? (
                <>
                    <article className="rounded m-4 mt-6 flex flex-col gap-4 md:w-1/2 md:mx-auto">
                        <h1 className="text-3xl font-bold text-center mb-3">{post?.title}</h1>
                        <div className="flex flex-col gap-4 p-4 rounded border-2 border-[#1976d2]">
                            <p className="text-xl">{post?.body}</p>
                            <span className="font-bold">Автор: {user?.name}</span>
                        </div>
                    </article>
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default PostComponent
