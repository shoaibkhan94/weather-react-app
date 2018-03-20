import React from 'react';

const Weather = (props) => {
    return (
        <li className="collection-item avatar">
            <img src={"http://openweathermap.org/img/w/" + props.value.weather[0].icon + ".png"} alt=""
                 className="circle"/>
            <span className="title">{(new Date(props.value.dt * 1000)).toDateString()}</span>
            <p>
                Daytime Temperature : {props.value.temp.day} C | Max : {props.value.temp.max} C | Min
                : {props.value.temp.min} C | Humidity : {props.value.humidity} % | Rain : {props.value.rain} mm | Wind
                : {props.value.speed} m/s
            </p>
            <a className="secondary-content">{props.value.weather[0].main}</a>
        </li>
    );
};

export default Weather;