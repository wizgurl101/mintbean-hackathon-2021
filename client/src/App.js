
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// ProtectedRoute to be used if there's a component only logged in users should access
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Modal from "./components/Modal/modal";
import Modal2 from "./components/Modal/modal2";
import GameBoard from '../src/pages/Gameboard';

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <Modal />
      <Modal2 />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
    <GameBoard/>
      </div>
    </BrowserRouter>
  );
}

export default App;
