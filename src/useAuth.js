import { useState } from "react";


// CREATING USER AUTHENTICATION IN A STATE BY SETTIMEOUT FUNCTION....
export default function useAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  function login() {
    setTimeout(() => {
      setIsAuth(true);
    }, 500);
  }
  function logout() {
    setTimeout(() => {
      setIsAuth(false);
    }, 500);
  }
  return [isAuth, login, logout];
}
