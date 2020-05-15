import React from "react";
import toJson from "enzyme-to-json";
import ShareButton from "./ShareButton";

describe(`ShareButton component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a ShareButton by default", () => {
    const wrapper = <ShareButton />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the ShareButton given props", () => {
    const wrapper = <ShareButton {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
