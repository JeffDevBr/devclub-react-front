import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ListOrder from "./pages/ListOrder"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/lista-de-pedidos",
      element: <ListOrder />,
    },
  ])

  export default router