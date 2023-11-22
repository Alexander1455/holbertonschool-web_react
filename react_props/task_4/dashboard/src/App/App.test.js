import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("It should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").length).toEqual(1);
  });
  it("It should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
  it("It should contain the Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });
  it("It should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
  it("check that CourseList is not displayed", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />)
    expect(wrapper.find("login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
});
