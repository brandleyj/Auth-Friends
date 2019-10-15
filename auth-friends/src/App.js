import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import FriendsList from "./Components/FriendsList";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import AddFriend from "./Components/AddFriend";
import Logout from "./Components/Logout";
import styled from "styled-components";

function App(props) {
	const [logged, setLogged] = useState(true);
	return (
		<div className="App">
			<br />
			{logged && (
				<button>
					<Link to="/">Log In</Link>
				</button>
			)}

			{!logged && (
				<button>
					<Link to="/logout">Log Out</Link>
				</button>
			)}
			<br />
			<br />

			<PrivateRoute
				path="/friends"
				component={props => <FriendsList {...props} setLogged={setLogged} />}
			/>
			<PrivateRoute
				path="/add"
				component={props => <AddFriend {...props} />}
				setLogged={setLogged}
			/>
			<Route
				exact
				path="/"
				component={props => <Login {...props} setLogged={setLogged} />}
			/>
			<Route
				path="/logout"
				component={props => <Logout {...props} setLogged={setLogged} />}
			/>
		</div>
	);
}

export default App;
