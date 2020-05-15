import React from "react";
import toJson from "enzyme-to-json";
import NotFoundPage from "./NotFoundPage";

describe(`NotFoundPage component`, () => {
  const props = {
    id: "a",
    name: "test-class-name"
  };

  it("renders a NotFoundPage by default", () => {
    const wrapper = <NotFoundPage />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the NotFoundPage given props", () => {
    const wrapper = <NotFoundPage {...props} />;
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
