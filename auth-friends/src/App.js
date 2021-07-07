import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import FriendsList from "./Components/FriendsList";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import AddFriend from "./Components/AddFriend";
import Logout from "./Components/Logout";
import { Button } from "@material-ui/core";

function App(props) {
	const [logged, setLogged] = useState(true);
	return (
		<div className="App">
			<br />
			{logged && (
				<Button>
					<Link to="/">Log In</Link>
				</Button>
			)}

			{!logged && (
				<Button>
					<Link to="/logout">Log Out</Link>
				</Button>
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
