import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    
    navigate("/");
  };

  return logout;
};

export default useLogout;