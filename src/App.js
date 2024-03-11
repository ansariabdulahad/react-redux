import 'animate.css';
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home";
import Images from "./Component/Images";
import Layout from "./Component/Layout";
import NotFound from "./Component/404";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Protected from './Protected';

// OLD WAY TO HANDLE ROUTING
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout><Home /></Layout>
//   },
//   {
//     path: '/images',
//     element: <Layout><Images /></Layout>
//   },
//   {
//     path: '/login',
//     element: <Layout><Login /></Layout>
//   },
//   {
//     path: '/profile',
//     element: <Layout><Profile /></Layout>
//   },
//   {
//     path: '/*',
//     element: <Layout><NotFound /></Layout>
//   }
// ]);

// const App = () => {
//   return (
//     <>
//       <>
//         <RouterProvider
//           router={router}
//         />
//       </>
//     </>
//   );
// }

// NEW WAY TO HANDLE ROUTING
const App = () => {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout><Home /></Layout>} />
            <Route path='/images' element={<Layout><Images /></Layout>} />
            <Route element={<Protected />}>
              <Route path='/profile' element={<Layout><Profile /></Layout>} />
            </Route>
            <Route path='/login' element={<Layout><Login /></Layout>} />
            <Route path='/*' element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;