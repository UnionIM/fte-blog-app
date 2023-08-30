import { Login, Home, Post, SignUp, CreatePost } from "../pages";

const routesWithoutLogin = [
  { path: "/", component: Home },
  { path: `/posts/:postId`, component: Post },
];

const loginSignUp = [
  { path: "/login", component: Login },
  { path: "/sign-up", component: SignUp },
];

export const publicRoutes = [...routesWithoutLogin, ...loginSignUp];

export const privateRoutes = [
  ...routesWithoutLogin,
  { path: "/posts/create", component: CreatePost },
];
