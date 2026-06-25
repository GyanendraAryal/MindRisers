import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import { useState } from 'react'
import Layout from './pages/Layout.tsx'
import ProductsListing from './pages/products/ProductsListing.tsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout loggedIn={loggedIn} />,
//     children: [
//       { path: '', element: <Home /> },
//       // Passes the state setter correctly to Login
//       { path: 'login', element: <Login setLoggedIn={setLoggedIn} /> },
//       { path: 'register', element: <Signup /> },
//     ],
//   },
// ])

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout loggedIn={loggedIn} />,
      children: [
        { path: '', element: <Home /> },
        { path: 'login', element: <Login  /> },
        { path: 'register', element: <Signup /> },
        {path:'products',element:<ProductsListing/>}
      ]
    }
  ])

  return (<RouterProvider router={router} />)
}

export default App
