import FavoritePostsPage from "./pages/FavoritePostsPage";
import PostsPage from "./pages/PostsPage";

interface Iroutes {
  path: string;
  linkTitle: string;
  element: JSX.Element;
}

export const routes: Iroutes[] = [
  {path: '/', linkTitle: 'home', element: <PostsPage />},
  {path: '/favorite', linkTitle: 'favorite', element: <FavoritePostsPage />},
]