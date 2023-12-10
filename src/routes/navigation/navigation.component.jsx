import { Fragment } from "react"; // Fragment är en component som renderar ingenting.
import { Outlet, Link } from "react-router-dom"; // Link är precis som a-tag men används i samband med React Router.

import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"; // Importerar logo från assets-mappen och gör den till en component som du kan använda i din navbar.

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
