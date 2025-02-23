import { useRouter } from "./useRouter";

export const useRouteMatch = (path) => {
    const { currentPath } = useRouter();
    return currentPath === path;
  };
  