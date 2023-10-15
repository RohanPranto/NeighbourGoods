import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Trade from "./pages/Trade";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ 
// @ts-ignore
    returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

function App() {
  const { isAuthenticated , user } = useAuth0();

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
