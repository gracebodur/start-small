import React from "react";
import toJson from "enzyme-to-json";
import ProjectStarRating from "./ProjectStarRating";

describe(`ProjectStarRating component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a ProjectStarRating by default", () => {
    const wrapper = <ProjectStarRating />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the ProjectStarRating given props", () => {
    const wrapper = <ProjectStarRating {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
