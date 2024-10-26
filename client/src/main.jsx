// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// //import App from './App.jsx'
// import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './components/Layout'
// import ErrorPage from './Pages/ErrorPage'
// import Home from './Pages/Home'
// import PostDetail from './Pages/PostDetail'
// import UserProfile from './Pages/UserProfile'
// import Register from './Pages/Register'
// import Logout from './Pages/Logout'
// import Login from './Pages/Login'
// import EditPosts from './Pages/EditPosts'
// import DeletePosts from './Pages/DeletePosts'
// import Dashboard from './Pages/Dashboard'
// import CreatePosts from './Pages/CreatePosts'
// import CategoryPosts from './Pages/CategoryPosts'
// import Authors from './Pages/Authors'
// import AuthorPosts from './Pages/AuthorPosts'
// import Blog from './Pages/Blog'
// import Article from './Pages/Article'
// import Wiki from './Pages/Wiki'
// import SignUp from "./Pages/SignUp"
// import Team from "./Pages/Team"
// import BlogDetail from "./Pages/BlogDetail"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "posts/:id", element: <PostDetail /> },
//       { path: "profile/:id", element: <UserProfile /> },
//       { path: "register", element: <Register /> },
//       { path: "logout", element: <Logout /> },
//       { path: "login", element: <Login /> },
//       { path: "signup/login", element: <Login /> },
//       { path: "posts/:id/edit", element: <EditPosts /> },
//       { path: "delete-post", element: <DeletePosts /> },
//       { path: "myposts/:id", element: <Dashboard /> },
//       { path: "create", element: <CreatePosts /> },
//       { path: "post/categories/:category", element: <CategoryPosts /> },
//       { path: "authors", element: <Authors /> },
//       { path: "posts/users/:id", element: <AuthorPosts /> },
//       { path: "blogs", element: <Blog /> },
//       { path: "articles", element: <Article /> },
//       { path: "wikis", element: <Wiki /> },
//       { path: "signup", element: <SignUp /> },
//       { path: "team", element: <Team /> },
//       { path: "createpost", element: <CreatePosts /> },
//       { path: "/blog/:id", element: < BlogDetail /> }





//     ]
//   }
// ])



// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//     <RouterProvider router={router} />

//   </StrictMode>
// )


// Importing necessary packages and components
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './Pages/ErrorPage'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'
import UserProfile from './Pages/UserProfile'
import Register from './Pages/Register'
import Logout from './Pages/Logout'
import Login from './Pages/Login'
import EditPosts from './Pages/EditPosts'
import DeletePosts from './Pages/DeletePosts'
import Dashboard from './Pages/Dashboard'
import CreatePosts from './Pages/CreatePosts'
import CategoryPosts from './Pages/CategoryPosts'
import Authors from './Pages/Authors'
import AuthorPosts from './Pages/AuthorPosts'
import Blog from './Pages/Blog'
import Article from './Pages/Article'
import Wiki from './Pages/Wiki'
import SignUp from './Pages/SignUp'
import Team from './Pages/Team'
import BlogDetail from './Pages/BlogDetail'

import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'

// Setting up the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "register", element: <Register /> },
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
      { path: "signup/login", element: <Login /> },
      { path: "posts/:id/edit", element: <EditPosts /> },
      { path: "delete-post", element: <DeletePosts /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "create", element: <CreatePosts /> },
      { path: "post/categories/:category", element: <CategoryPosts /> },
      { path: "authors", element: <Authors /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "blogs", element: <Blog /> },
      { path: "articles", element: <Article /> },
      { path: "wikis", element: <Wiki /> },
      { path: "signup", element: <SignUp /> },
      { path: "team", element: <Team /> },
      { path: "createpost", element: <CreatePosts /> },
      { path: "/blog/:id", element: <BlogDetail /> }
    ]
  }
])


export function Theme() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      <RouterProvider router={router} />
    </ThemeProvider>
  )
}



// Root render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme />
  </StrictMode>
)
