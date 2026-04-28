import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import Albums from "./pages/Albums/Albums.jsx";
import AlbumDetail from "./pages/Albums/AlbumDetail/AlbumDetail.jsx";
import OverOns from "./pages/Over ons/OverOns.jsx";
import Clublied from "./pages/Over ons/Clublied/Clublied.jsx";
import Boekje from "./pages/Over ons/Boekje/Boekje.jsx";
import Statuten from "./pages/Over Ons/Statuten/Statuten.jsx";
import Werkgroepen from "./pages/Over Ons/Werkgroepen/Werkgroepen.jsx";
import Sponsors from "./pages/Over Ons/Sponsors/Sponsors.jsx";
import Stamboom from "./pages/Over Ons/Stamboom/Stamboom.jsx";
import Praesidium from "./pages/Praesidium/Praesidium.jsx";
import Ereleden from "./pages/Praesidium/Ereleden/Ereleden.jsx";
import Superschachten from "./pages/Praesidium/Superschachten/Superschachten.jsx";
import Evenementen from "./pages/Evenementen/Evenementen.jsx";
import EventDetail from "./pages/Evenementen/EventDetail/EventDetail.jsx";
import EventEnlistForm from "./pages/Evenementen/EventEnlistForm.jsx";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy.jsx";
import CookiePolicy from "./pages/Legal/CookiePolicy.jsx";
import Huisstijl from "./pages/Huisstijl/Huisstijl.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", Component: Home },

      { path: "/over-ons", Component: OverOns },
      { path: "/over-ons/clublied", Component: Clublied },
      { path: "/over-ons/boekje", Component: Boekje },
      { path: "/over-ons/statuten", Component: Statuten },
      { path: "/over-ons/werkgroepen", Component: Werkgroepen },
      { path: "/over-ons/sponsors", Component: Sponsors },
      { path: "/over-ons/stamboom", Component: Stamboom },

      { path: "/albums", Component: Albums },
      { path: "/albums/:id", Component: AlbumDetail },

      { path: "/praesidium", Component: Praesidium },
      { path: "/praesidium/ereleden", Component: Ereleden },
      { path: "/praesidium/superschachten", Component: Superschachten },

      { path: "/evenementen", Component: Evenementen },
      { path: "/evenementen/:id", Component: EventDetail },
      { path: "/evenementen/:id/inschrijven", Component: EventEnlistForm },

      { path: "/sponsors", Component: Sponsors },

      { path: "/cookie-policy", Component: CookiePolicy },
      { path: "/privacy-policy", Component: PrivacyPolicy },
      { path: "/huisstijl", Component: Huisstijl },
      { path: "*", Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
