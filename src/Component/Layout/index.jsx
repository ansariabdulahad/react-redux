import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/auth.slice";

const menus = [
    {
        label: "Home",
        to: '/'
    },
    {
        label: "Images",
        to: '/images'
    },
    {
        label: "Login",
        to: '/login'
    }
];

const Layout = ({ children }) => {

    const dispatch = useDispatch();
    const auth = useSelector(response => response.authSlice);

    return (
        <>
            <>
                <div>
                    <div className="flex justify-around items-center bg-slate-900">
                        <h1 className="text-white text-2xl font-bold">Redux</h1>
                        <ul className="flex gap-8">
                            {
                                menus?.map((item, index) => (
                                    <>
                                        <>
                                            {
                                                (auth.user && item.to) !== '/login' &&
                                                <li className="p-4 sm:p-6 hover:bg-indigo-600" key={index}>
                                                    <Link className="text-white capitalize font-semibold" to={item?.to} key={index}>{item?.label}</Link>
                                                </li>
                                            }
                                        </>
                                    </>
                                ))
                            }
                        </ul>
                        {
                            auth.user &&
                            <div className="relative">
                                <button className="overflow-hidden w-8 h-8 bg-orange-600 rounded-full">
                                    <img
                                        src={auth.user.image}
                                        alt="dummy"
                                        className="w-full h-full"
                                    />
                                </button>
                                <div className="flex flex-col bg-white shadow-lg absolute right-1 top-12 sm:top-14">
                                    <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">My Profile</button>
                                    <button className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">{auth.user.email}</button>
                                    <button
                                        onClick={() => dispatch(logout())}
                                        className="px-4 py-2 hover:bg-indigo-600 hover:text-white text-left">Logout</button>
                                </div>
                            </div>
                        }
                    </div>
                    <div>{children}</div>
                    <div className="bg-slate-900 p-32">
                        <h1 className="text-white text-4xl sm:text-6xl font-bold">FOOTER</h1>
                    </div>
                </div>
            </>
        </>
    );
}

export default Layout;