/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="navigation">
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul>
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
              href="#news"
            >
              News
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <div style={{ position: "relative", float: "right" }}>
            <a
              className="switch-mode"
              href="#"
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
              data-testid="toggle-theme-btn"
            >
              Switch nav to {!dark ? "Dark" : "Light"} mode
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}
