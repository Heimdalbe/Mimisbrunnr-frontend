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
import Jaarthema from './pages/Jaarthema/Jaarthema.jsx';
import Erestuff from './pages/Erestuff/Erestuff.jsx';
import AdminSocialTypes from './pages/Admin/SocialTypes/AdminSocialTypes.jsx';
import AdminNewSocialType from './pages/Admin/SocialTypes/AdminNewSocialType.jsx';
import AdminEditSocialType from './pages/Admin/SocialTypes/AdminEditSocialType.jsx';
import Account from './pages/Account/Account/Account.jsx';
import PasswordReset from './pages/Account/PasswordReset/PasswordReset.jsx';
import Registreer from './pages/Account/Registreer/Registreer.jsx';
import AdminAccounts from './pages/Admin/Accounts/AdminAccounts.jsx';
import AdminEditAccount from './pages/Admin/Accounts/AdminEditAccount.jsx';
import AdminEditPassword from './pages/Admin/Accounts/AdminEditPassword.jsx';

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

      { path: '/jaarthema', Component: Jaarthema },

      { path: '/erestuff', Component: Erestuff },

      { path: '/privacy-policy', Component: PrivacyPolicy },

      { path: '/account', Component: Account },
      { path: '/account/password-reset', Component: PasswordReset },
      { path: '/register', Component: Registreer },

      { path: '/login', Component: Login },
      { path: '/unauthorized', Component: Unauthorized },
      { path: '*', Component: NotFound },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/',
        element: (
          <ProtectedRoute roles={['EventEditor', 'MediaEditor', 'SponsorEditor']}>
            <AdminHome />
          </ProtectedRoute>
        ),
      },

      // Accounts — Hmdl only
      {
        path: '/admin/accounts',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminAccounts />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/accounts/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditAccount />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/accounts/:id/password',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditPassword />
          </ProtectedRoute>
        ),
      },

      // Albums — MediaEditor
      {
        path: '/admin/albums',
        element: (
          <ProtectedRoute role="MediaEditor">
            <AdminAlbums />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/albums/new',
        element: (
          <ProtectedRoute role="MediaEditor">
            <AdminNewAlbum />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/albums/:id',
        element: (
          <ProtectedRoute role="MediaEditor">
            <AdminEditAlbum />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/albums/:id/images',
        element: (
          <ProtectedRoute role="MediaEditor">
            <AdminAlbumImages />
          </ProtectedRoute>
        ),
      },

      // Events — EventEditor
      {
        path: '/admin/events',
        element: (
          <ProtectedRoute role={['EventEditor', 'SponsorEditor']}>
            <AdminEvents />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/events/new',
        element: (
          <ProtectedRoute role="EventEditor">
            <AdminNewEvent />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/events/:id',
        element: (
          <ProtectedRoute role="EventEditor">
            <AdminEditEvent />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/events/:id/sponsors',
        element: (
          <ProtectedRoute roles={['EventEditor', 'SponsorEditor']}>
            <AdminEventSponsors />
          </ProtectedRoute>
        ),
      },

      // Hmdl only
      {
        path: '/admin/praesidiumleden',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminPraesidiumMembers />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/praesidiumleden/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditPraesidiumMember />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/praesidiumleden/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewPraesidiumMember />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/superschachten',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminSuperSchachten />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/superschachten/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditSuperSchacht />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/superschachten/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewSuperSchacht />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/ereleden',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEreleden />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/ereleden/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditErelid />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/ereleden/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewErelid />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/lustrumleden',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminLustrumMembers />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/lustrumleden/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditLustrumMember />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/lustrumleden/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewLustrumMember />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/ledengegevens',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminMemberDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/ledengegevens/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditMemberDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/ledengegevens/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewMemberDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/ledengegevens/:id/socials',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminSocials />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/functies',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminPraesidiumRoles />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/functies/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditPraesidiumRole />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/functies/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewPraesidiumRole />
          </ProtectedRoute>
        ),
      },

      {
        path: '/admin/socialtypes',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminSocialTypes />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/socialtypes/new',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminNewSocialType />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/socialtypes/:id',
        element: (
          <ProtectedRoute role="Hmdl">
            <AdminEditSocialType />
          </ProtectedRoute>
        ),
      },

      // Sponsors — SponsorEditor
      {
        path: '/admin/sponsors',
        element: (
          <ProtectedRoute role="SponsorEditor">
            <AdminSponsors />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/sponsors/new',
        element: (
          <ProtectedRoute role="SponsorEditor">
            <AdminNewSponsor />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/sponsors/:id',
        element: (
          <ProtectedRoute role="SponsorEditor">
            <AdminEditSponsor />
          </ProtectedRoute>
        ),
      },

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
