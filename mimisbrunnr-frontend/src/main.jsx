import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/Home.jsx'
import Albums from './pages/Albums/Albums.jsx'
import OverOns from './pages/Over Ons/OverOns.jsx'
import Statuten from './pages/Over Ons/Statuten/Statuten.jsx'
import Sponsors from './pages/Over Ons/Sponsors/Sponsors.jsx'
import Stamboom from './pages/Over Ons/Stamboom/Stamboom.jsx'
import Praesidium from './pages/Praesidium/Praesidium.jsx'
import Ereleden from './pages/Praesidium/Ereleden/Ereleden.jsx'
import Superschachten from './pages/Praesidium/Superschachten/Superschachten.jsx'
import Evenementen from './pages/Evenementen/Evenementen.jsx'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy.jsx';
import CookiePolicy from './pages/Legal/CookiePolicy.jsx';

import Huisstijl from './pages/Huisstijl/Huisstijl.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Layout from './Layout.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', Component: Home },
      { path: '/albums', Component: Albums },

      { path: '/over-ons', Component: OverOns },
      { path: '/over-ons/statuten', Component: Statuten },
      { path: '/over-ons/sponsors', Component: Sponsors },
      { path: '/over-ons/stamboom', Component: Stamboom },

      { path: '/praesidium', Component: Praesidium },
      { path: '/praesidium/ereleden', Component: Ereleden },
      { path: '/praesidium/superschachten', Component: Superschachten },

      { path: '/evenementen', Component: Evenementen },
      { path: '/cookie-policy', Component: CookiePolicy },
      { path: '/privacy-policy', Component: PrivacyPolicy },
      { path: '/huisstijl', Component: Huisstijl },
      { path: '*', Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
