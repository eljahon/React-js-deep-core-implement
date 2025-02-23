import React from "react";
import { useRouter } from "./useRouter"; // Hooklarimizni import qilamiz

export const Router = ({ children }) => {
  const { currentPath } = useRouter();

  let matchedRoute = null;

  // Route’larni tekshirib, to‘g‘ri komponentni topamiz
  React.Children.forEach(children, (child) => {
    if (!matchedRoute && React.isValidElement(child) && child.props.path === currentPath) {
      matchedRoute = child;
    }
  });

  return matchedRoute;
};
