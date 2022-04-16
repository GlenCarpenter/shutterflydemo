import React from "react";
import renderer from "react-test-renderer";
import { Table } from "../";

it("renders correctly", () => {
  const tree = renderer.create(<Table />).toJSON();
  expect(tree).toMatchSnapshot();
});