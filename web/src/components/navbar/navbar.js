/** @jsx jsx */
import { jsx } from "theme-ui";
import styles from "./navbar.module.css";
import { Link } from "gatsby";
import { DarkModeToggle } from "gatsby-theme-overreacted-toggle";
import Logo from "../logo";

const Navbar = () => {
  return (
    <header
      sx={{
        backgroundColor: "background"
      }}
      className={styles.header}
    >
      <a href="" className={styles.logo}>
        <Logo />
      </a>
      <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label className={styles.menu_icon} for="menu-btn">
        <span className={styles.navicon}></span>
      </label>
      <ul
        sx={{
          backgroundColor: "background"
        }}
        className={styles.menu}
      >
        <li>
          <Link
            sx={{
              color: "text",
              textDecoration: "none",
              fontFamily: "main",
              fontSize: [2],
              fontWeight: "bold"
            }}
            to="/instagram"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            sx={{
              color: "text",
              textDecoration: "none",
              fontFamily: "main",
              fontSize: [2],
              fontWeight: "bold"
            }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className={styles.toggle}>
          <Link to="">
            <DarkModeToggle />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
