import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Images from "./Component/Images";
import Layout from "./Component/Layout";
import NotFound from "./Component/404";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>
  },
  {
    path: '/images',
    element: <Layout><Images /></Layout>
  },
  {
    path: '/*',
    element: <Layout><NotFound /></Layout>
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