import { Login, Home, Post, SignUp } from "../pages";

export const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/sign-up", component: SignUp },
  { path: "/", component: Home },
  { path: `/posts/:postId`, component: Post },
];

export const privateRoutes = [{ path: "/", component: Home }];
