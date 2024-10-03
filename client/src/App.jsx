import Home from "./pages/Home/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/List/ListPage.jsx";
import Layout from "./pages/Layout/Layout.jsx";
import SinglePage from "./pages/Single/SinglePage.jsx";
import Profilepage from "./pages/Profile/Profilepage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "profile", element: <Profilepage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
