import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LoginRequest } from "../../Redux/createAction/createAction";
import { Form, Button, Container, Navbar, Nav, Spinner } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => {
        return state.Loginstatus;
    });
    const handleSubmit = () => {
        let loginData = {
            username: username.trim(),
            password: password.trim(),
        };
        dispatch(LoginRequest(loginData));
        setusername("");
        setpassword("");
    };
    useEffect(() => {
        if (
            localStorage.getItem("token") &&
            localStorage.getItem("userType") === "Admin"
        ) {
            history.push("/welcomeAdmin");
        } else {
            localStorage.clear();
            history.push("/welcomeGuest");
        }
    }, []);
    useEffect(() => {
        if (localStorage.getItem("token") === false) {
            history.push("/");
        }
    });
    useEffect(() => {
        if (state.isLogin && localStorage.getItem("token")) {
            if (state.response.role.toLowerCase() === "admin") {
                history.push("/welcome");
                localStorage.setItem("userType", state.response.role);
            } else {
                localStorage.clear();
                history.push("/");
            }
        }
    });

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Poll Management Systemf</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
                <Link to="/registration">
                    <Button className="float-right" variant="outline-info">
                        SignUp
                    </Button>
                </Link>
            </Navbar>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="Submit" variant="dark" size="lg" block
                        disabled={username && password ? false : true}
                        onClick={handleSubmit}>
                        {state.isLoading ? (
                            <Spinner
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        ) : (
                                "Sign In"
                            )}
                    </Button>
                    {state.error ? (
                        <h6 style={{ color: "red" }}>User does not exists</h6>
                    ) : null}
                </Form>
            </Container>
        </div>
    )
}


export default Login;