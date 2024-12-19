import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import Home from './Pages/Home/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/home',
        element: <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 <div className='max-w-screen-lg mx-auto'>
   <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
 </div>
)
