/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Logo = () => (
  <Link
    sx={{
      color: "text",
      textDecoration: "none",
      fontSize: [4],
      letterSpacing: "text"
    }}
    to="/"
  >
    tim deacon
    <h6
      sx={{
        fontFamily: "main",
        letterSpacing: "logo",
        fontSize: [3]
      }}
    >
      architect
    </h6>
  </Link>
);

export default Logo;
