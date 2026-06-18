import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import User from "./pages/User";
import GitHub from "./pages/Github";
import OwnTodo from "./pages/OwnTodo";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: '',
//                 element: <Home />
//             },
//             {
//                 path: 'about',
//                 element: <About />
//             },
//             {
//                 path: 'contact',
//                 element: <Contact />
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="github" element={<GitHub/>}/>
            <Route path="owntodo" element={<OwnTodo/>}/>
            <Route path="user/:userId" element={<User/>}/>
        </Route>
    )
)
createRoot(document.getElementById("root")).render(
    <>
        {/* <App /> */}
        <RouterProvider router={router} />
    </>
);
