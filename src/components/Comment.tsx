import { commentsLoadingSelector, commentsSelector } from '../store/comments/selectors'
import { useAppSelector } from '../store/hooks'
import Loader from './Loader'

export const Comments: React.FC = () => {
    const isCommentsLoading = useAppSelector(commentsLoadingSelector)
    const comments = useAppSelector(commentsSelector)

    return (
        <>
            <h2 className="text-3xl font-bold text-center md:text-left md:ml-8">Комментарии</h2>
            {!isCommentsLoading ? (
                comments && comments.length > 0 ? (
                    comments?.map((comment) => {
                        return (
                            <div key={comment?.id}>
                                <div className="flex flex-col gap-4 p-4 rounded border-2 m-4 mt-6 md:ml-8 w-fit">
                                    <ul className="flex flex-col gap-2">
                                        <span>
                                            <span className="font-bold">Пользователь</span>: {comment.email}
                                        </span>
                                        <h1>{comment.name}</h1>
                                        <p> {comment.body}</p>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p className="text-center text-2xl p-6">Нет комментариев</p>
                )
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Comments
