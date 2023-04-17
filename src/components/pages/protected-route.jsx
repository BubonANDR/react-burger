import {  Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserRequest, refreshToken } from "../../services/api";


export function ProtectedRoute({ element }) {
  const[user,setState] = useState({})
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    const gt = await getUserRequest()
    if (!gt.user){await refreshToken()}
    setState(gt)
    setUserLoaded(true)
  };

  useEffect(() => {
    init();
  }, [refreshToken])

  if (!isUserLoaded) {
    return null;
  }
  

  return  user.success ? element : <Navigate to="/login" replace />
}
