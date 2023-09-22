import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { useSelector } from "react-redux"
//import { FaUser, FaUsers } from "react-icons/fa"
import { NavLink } from "react-router-dom"

// import "" from "../../"
// same location => ./ 
// one step outside from CWD => ../
// export const HomeMenu = (props) => {
export const HomeMenu = () => {
    let user = useSelector((root) => {
        return root.User.loggedInUser;
    })
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Logo Here</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent1" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarSupportedContent1">
                    <Nav className="me-auto">
                        <Nav.Item>
                            
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <NavLink to="/" className="nav-link">Home</NavLink>

                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/categories">Categories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/brands">Brands</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/all-products">Products</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Nav>



                        {
                            user && user.name ? <>
                                <Nav.Item>
                                    <Nav.Link href="/login">

                                       {user.name}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink className={"nav-link"} to="/register">
                                        Logout
                                    </NavLink>
                                </Nav.Item>
                            </> : <>
                                <Nav.Item>
                                    <NavLink className={"nav-link"} to="/login">

                                        Login In</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink className={"nav-link"} to="/register">

                                        Register
                                    </NavLink>
                                </Nav.Item>
                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>)
}