import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Images from "./Component/Images";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/images',
    element: <Images />
  }
]);

const App = () => {
  return (
    <>
      <>
        <RouterProvider
          router={router}
        />
      </>
    </>
  );
}

export default App;