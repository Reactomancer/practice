import { userByIdSelector } from '../store/users/selectors'
import { useAppSelector } from '../store/hooks'
import { loadingSelector, postSelector } from '../store/posts/selectors'
import Loader from './Loader'

export const PostComponent: React.FC = () => {
    const post = useAppSelector(postSelector)
    const isLoading = useAppSelector(loadingSelector)
    const user = useAppSelector(userByIdSelector)

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
                <Loader/>
            )}
        </>
    )
}

export default PostComponent
