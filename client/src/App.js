import React  from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//**Root Route */
const router = createBrowserRouter([
    {
        path:'/',
        element:<div>Root Route</div>

    },
    {
        path:'/register',
        element:<div> Roegister Route</div>

    },
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
