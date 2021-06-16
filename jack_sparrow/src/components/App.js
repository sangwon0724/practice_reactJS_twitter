import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "myDatabase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} jack Sparrow</footer>
    </>
  );
}

export default App;
