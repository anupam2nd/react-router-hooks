import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Contact from "../component/Contact";
import Book from "../component/Book";
import NotFound from "../component/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book/:id",
        element: <Book />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
//  <Route path="/book" element={<h1>Book component</h1>} />;
