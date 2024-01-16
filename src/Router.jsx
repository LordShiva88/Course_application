import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./Layout/Mainlayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home /> },
      {
        path: 'courses',
        element: <Courses/>
      }
      
    ],
  },
]);

export default Router;
