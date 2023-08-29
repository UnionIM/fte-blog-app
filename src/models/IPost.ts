import { TUser } from "./TUser";

export interface IPostData {
  author: TUser;
  createdAt: string;
  description: string;
  id: string;
  image: string | null;
  rating: string;
  title: string;
}
