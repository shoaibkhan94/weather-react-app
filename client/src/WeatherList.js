import React from 'react';
import Weather from './Weather';

const WeatherList = (props) => {
    console.log(props.weather);
    return(
        <ul className="collection" style={{"textAlign":"left","marginTop":"0px","marginBottom":"0px"}}>
            {props.weather.map((item, i) => <Weather value={item} key={item.dt}/>)}
        </ul>
    );
};

export default WeatherList;