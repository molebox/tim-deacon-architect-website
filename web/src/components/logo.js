/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Logo = () => (
  <Link
    sx={{
      color: "text",
      textDecoration: "none",
      fontSize: [5],
      letterSpacing: "text"
    }}
    to="/"
  >
    tim deacon
    <h6
      sx={{
        fontFamily: "main",
        letterSpacing: "logo",
        fontSize: [2]
      }}
    >
      chartered architect
    </h6>
  </Link>
);

export default Logo;
