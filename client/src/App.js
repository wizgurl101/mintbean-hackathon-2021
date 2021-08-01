import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// ProtectedRoute to be used if there's a component only logged in users should access
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Modal from "./components/Modal/modal";
import Modal2 from "./components/Modal/modal2";
import GameBoard from "./components/GameBoardPage";
import OnlineGameBoard from "./components/GameBoardPage/OnlineGameBoard";
import Home from "./components/Homepage/Home";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  // must complete API in the backend before this works properly
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <Modal />
      <Modal2 />
      <Switch>
        <route path="/" exact={true}>
          <Home />
        </route>
        <route path="/gameboard" exact={true}>
          <GameBoard />
        </route>
        <route path="/gameboard/online">
          <OnlineGameBoard />
        </route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
