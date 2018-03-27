/* eslint-disable no-undef */
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Weather from "./../Weather";

configure({adapter: new Adapter()});

describe("Weather Component", () => {

	it("should render weather component with proper values", () => {
		let wrapper = shallow(<Weather value={{
			"dt": 1522134000,
			"temp": {
				"day": 21.96,
				"min": 17.19,
				"max": 21.96,
				"night": 17.19,
				"eve": 21.96,
				"morn": 21.96
			},
			"pressure": 949.64,
			"humidity": 39,
			"weather": [{
				"id": 800,
				"main": "Clear",
				"description": "sky is clear",
				"icon": "01n"
			}],
			"speed": 3.81,
			"deg": 288,
			"clouds": 0
		}}/>);
		expect(wrapper.find(".title").text()).toEqual("Tue Mar 27 2018");
		expect(wrapper.find(".secondary-content").text()).toEqual("Clear");
	});
});