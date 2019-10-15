import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";

const Login = props => {
	const [user, setUser] = useState({
		username: "",
		password: ""
	});
	const [display, setDisplay] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			axiosWithAuth()
				.get("friends")
				.then(res => {
					props.setLogged(false);
					props.history.push("/friends");
				})
				.catch(err => {
					localStorage.setItem("token", null);
					props.setLogged(true);
					setDisplay(true);
				});
		} else {
			setDisplay(true);
		}
	}, []);

	const handleSubmit = e => {
		e.preventDefault();

		axiosWithAuth()
			.post("login", user)
			.then(res => {
				localStorage.setItem("token", res.data.payload);
				props.setLogged(false);
				props.history.push("/friends");
			})
			.catch(err => {
				props.setLogged(true);
				console.log("ERROR", err);
			});
	};

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};
	return (
		<div>
			{display && (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Enter username"
						value={user.username}
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						value={user.password}
						onChange={handleChange}
					/>
					<button>Submit</button>
				</form>
			)}
		</div>
	);
};

export default Login;
