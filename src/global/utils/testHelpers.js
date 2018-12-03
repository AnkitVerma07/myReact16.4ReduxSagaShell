import React from "react";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

/**
 *
 * @param {Component} Component - The component that you want to shallow render using Enzyme
 * @param {Object} props - Any props that will be passed to the shallow render of the component
 */
export const shallowWrapper = (Component, props) => {
  if (!Component) {
    console.log("shallowWrapper requires a Component be passed as a first param");
    return;
  }

  const wrapper = shallow(<Component {...props} />);
  return wrapper;
};

/**
 *
 * @param {Component} Component - The component that you want to mount using Enzyme to be wrapped in ThemeProvider
 * @param {Object} props - Any props that will be passed to the mount of the component
 */
export const mountWrapper = (Component, props) => {
  if (!Component) {
    console.log("mountWrapper requires a Component be passed as a first param");
    return;
  }
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
  return wrapper;
};
