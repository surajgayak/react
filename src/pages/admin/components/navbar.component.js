import { Button, Navbar, Form, Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../../reducers/user.slicer";

const TitleComponent = ({loggedInUser}) => {
    return (<>
    {loggedInUser.name} <FaUser />
    </>)
}

const AdminNavbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const toggleSidebar = () => {
        // decide 
        document.body.classList.toggle('sb-sidenav-toggled');
    }
    let loggedInUser = useSelector((root) => {
        return root.User?.loggedInUser;
    })
    
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear()
        dispatch(setUser({}));
        navigate('/')

    }
    return (<>
        <Navbar className="sb-topnav" expand variant="dark" bg="dark">
            <NavLink className={"navbar-brand ps-3"} to="/admin">Start Bootstrap</NavLink>
            <Button onClick={toggleSidebar} variant="link" size="sm" className="order-1 order-lg-0 me-4 me-lg-0">
                <FaBars color="white" />
            </Button>
            <Form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <Form.Group className="input-group">
                    <Form.Control
                        placeholder="Search for..."
                    />
                    <Button variant="primary">
                        <FaSearch />
                    </Button>
                </Form.Group>
            </Form>

            <Nav className="ms-auto ms-md-0 me-3 me-lg-4">
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown
                            align={"end"}
                            id="nav-dropdown-dark-example"
                            title={<TitleComponent loggedInUser={loggedInUser} />}
                        >
                            <NavDropdown.Item onClick={logout} href="/">Logout</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Nav>
        </Navbar>
    </>)
}

export default AdminNavbar;