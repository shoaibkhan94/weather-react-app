/* eslint-disable no-undef */
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WeatherList from "./../WeatherList";
import Weather from "./../Weather";

configure({adapter: new Adapter()});

describe("WeatherList Component", ()=>{

	it("should render 5 components", ()=>{
		let wrapper = shallow(<WeatherList weather={[{"dt":1522134000,"temp":{"day":21.96,"min":17.19,"max":21.96,"night":17.19,"eve":21.96,"morn":21.96},"pressure":949.64,"humidity":39,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":3.81,"deg":288,"clouds":0},{"dt":1522220400,"temp":{"day":34.5,"min":14.67,"max":35.57,"night":22.52,"eve":33.93,"morn":14.67},"pressure":950.04,"humidity":25,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":2.87,"deg":316,"clouds":24},{"dt":1522306800,"temp":{"day":33.62,"min":18.81,"max":35.53,"night":20.73,"eve":34.2,"morn":18.81},"pressure":950.06,"humidity":27,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"speed":1.87,"deg":330,"clouds":64},{"dt":1522393200,"temp":{"day":35.62,"min":15.19,"max":36.68,"night":20.94,"eve":35.01,"morn":15.19},"pressure":949.29,"humidity":25,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":2.11,"deg":14,"clouds":0},{"dt":1522479600,"temp":{"day":33.83,"min":14.59,"max":34.49,"night":19.41,"eve":34.49,"morn":14.59},"pressure":957.59,"humidity":0,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.84,"deg":317,"clouds":0}]}/>);
		expect(wrapper.find(Weather)).toHaveLength(5);
	});
	it("should not render any components", ()=>{
		let wrapper = shallow(<WeatherList weather={[]}/>);
		expect(wrapper.find(Weather)).toHaveLength(0);
	});
});