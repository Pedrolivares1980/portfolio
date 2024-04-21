import React, { Component } from "react";
import Avatar from "../components/avatar/Avatar";
import AboutMenu from "../components/about/AboutMenu";

export default class About extends Component {
	render() {
		return (
			<>
				<Avatar page="about" />
				<AboutMenu />
			</>
		);
	}
}
