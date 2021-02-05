import React from "react";
import toJson from "enzyme-to-json";
import FbShareButton from "./FbShareButton";

describe(`FbShareButton component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a FbShareButton by default", () => {
    const wrapper = <FbShareButton />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the FbShareButton given props", () => {
    const wrapper = <ShareButton {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
