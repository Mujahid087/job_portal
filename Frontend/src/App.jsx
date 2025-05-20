import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login"
import Home from "./components/Home";
import Signup from "./components/auth/SignUp";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";
import Companies from "./components/admin/Companies";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import CompanyCreate from "./components/admin/CompaniesCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";
import JobDescription from "./components/JobDescription";


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
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
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