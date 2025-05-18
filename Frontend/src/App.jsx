import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login"
import Home from "./components/Home";
import Signup from "./components/auth/SignUp";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
   {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
   {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
])

function App(){
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App