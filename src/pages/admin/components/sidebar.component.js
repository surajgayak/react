import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
  let logged = useSelector((root) => {
    return root?.User?.loggedInUser;
  });
  return (
    <>
      <div id="layoutSidenav_nav" style={{ backgroundColor: "black" }}>
        {/* <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        > */}
        <div className="sb-sidenav-menu">
          <div className="nav">
            {/* <div className="sb-sidenav-menu-heading">Core</div> */}
            <NavLink
              className="nav-link "
              to="/admin"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-home"></i>
              </div>
              Dashboard
            </NavLink>
            <NavLink
              className="nav-link"
              href="banner.html"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Banner Management
            </NavLink>
            <NavLink
              to="/admin/brand"
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns"></i>
              </div>
              Brand Management
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </NavLink>

            <NavLink
              to="/user"
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              User Management
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </NavLink>

            <NavLink
              to="/product"
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Products Management
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </NavLink>

            <NavLink
              to="/order"
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open"></i>
              </div>
              Order Management
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </NavLink>

            <div className="sb-sidenav-menu-heading" style={{ color: "white" }}>
              Features
            </div>
            <br></br>
            <NavLink className="nav-link" to="/add" style={{ color: "white" }}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area"></i>
              </div>
              Add Management
            </NavLink>
            <NavLink
              className="nav-link"
              to="/offer"
              style={{ color: "white" }}
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-table"></i>
              </div>
              Offer Management
            </NavLink>
          </div>
        </div>
        <div className="sb-sidenav-footer" style={{ color: "white" }}>
          <div className="small">Logged in as:</div>
          {logged?.name}
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
