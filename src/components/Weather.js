import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {
	 	props.city && props.country && <p className="weather__key"> Lokasyon:
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p>
	 }
	 {
	 	props.temperature && <p className="weather__key"> Sıcaklık:
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p>
	 }
	 {
	 	props.humidity && <p className="weather__key"> Nem:
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p>
	 }
	 {
	 	props.description && <p className="weather__key"> Durum:
	 		<span className="weather__value"> { props.description } </span>
	 </p>
	 }
	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }
	</div>
);

export default Weather;