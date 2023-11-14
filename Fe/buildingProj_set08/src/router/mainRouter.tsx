import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../common/Layout";
// import { HomeScreen } from "../pages/HomeScreen";
import { Home } from "../pages/Home";
import { AnimalMatch } from "../pages/AnimalMatch";
import { NumberMatch } from "../pages/NumberMatch";
import { ColorMatch } from "../pages/ColorMatching";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/animalGame",
    element: <AnimalMatch />,
  },
  {
    path: "/numberGame",
    element: <NumberMatch />,
  },
  {
    path: "/colorGame",
    element: <ColorMatch />,
  },
]);
