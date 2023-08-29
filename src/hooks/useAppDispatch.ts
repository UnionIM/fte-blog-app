import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/reducers";

export const useAppDispatch = () => useDispatch<AppDispatch>();
