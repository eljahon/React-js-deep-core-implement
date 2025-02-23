import { useContext } from "react";
import { RouterContext } from "./RouterProvider";
export const useRouter = () => {
    return useContext(RouterContext);
  };
  