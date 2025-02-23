import { useNavigate } from "./useNavigate";

export const Link = ({ to, children }) => {
    const navigate = useNavigate();
  
    const handleClick = (e) => {
      e.preventDefault();
      navigate(to);
    };
  
    return <a href={to} onClick={handleClick}>{children}</a>;
  };
  