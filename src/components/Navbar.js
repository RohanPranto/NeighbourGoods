import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";
import "../App.css"
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Link className="nav-link" to="/" onClick={() => loginWithRedirect()}>Log In</Link>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link className="nav-link" to="/" onClick={() => logout({ 
// @ts-ignore
    returnTo: window.location.origin })}>Log Out</Link>
  );
};

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        <Link to="/" className="navbar-brand">NeighbourGoods!</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy">Buy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell">Sell</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item d-flex">
              {isAuthenticated && <p className="nav-link m-0">{user?.nickname || user?.name || 'User'}</p>}
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <LogoutButton />
              </li>
            ) : (
              <li className="nav-item">
                <LoginButton />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
