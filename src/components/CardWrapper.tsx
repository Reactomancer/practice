import { useAppSelector } from "../store/hooks"
import { postsSelector } from "../store/posts/selectors"
import { PostCard } from "./Card"


const CardWrapper: React.FC = () => {
    const posts = useAppSelector(postsSelector)
    return <div className="my-8 flex flex-col mx-8 gap-8 sm:flex-row flex-wrap justify-center">{posts?.map((post) => <PostCard id={post?.id} title={post.title} key={post?.id} />)}</div>
}

export default CardWrapper
