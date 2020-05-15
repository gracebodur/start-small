import React from "react";
import toJson from "enzyme-to-json";
import Header from "./Header";

describe(`Header component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a Header by default", () => {
    const wrapper = <Header />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Header given props", () => {
    const wrapper = <Header {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
