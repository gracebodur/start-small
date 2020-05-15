import React from "react";
import toJson from "enzyme-to-json";
import ContactButton from "./ContactButton";

describe(`ContactButton component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a ContactButton by default", () => {
    const wrapper = <ContactButton />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the ContactButton given props", () => {
    const wrapper = <ContactButton {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
