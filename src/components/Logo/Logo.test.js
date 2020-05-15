import React from "react";
import toJson from "enzyme-to-json";
import Logo from "./Logo";

describe(`Logo component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a Logo by default", () => {
    const wrapper = <Logo />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Logo given props", () => {
    const wrapper = <Logo {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
