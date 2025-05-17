import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login"
import Home from "./components/Home";
import Signup from "./components/auth/SignUp";


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
])

function App(){
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App