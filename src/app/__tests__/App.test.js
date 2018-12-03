import { shallow } from "enzyme";
import React from "react";
import App from "../App";

describe("App", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
