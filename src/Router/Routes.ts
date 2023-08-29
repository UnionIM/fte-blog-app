import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import Post from "../pages/Post";

export const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/", component: Home },
  { path: `/posts/:postId`, component: Post },
];

export const privateRoutes = [{ path: "/", component: Home }];
