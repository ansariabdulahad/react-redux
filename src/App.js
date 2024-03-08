import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Images from "./Component/Images";
import Layout from "./Component/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>
  },
  {
    path: '/images',
    element: <Layout><Images /></Layout>
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