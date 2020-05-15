import React from "react";
import toJson from "enzyme-to-json";
import Intro from "./Intro";

describe(`Intro component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a Intro by default", () => {
    const wrapper = <Intro />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Intro given props", () => {
    const wrapper = <Intro {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
