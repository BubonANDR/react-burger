import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserRequest, refreshToken } from "../services/api";


export function ProtectedRoute({ element }) {
  const [user, setState] = useState({});
  const [isUserLoaded, setUserLoaded] = useState(false);

  const location = useLocation();

  const init = async () => {
    let gt = await getUserRequest();
    !gt.success && await refreshToken();
    setState(gt);
    setUserLoaded(true);
  };
  
  useEffect(() => {
    
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return user.success ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
