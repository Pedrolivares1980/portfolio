import React, { Component } from "react";
import Avatar from "../components/avatar/Avatar";
import SkillsMenu from "../components/skills/SkillsMenu";

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    );
  }
}
