import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>;
       <LogoutButton />
    </div>
  );
};

export default LoginButton;