import React from "react";
import toJson from "enzyme-to-json";
import ProjectListItem from "./ProjectListItem";

describe(`ProjectListItem component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a ProjectListItem by default", () => {
    const wrapper = <ProjectListItem />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the ProjectListItem given props", () => {
    const wrapper = <ProjectListItem {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
