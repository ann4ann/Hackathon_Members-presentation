import FavoritesPage from "../layouts/FavoritesPage/FavoritesPage";
import MainPage from "../layouts/MainPage/MainPage";
import TeamPage from "../layouts/TeamPage/TeamPage";

export const publicRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/favorites", component: FavoritesPage, exact: true },
  { path: "/members/:memberId?", component: TeamPage, exact: true }
];
