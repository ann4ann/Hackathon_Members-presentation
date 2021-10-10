import FavoritesPage from "../layouts/favorites";
import MainPage from "../layouts/main";
import MembersPage from "../layouts/memberPage";

export const publicRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/favorites", component: FavoritesPage, exact: true },
  { path: "/members/:memberId?", component: MembersPage, exact: true }
];
