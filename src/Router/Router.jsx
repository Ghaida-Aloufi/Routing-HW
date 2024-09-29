
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Paris from '../Pages/Paris'
import Rome from '../Pages/Rome'
import Dubai from '../Pages/Dubai'
import Tokyo from '../Pages/Tokyo'
import NewYork from '../Pages/NewYork'
import App from "../App";


const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Paris",
    element: <Paris/>,
  },
  {
    path: "/Rome",
    element: <Rome/>,
  },
  {
    path: "/Dubai",
    element: <Dubai/>,
  },
  {
    path: "/Tokyo",
    element: <Tokyo/>,
  },
  {
    path: "/NewYork",
    element: <NewYork/>,
  },
]);

export default router
