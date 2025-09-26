import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CatalogoDBKai from "./pages/Catalogo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalogo",
    element: <CatalogoDBKai />,
  },
]);

export default router;
