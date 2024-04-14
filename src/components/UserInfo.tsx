import { useAppSelector } from '../store/hooks'
import { userByIdSelector, userLoadingSelector } from '../store/users/selectors'
import Loader from './Loader'

export const UserInfo: React.FC = () => {
    const user = useAppSelector(userByIdSelector)
    const isUserLoading = useAppSelector(userLoadingSelector)

    return (
        <>
            {!isUserLoading ? (
                <div className="flex flex-col gap-4 p-4 rounded border-2 m-4 mt-6 border-[#1976d2] md:w-1/2 md:mx-auto">
                    <ul>
                        <h2 className="text-xl text-center font-bold py-4">Информация об авторе</h2>
                        <li>
                            <span className="font-bold">Имя</span> : {user?.name}
                        </li>
                        <li>
                            <span className="font-bold">Телефон</span> : {user?.phone}
                        </li>
                        <li>
                            <span className="font-bold">Эл. почта</span> : {user?.email}
                        </li>
                        <li>
                            <span className="font-bold">Веб-сайт</span> : {user?.website}
                        </li>
                    </ul>
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default UserInfo
