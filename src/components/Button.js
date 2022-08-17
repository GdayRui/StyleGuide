import React from "react";

const Button = (props) => {

	return (
		<input type="button" value={props.text} disabled={props.disabled} />
	)
}

export default Button;