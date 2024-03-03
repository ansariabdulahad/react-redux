import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const url = e.target[0].value;
        alert(url);
    }

    return (
        <>
            <>
                <div className="flex items-center justify-center bg-amber-50 min-h-screen">
                    <div className="flex gap-y-6 flex-col border rounded-lg p-4 shadow-lg w-6/12">
                        <h1 className="text-6xl font-bold  text-violet-600">
                            Paste Image URL
                        </h1>
                        <div>
                            <form className="flex flex-col gap-y-4"
                                onSubmit={onSubmit}
                            >
                                <input
                                    type="url"
                                    className="border border-violet-600 rounded-lg w-full p-3"
                                    placeholder="http://localhost:3000/"
                                    required
                                />
                                <div className="flex items-center gap-x-3">
                                    <button
                                        className="bg-violet-600 text-white rounded px-6 py-2.5"
                                    >SUBMIT</button>
                                    <Link
                                        to={'/images'}
                                        className="font-semibold text-gray-500"
                                    >
                                        View
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Home;