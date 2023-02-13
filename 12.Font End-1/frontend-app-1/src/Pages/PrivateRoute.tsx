
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../Redux/store'

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const isAuth = useAppSelector((store) => store.AuthReducer.isAuth)
    const location = useLocation();
    return isAuth ? children : (
        <Navigate to='/login' replace state={{ data: location.pathname }} />
    )
}

