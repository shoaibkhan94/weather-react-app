import React from 'react';
import Weather from './Weather';

const WeatherList = (props) => {
    return (
        <ul className="collection" style={{"textAlign": "left", "marginTop": "0px", "marginBottom": "0px"}}>
            {props.weather.map(item => <Weather value={item} key={item.dt}/>)}
        </ul>
    );
};

export default WeatherList;