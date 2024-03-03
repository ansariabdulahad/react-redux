import { useDispatch, useSelector } from "react-redux";
import { removeImage } from "../../redux/slices/images.slice";

const Images = () => {

    const dispatch = useDispatch();
    const response = useSelector(response => response);
    const { imagesSlice } = response;

    return (
        <>
            <>
                <div className="p-16">
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 text-center">
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
                </div>
            </>
        </>
    );
}

export default Images;