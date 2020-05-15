import React from "react";
import toJson from "enzyme-to-json";
import RegistrationPage from "./RegistrationPage";

describe(`RegistrationPage component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a RegistrationPage by default", () => {
    const wrapper = <RegistrationPage />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the RegistrationPage given props", () => {
    const wrapper = <RegistrationPage {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
