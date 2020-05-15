import React from "react";
import toJson from "enzyme-to-json";
import ProjectReviewForm from "./ProjectReviewForm";

describe(`ProjectReviewForm component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a ProjectReviewForm by default", () => {
    const wrapper = <ProjectReviewForm />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the ProjectReviewForm given props", () => {
    const wrapper = <ProjectReviewForm {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
