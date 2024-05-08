import {
  createBrowserRouter,
  
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreatJob from "../Pages/CreatJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJobs from "../Pages/UpdateJobs";
import JobDetails from "../Pages/JobDetails";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {path: "/", element: <Home/>},
      {path: "/about", element: <About/>},
      {path: "/post-job", element: <CreatJob/>},
      {path: "/my-job", element: <MyJobs/>},
      {path: "/salary", element: <SalaryPage/>},
      {path: "/edit-job/:id", element: <UpdateJobs/> , loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)},
      {path: "/job/:id", element: <JobDetails/>},
    ],
  },
  {path: "/login", element: <Login/>},
  {path: "/sign-up", element: <SignUp/>},
]);

export default router;