const Login = () => {
    return (
        <>
            <>
                <div className="flex justify-center items-center min-h-screen bg-red-100">
                    <div className="flex flex-col gap-y-4 bg-white m-2 sm:m-0 rounded-lg px-8 py-6 w-96 shadow-lg">
                        <h1 className="text-2xl font-semibold text-slate-800">Login</h1>
                        <form className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2">
                                <label className="text-slate-600 font-semibold">Username</label>
                                <input
                                    type="email"
                                    placeholder="@gmail.com"
                                    required
                                    className="p-2 border border-slate-200 rounded"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-slate-600 font-semibold">Password</label>
                                <input
                                    type="password"
                                    placeholder="********"
                                    required
                                    className="p-2 border border-slate-200 rounded"
                                />
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <div className="flex gap-x-2 items-center justify-center">
                                    <input type="checkbox" name="remember" />
                                    <label className="text-slate-600 font-semibold">Remember Me !</label>
                                </div>
                                <button className="bg-indigo-500 hover:bg-indigo-400 px-6 py-2 text-white font-semibold rounded-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        </>
    );
}

export default Login;