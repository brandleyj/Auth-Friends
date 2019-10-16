import React from "react";
import { Card, Button } from "@material-ui/core";

const Friend = props => {
	const handleEdit = e => {
		e.preventDefault();
		props.history.push(`/edit/${props.friend.id}`);
	};
	return (
		<Card>
			<div>
				<h1>{props.friend.name}</h1>
				<h2>{props.friend.age} years old</h2>
				<p>Email: {props.friend.email}</p>
			</div>
			<div>
				<div className="ui two buttons">
					<Button basic color="green" onClick={e => handleEdit(e)}>
						Edit
					</Button>
					<Button
						basic
						color="red"
						onClick={e => props.handleDelete(e, props.friend.id)}
					>
						Delete
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default Friend;
