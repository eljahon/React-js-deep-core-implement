import { useRouteMatch } from "./useRouteMatch";

export const Route = ({ path, component }) => {
    const match = useRouteMatch(path);
    return match ? component : null;
  };
  