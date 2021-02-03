import React from "react";
import { Global } from "@styles";
import { PageRouter } from "@components";
import { PAGES_CONFIG } from "@consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Global />
      <PageRouter isUserSignedIn={!!user} config={PAGES_CONFIG}></PageRouter>
    </>
  );
};

export default App;
