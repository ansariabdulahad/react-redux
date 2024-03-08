import React from "react";
import { Link } from "react-router-dom";

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
    return (
        <>
            <>
                <div>
                    <div className="flex justify-around items-center bg-slate-900">
                        <h1 className="text-white text-2xl font-bold">Redux</h1>
                        <ul className="flex gap-8">
                            {
                                menus?.map((item, index) => (
                                    <li className="p-4 sm:p-6 hover:bg-indigo-600" key={index}>
                                        <Link className="text-white capitalize font-semibold" to={item?.to}>{item?.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
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