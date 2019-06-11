import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="Şehir..."/>
		<input type="text" name="country" placeholder="Ülke..."/>
		<button>Hava Durumu</button>
	</form>
);

export default Form;