import React from "react";
import toJson from "enzyme-to-json";
import LandingPage from "./LandingPage";

describe(`LandingPage component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a LandingPage by default", () => {
    const wrapper = <LandingPage />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the LandingPage given props", () => {
    const wrapper = <LandingPage {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
