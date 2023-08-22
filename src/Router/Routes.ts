import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Post from "../pages/Post";
import SignUp from "../pages/SignUp/SignUp";

export const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/sign-up", component: SignUp },
  { path: "/", component: Home },
  { path: `/posts/:postId`, component: Post },
];

export const privateRoutes = [{ path: "/", component: Home }];
