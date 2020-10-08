import React, { useEffect, useState } from "react";
import {
    Card,
    Spinner,
    Navbar,
    Button,
    Nav,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ListPollRequest } from "../../Redux/createAction/createAction";
import { useDispatch, useSelector } from "react-redux";
const Dashboard = () => {
    const [latestPoll, setlatestPoll] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(ListPollRequest());

    })
    const pollList = useSelector((state) => {
        return state.PollListstatus.poll;
    })
    const pollstatus = useSelector((state) => {
        return state.PollListstatus.isPollfetched;
    })

    useEffect(() => {
        setlatestPoll(pollList);
    });

    const poll = [...latestPoll].reverse();
    
    const handleLogout = () => {
        localStorage.clear();
        history.push("/");
    };
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Link to="/login">
                    <Navbar.Brand>Polling Page</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                </Nav>
                <Link to="/addpoll">
                    <Button variant="success">Add Poll</Button>
                </Link>
                <span>_</span>
                <Link to="/">
                    <Button
                        className="logout"
                        variant="danger"
                        onClick={handleLogout}
                    >
                        Log Out
          </Button>
                </Link>
            </Navbar>
            {pollstatus === false ? (
                <Spinner className="spinner" animation="border" variant="primary" />
            ) : null}
            {poll.map((item) => (
                <Card key={item._id} className="Card">
                    <Card.Body >
                        <div className="Card1">
                            <Card.Title>Title :{item.title}</Card.Title>
                            {item.options.map((option, i) => (
                                <div key={i}>
                                    <input type="radio" name={item._id} />
                                    <label>{option.option}</label>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <Link to="/editpoll">
                            <Button variant="dark">Edit Poll</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </React.Fragment>
    );
};
export default Dashboard;