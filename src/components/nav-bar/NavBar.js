import React from "react";
import { Nav, Navbar as BSNavBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";

/**
 * Build NavBar component. Displays relevant navigation options
 * @returns {React.FC}
 */
export const NavBar = () => {
  const { home, blog } = useUserContext();

  return (
    <BSNavBar className="border-bottom navbar-dark" bg="primary" expand="lg">
      <BSNavBar.Brand>myplace</BSNavBar.Brand>
      <BSNavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <BSNavBar.Collapse id="navbar-toggle">
        <Nav className="m-auto">
          <a
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href={home}
            data-testid="home-button"
          >
            Home
          </a>
          <Link className="nav-link" to="#">
            Browse
          </Link>
          <Link className="nav-link" to="#">
            Search
          </Link>
          <Link className="nav-link" to="#">
            Invite
          </Link>
          <Link className="nav-link" to="#">
            Film
          </Link>
          <Link className="nav-link" to="#">
            Mail
          </Link>
          <a
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href={blog}
            data-testid="blog-button"
          >
            Blog
          </a>
          <Link className="nav-link" to="#">
            Favorites
          </Link>
          <Link className="nav-link" to="#">
            Forum
          </Link>
          <Link className="nav-link" to="#">
            Groups
          </Link>
          <Link className="nav-link" to="#">
            Events
          </Link>
          <Link className="nav-link" to="#">
            Classifieds
          </Link>
        </Nav>
      </BSNavBar.Collapse>
    </BSNavBar>
  );
};
