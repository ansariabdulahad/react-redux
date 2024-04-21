import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/slices/auth.slice";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const auth = useSelector(response => response.authSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        email: "kminchelle",
        password: "0lelplR"
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        error &&
            setTimeout(() => {
                setError(null);
            }, 3000);
    }, [error]);

    const handleInput = (e) => {
        let input = e.target;
        let key = input.name;

        setUser({
            ...user,
            [key]: input.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'https://dummyjson.com/auth/login',
                data: {
                    username: user.email,
                    password: user.password
                }
            });

            setError(null);
            setLoading(false);
            dispatch(login(data));
            navigate('/profile');

        } catch (error) {
            setError(error.response.data.message)
            setLoading(false);
            dispatch(logout());
        }
    }

    return auth.user
        ? <Navigate to={'/profile'} />
        : (
            <>
                <>
                    <div className="flex flex-col gap-y-4 justify-center items-center min-h-screen bg-red-100">
                        {
                            error &&
                            <div className="rounded-lg bg-red-400 p-4 w-96 border border-white">
                                <h1 className="font-semibold text-white">{error}</h1>
                            </div>
                        }
                        <div className="flex flex-col gap-y-4 bg-white m-2 sm:m-0 rounded-lg px-8 py-6 w-96 shadow-lg">
                            <h1 className="text-2xl font-semibold text-slate-800">Login</h1>
                            <form
                                onSubmit={onSubmit}
                                className="flex flex-col gap-y-4">
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-slate-600 font-semibold">Username</label>
                                    <input
                                        type="text"
                                        placeholder="@gmail.com"
                                        required
                                        className="p-2 border border-slate-200 rounded"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-slate-600 font-semibold">Password</label>
                                    <input
                                        type="password"
                                        placeholder="********"
                                        required
                                        className="p-2 border border-slate-200 rounded"
                                        name="password"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <div className="flex gap-x-2 items-center justify-center">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            disabled={(user.email.length && user.password.length) === 0}
                                        />
                                        <label className="text-slate-600 font-semibold">Remember Me !</label>
                                    </div>
                                    {
                                        loading
                                            ? <button
                                                className="bg-gray-400 px-6 py-2 text-white font-semibold rounded-lg"
                                                disabled
                                            >Loading...</button>
                                            : <button
                                                className="bg-indigo-500 hover:bg-indigo-400 px-6 py-2 text-white font-semibold rounded-lg"
                                            >Login</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            </>
        );
}

export default Login;