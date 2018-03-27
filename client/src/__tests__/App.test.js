/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./../App";

configure({adapter: new Adapter()});


describe("App Component", () => {


	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it("should render title correctly", () => {
		let wrapper = shallow(<App/>);
		expect(wrapper.find(".App-title").text()).toEqual("Weather Forecast For Pune");
	});
});