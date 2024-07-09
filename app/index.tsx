import React, { useState } from "react";
import { Redirect } from "expo-router";


const onBoard = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  // return <Redirect href={loggedIn ? "(tab)/dashboard" : "/(onboarding)"} />;
  return <Redirect href={loggedIn ? "(auth)/sign-up" : "/(onboarding)"} />;
};

export default onBoard;
