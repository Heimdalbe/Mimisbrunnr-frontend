import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home/Home.jsx';
import Albums from './pages/Albums/Albums.jsx';
import AlbumDetail from './pages/Albums/AlbumDetail/AlbumDetail.jsx';
import OverOns from './pages/Over ons/OverOns.jsx';
import Clublied from './pages/Over ons/Clublied/Clublied.jsx';
import Boekje from './pages/Over ons/Boekje/Boekje.jsx';
import Statuten from './pages/Over ons/Statuten/Statuten.jsx';
import Werkgroepen from './pages/Over ons/Werkgroepen/Werkgroepen.jsx';
import Sponsors from './pages/Over ons/Sponsors/Sponsors.jsx';
import Stamboom from './pages/Over ons/Stamboom/Stamboom.jsx';
import Praesidium from './pages/Praesidium/Praesidium.jsx';
import Ereleden from './pages/Praesidium/Ereleden/Ereleden.jsx';
import Superschachten from './pages/Praesidium/Superschachten/Superschachten.jsx';
import LustrumCommites from './pages/Praesidium/LustrumCommités/Lustrumcommites.jsx';
import Evenementen from './pages/Evenementen/Evenementen.jsx';
import EventDetail from './pages/Evenementen/EventDetail/EventDetail.jsx';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy.jsx';
import CookiePolicy from './pages/Legal/CookiePolicy.jsx';
import Login from './pages/Login/Login.jsx';
import AdminHome from './pages/Admin/Home/AdminHome.jsx';
import AdminAlbums from './pages/Admin/Albums/AdminAlbums.jsx';
import AdminNewAlbum from './pages/Admin/Albums/AdminNewAlbum.jsx';
import AdminEditAlbum from './pages/Admin/Albums/AdminEditAlbum.jsx';
import AdminAlbumImages from './pages/Admin/Albums/AdminAlbumImages.jsx';
import AdminEvents from './pages/Admin/Events/AdminEvents.jsx';
import AdminNewEvent from './pages/Admin/Events/AdminNewEvent.jsx';
import AdminEditEvent from './pages/Admin/Events/AdminEditEvent.jsx';
import AdminPraesidiumMembers from './pages/Admin/Praesidium/Members/AdminPraesidiumMembers.jsx';
import AdminEditPraesidiumMember from './pages/Admin/Praesidium/Members/AdminEditPraesidiumMember.jsx';
import AdminNewPraesidiumMember from './pages/Admin/Praesidium/Members/AdminNewPraesidiumMember.jsx';
import AdminMemberDetails from './pages/Admin/Praesidium/MemberDetails/AdminMemberDetails.jsx';
import AdminEditMemberDetails from './pages/Admin/Praesidium/MemberDetails/AdminEditMemberDetails.jsx';
import AdminNewMemberDetails from './pages/Admin/Praesidium/MemberDetails/AdminNewMemberDetails.jsx';
import AdminSuperSchachten from './pages/Admin/Praesidium/Superschachten/AdminSuperSchachten.jsx';
import AdminEditSuperSchacht from './pages/Admin/Praesidium/Superschachten/AdminEditSuperschacht.jsx';
import AdminNewSuperSchacht from './pages/Admin/Praesidium/Superschachten/AdminNewSuperSchacht.jsx';
import AdminEreleden from './pages/Admin/Praesidium/Ereleden/AdminEreleden.jsx';
import AdminEditErelid from './pages/Admin/Praesidium/Ereleden/AdminEditErelid.jsx';
import AdminNewErelid from './pages/Admin/Praesidium/Ereleden/AdminNewErelid.jsx';
import AdminLustrumMembers from './pages/Admin/Praesidium/LustrumLeden/AdminLustrumMembers.jsx';
import AdminEditLustrumMember from './pages/Admin/Praesidium/LustrumLeden/AdminEditLustrumMember.jsx';
import AdminNewLustrumMember from './pages/Admin/Praesidium/LustrumLeden/AdminNewLustrumMember.jsx';
import AdminPraesidiumRoles from './pages/Admin/Praesidium/Functies/AdminPraesidiumRoles.jsx';
import AdminEditPraesidiumRole from './pages/Admin/Praesidium/Functies/AdminEditPraesidiumRole.jsx';
import AdminNewPraesidiumRole from './pages/Admin/Praesidium/Functies/AdminNewPraesidiumRole.jsx';
import AdminSocials from './pages/Admin/Praesidium/MemberDetails/AdminSocials.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Unauthorized from './pages/NotFound/Unauthorized.jsx';
import Layout from './Layout.jsx';
import ProtectedRoute from './components/Common/ProtectedRoute.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './AdminLayout.jsx';
import AdminEventSponsors from './pages/Admin/Events/AdminEventSponsors.jsx';
import AdminSponsors from './pages/Admin/Sponsors/AdminSponsors.jsx';
import AdminNewSponsor from './pages/Admin/Sponsors/AdminNewSponsor.jsx';
import AdminEditSponsor from './pages/Admin/Sponsors/AdminEditSponsor.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', Component: Home },

      { path: '/over-ons', Component: OverOns },
      { path: '/over-ons/clublied', Component: Clublied },
      { path: '/over-ons/boekje', Component: Boekje },
      { path: '/over-ons/statuten', Component: Statuten },
      { path: '/over-ons/werkgroepen', Component: Werkgroepen },
      { path: '/over-ons/sponsors', Component: Sponsors },
      { path: '/sponsors', Component: Sponsors },
      { path: '/over-ons/stamboom', Component: Stamboom },

      { path: '/albums', Component: Albums },
      { path: '/albums/:id', Component: AlbumDetail },

      { path: '/praesidium', Component: Praesidium },
      { path: '/praesidium/ereleden', Component: Ereleden },
      { path: '/praesidium/superschachten', Component: Superschachten },
      { path: '/praesidium/lustrumcommites', Component: LustrumCommites },

      { path: '/evenementen', Component: Evenementen },
      { path: '/evenementen/:id', Component: EventDetail },

      { path: '/cookie-policy', Component: CookiePolicy },
      { path: '/privacy-policy', Component: PrivacyPolicy },

      { path: '/login', Component: Login },
      { path: '/unauthorized', Component: Unauthorized },
      { path: '*', Component: NotFound },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      { path: '/admin/', Component: AdminHome },

      { path: '/admin/albums', Component: AdminAlbums },
      { path: '/admin/albums/new', Component: AdminNewAlbum },
      { path: '/admin/albums/:id', Component: AdminEditAlbum },
      { path: '/admin/albums/:id/images', Component: AdminAlbumImages },
      { path: '/admin/events', Component: AdminEvents },
      { path: '/admin/events/new', Component: AdminNewEvent },
      { path: '/admin/events/:id', Component: AdminEditEvent },
      { path: '/admin/events/:id/sponsors', Component: AdminEventSponsors },
      { path: '/admin/praesidiumleden', Component: AdminPraesidiumMembers },
      { path: '/admin/praesidiumleden/:id', Component: AdminEditPraesidiumMember },
      { path: '/admin/praesidiumleden/new', Component: AdminNewPraesidiumMember },
      { path: '/admin/superschachten', Component: AdminSuperSchachten },
      { path: '/admin/superschachten/:id', Component: AdminEditSuperSchacht },
      { path: '/admin/superschachten/new', Component: AdminNewSuperSchacht },
      { path: '/admin/ereleden', Component: AdminEreleden },
      { path: '/admin/ereleden/:id', Component: AdminEditErelid },
      { path: '/admin/ereleden/new', Component: AdminNewErelid },
      { path: '/admin/lustrumleden', Component: AdminLustrumMembers },
      { path: '/admin/lustrumleden/:id', Component: AdminEditLustrumMember },
      { path: '/admin/lustrumleden/new', Component: AdminNewLustrumMember },
      { path: '/admin/ledengegevens', Component: AdminMemberDetails },
      { path: '/admin/ledengegevens/:id', Component: AdminEditMemberDetails },
      { path: '/admin/ledengegevens/new', Component: AdminNewMemberDetails },
      { path: '/admin/ledengegevens/:id/socials', Component: AdminSocials },
      { path: '/admin/functies', Component: AdminPraesidiumRoles },
      { path: '/admin/functies/:id', Component: AdminEditPraesidiumRole },
      { path: '/admin/functies/new', Component: AdminNewPraesidiumRole },
      { path: '/admin/sponsors', Component: AdminSponsors },
      { path: '/admin/sponsors/new', Component: AdminNewSponsor },
      { path: '/admin/sponsors/:id', Component: AdminEditSponsor },
      { path: '/admin/*', Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
