import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "../../redux/slices/images.slice";

const Home = () => {

    const dispatch = useDispatch();
    const response = useSelector(response => response);
    const { imagesSlice } = response;

    const onSubmit = (e) => {
        e.preventDefault();

        const url = e.target[0].value;
        dispatch(addImage(url));
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
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {
                                        imagesSlice && imagesSlice.map((item, index) => (
                                            <img
                                                onClick={() => dispatch(removeImage(index))}
                                                key={index}
                                                src={item}
                                                alt={item}
                                                width={400}
                                            />
                                        ))
                                    }
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