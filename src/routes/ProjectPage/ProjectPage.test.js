import React from "react";
import toJson from "enzyme-to-json";
import ProjectPage from "./ProjectPage";

describe(`ProjectPage component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a ProjectPage by default", () => {
    const wrapper = <ProjectPage />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the ProjectPage given props", () => {
    const wrapper = <ProjectPage {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
